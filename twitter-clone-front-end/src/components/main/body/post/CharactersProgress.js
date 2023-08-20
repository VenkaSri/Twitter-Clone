import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { CHARACTER_LIMIT } from "../../../../constants";

const StyledContainer = styled("div")({
  position: "relative",
});

const BackgroundCircle = styled(CircularProgress)({
  color: "#eff3f4", // Unfilled portion color
  position: "absolute",
});

const FilledCircle = styled(CircularProgress)({
  color: "#1d9bf0", // Filled portion color
});

export const CharactersProgress = () => {
  const characterValue = useSelector(
    (state) => state.rootReducer.tweetState.currentNumberOfCharacters
  );

  console.log(characterValue);
  const convertToPercent = (value, max) => {
    return (value / max) * 100;
  };

  return (
    <StyledContainer>
      <BackgroundCircle size={22} variant="determinate" value={100} />
      <FilledCircle
        size={22}
        variant="determinate"
        value={convertToPercent(characterValue, CHARACTER_LIMIT)}
      />
    </StyledContainer>
  );
};

export default CharactersProgress;
