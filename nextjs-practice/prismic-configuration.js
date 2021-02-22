import Prismic from "@prismicio/client";

export const apiEndpoint = "https://nextjsexample.cdn.prismic.io/api/v2";
export const accessToken =
  "MC5ZRE1hdlJVQUFDWUE5RXJu.NO-_ve-_vTPvv73vv73vv70277-9S--_ve-_vTJ6eu-_vRzvv73vv73vv70R77-977-977-9BCLvv70oae-_vS99";

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};
