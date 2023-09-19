export const getData = async (url = "") => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const respone = await fetch(BASE_URL + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  return respone;
};
