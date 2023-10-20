import ProfilePicture from "@components/ProfilePicture";
import RoundedTextButton from "../RoundedTextButton";
import CenteredText from "../CenteredText";
import { Close } from "../icons/Icons";
import UserCard from "./UserCard";
import { useSuggestUsersQuery } from "../public/publicApi";
import { useEffect, useState } from "react";

const FollowSuggestionCard = () => {
  const page = 0; // Set the desired page
  const pageSize = 5; // Set the desired page size
  const { data, isLoading, isSuccess, isError, error } = useSuggestUsersQuery();
  const [cards, setCards] = useState(null);

  useEffect(() => {
    if (isSuccess) {
      data.data.content.map((user) => console.log(user));
    }
  }, [data, isLoading, isSuccess, isError, error]);

  return (
    <>
      {isSuccess &&
        data.data.content.map((user) => (
          <>
            {" "}
            <div className="flex flex-col items-center justify-center  mt-2">
              <UserCard
                showBio
                options={<FollowButton />}
                userData={user}
                key={user.id}
              />
            </div>
          </>
        ))}

      {isLoading && (
        <div className="flex items-center justify-center  mt-2">loaidng</div>
      )}
    </>
  );
};

const FollowButton = () => {
  return (
    <div className="ml-3 self-start">
      <RoundedTextButton
        text="Follow"
        className="btn--action flex min-h-[32px] min-w-[32px] rounded-full px-3"
      />
    </div>
  );
};

export default FollowSuggestionCard;
