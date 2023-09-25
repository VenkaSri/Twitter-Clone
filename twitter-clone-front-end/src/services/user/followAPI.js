import { postData } from "../postData";
import { getData } from "../auth/getData";

const followUser = async (userIdToFollow) => {
  try {
    const result = await postData(`/v1/api/users/${userIdToFollow}/follow`);
    return result;
  } catch (e) {
    console.log(e);
  }
};

const unfollowUser = async (userIdToFollow) => {
  try {
    const result = await postData(`/v1/api/users/${userIdToFollow}/unfollow`);
    return result;
  } catch (e) {
    console.log(e);
  }
};

export { followUser, unfollowUser };
