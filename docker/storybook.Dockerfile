FROM node:20 AS base

WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
EXPOSE 6006
RUN pnpm build
CMD ["pnpm", "storybook"]