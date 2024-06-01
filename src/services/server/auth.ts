import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { env } from "../libs/env.mjs";
import { UserType } from "@/types/user";
import { generateSession } from "../apis/generate-session";
import { cookies } from "next/headers";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    strategy: "jwt";
    expires: "3600s";
    accessToken: string;
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"] &
      UserType;
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account && profile) {
        try {
          const response = await generateSession({
            email: profile.email!,
            name: profile.name!,
          });
  
          const session_token = response.headers["set-cookie"]![0].split(";")[0].split("=")[1];
          token.accessToken = String(session_token)
        } catch (error) {
          console.error(error);
        }
      }
      return token
    },
    async signIn({ user, account }) {
      if (!user.email || !user.name) {
        return false;
      }

      if (account?.provider === "google") {
        try {
          const response = await generateSession({
            email: user.email,
            name: user.name,
          });

          const token =
            response.headers["set-cookie"]![0].split(";")[0].split("=")[1];
          cookies().set("session_token", String(token), {
            path: "/",
            expires: 3600,
            sameSite: "strict",
            httpOnly: true,
            secure: true,
          });

          return true;
        } catch (error) {
          return false;
        }
      }
      return false;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken as string
      session.user.id = token.sub!;
      
      return session
    }
  },
  providers: [
    GoogleProvider(
      {
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
      }
      // {
    ),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Google provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  pages: {
    signIn: "/pt/auth/not-authorized",
    error: '/pt/auth/not-authorized',
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
