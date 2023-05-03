import axios from "axios";

const fetchAllAccounts = async (email) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_GET_ALL_ACCOUNTS + `?emailOrPhone=${email}`
    );
    const users = response.data.data.users;
    return users.map((user) => ({ ...user, isFollowing: false }));
  } catch (error) {
    console.error(error);
  }
};

const fetchFollowers = async (userId) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_GET_FOLLOWERS + `${userId}`
    );
    const users = response.data.data.users;
    return users;
  } catch (error) {
    console.error(error);
  }
};

const follow = async (email, username) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_FOLLOW_ACCOUNT +
        `?followerEmail=${email}&followedUsername=${username}`
    );
    return response.data.status;
  } catch (error) {
    console.error(error);
  }
};

const unfollow = async (email, username) => {
  console.log(process.env.REACT_APP_UNFOLLOW_ACCOUNT);
  try {
    const response = await axios.delete(
      process.env.REACT_APP_UNFOLLOW_ACCOUNT +
        `?followerEmail=${email}&followedUsername=${username}`
    );
    return response.data.status;
  } catch (error) {
    console.error(error);
  }
};

export { fetchAllAccounts, fetchFollowers, follow, unfollow };
