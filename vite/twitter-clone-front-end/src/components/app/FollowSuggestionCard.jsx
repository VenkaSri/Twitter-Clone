import UserCard from "./UserCard";
import { useSuggestUsersQuery } from "../public/publicApi";
import FollowToggleButton from "@/components/FollowToggleButton";
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
      {userCards.map((user) => (
        <div
          className="flex flex-col items-center justify-center mt-2 grow w-full "
          key={user.id}
        >
          <UserCard
            showBio
            options={<FollowToggleButton id={user.id} />}
            userData={user}
          />
        </div>
      ))}
      {isFetching && (
        <div className="flex justify-center items-center">
          <OverlayLoader />
        </div>
      )}
    </>
  );
};

export default FollowSuggestionCard;
