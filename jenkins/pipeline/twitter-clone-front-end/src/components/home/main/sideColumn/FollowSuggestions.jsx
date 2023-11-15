import FollowToggleButton from "@/components/FollowToggleButton";
import { useSuggestUsersQuery } from "@/components/public/publicApi";
import UserCard from "@components/home/UserCard";

export const FollowSuggestions = () => {
  const { data, isFetching } = useSuggestUsersQuery(1);
  const userCards = data?.data.content ?? [];
  return (
    <>
      {userCards.map((user, index) => (
        <div
          className="flex flex-col items-center justify-center mt-2 grow w-full "
          key={index}
        >
          <UserCard
            options={
              <FollowToggleButton
                // onClick={() => handleFollowUser(user.id)}
                id={user.id}
              />
            }
            userData={user}
          />
        </div>
      ))}
    </>
  );
};
