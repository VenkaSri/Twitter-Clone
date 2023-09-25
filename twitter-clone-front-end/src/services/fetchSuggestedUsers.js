import { getData } from "../services/auth/getData";

export const fetchSuggestedUsers = async (page, pageSize) => {
  try {
    const result = await getData(
      `/v1/api/users/suggestions?page=${page}&pageSize=${pageSize}`
    );
    const response = await result.json();
    return response.content;
  } catch (error) {
    throw new Error("Error fetching suggested users: " + error.message);
  }
};
