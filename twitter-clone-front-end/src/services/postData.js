export const postData = async (url = "", data = {}) => {
  const respone = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return respone.json();
};
