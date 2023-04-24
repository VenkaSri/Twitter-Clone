import axios from "axios";

const fetchFollowers = async (email) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_GET_ALL_ACCOUNTS + `?emailOrPhone=${email}`
    );
    const users = response.data.data.users;
    return users;
  } catch (error) {
    console.error(error);
  }
};

export default fetchFollowers;
