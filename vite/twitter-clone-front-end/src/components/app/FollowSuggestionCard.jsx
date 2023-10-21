import RoundedTextButton from "../RoundedTextButton";
import UserCard from "./UserCard";
import { useSuggestUsersQuery } from "../public/publicApi";
import { useEffect, useState } from "react";
import { OverlayLoader } from "../dialog/OverlayLoader";

const FollowSuggestionCard = () => {
  const [page, setPage] = useState(0);
  const { data, isFetching } = useSuggestUsersQuery(page);
  const userCards = data?.data.content ?? [];
  const totalPage = 5;

  useEffect(() => {
    const scrollDiv = document.getElementById("scrollableDiv");
    const handleScroll = () => {
      const container = scrollDiv;
      if (container) {
        const bottom =
          container.scrollHeight - container.scrollTop ===
          container.clientHeight;
        if (bottom && !isFetching) {
          if (page === totalPage) return;
          setPage((prevPage) => prevPage + 1);
        }
      }
    };

    const container = scrollDiv;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isFetching, page]);

  return (
    <>
      <div>
        {userCards.map((user) => (
          <div
            className="flex flex-col items-center justify-center mt-2"
            key={user.id}
          >
            <UserCard showBio options={<FollowButton />} userData={user} />
          </div>
        ))}
        {isFetching && (
          <div className="flex justify-center items-center">
            <OverlayLoader />
          </div>
        )}
      </div>
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
