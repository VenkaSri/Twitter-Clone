export const useEditUsername = () => {
  const [updateUsername, { isSuccess: usernameUpdated }] =
    useUpdateUsernameMutation();

  const updateUsernameHandler = async () => {
    const data = JSON.stringify({ updatedUsername: updatedUsername });
    try {
      const respone = await updateUsername(data);
    } catch (e) {
      console.log(e);
    }
  };
};
