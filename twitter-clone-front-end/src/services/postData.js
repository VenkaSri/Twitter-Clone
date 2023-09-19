export const postData = async (url = "", data = {}) => {
  const BASE_URL = process.env.REACT_APP_AUTH_BASE_URL;
  console.log(JSON.stringify(data));
  const respone = await fetch(BASE_URL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return respone;
};
