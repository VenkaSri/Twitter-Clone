export const postData = async (url = "", data = {}) => {
  const respone = await fetch("http://localhost:8080/api/auth/exists", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return respone.json();
};
