import { api } from "../libs/axios";

export type postVoteType = {
  captcha: string;
  projectId: string;
  cookies?: string;
};

export async function postVote({ captcha, cookies, projectId }: postVoteType) {
  return {
    error: "error"
  }
  // const { data } = await api.post(
  //   `/users/vote?projectId=${projectId}`,
  //   {},
  //   {
  //     headers: {
  //       captchatoken: captcha,
  //       cookie: cookies,
  //     },
  //   }
  // );

  // return data;
}
