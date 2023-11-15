import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { CHARACTER_LIMIT } from "../../../../constants";

export const CharactersProgress = () => {
  const characterValue = useSelector(
    (state) => state.rootReducer.tweetState.currentNumberOfCharacters
  );

  const StyledContainer = styled("div")({
    position: "relative",
    width: "30px", // or whatever the size of your circle is
    height: "30px",
  });

  const CenteredText = styled("div")({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "13px",
    color: characterValue >= CHARACTER_LIMIT ? "#f4212e" : "black",
  });

  const BackgroundCircle = styled(CircularProgress)({
    color: "#eff3f4", // Unfilled portion color
    position: "absolute",
    display: CHARACTER_LIMIT - characterValue <= -9 ? "none" : "block",
  });

  const FilledCircle = styled(CircularProgress)((props) => ({
    color:
      characterValue >= 280
        ? "#f4212e"
        : characterValue >= 260
        ? "#FFD700"
        : "#1d9bf0",
    display: CHARACTER_LIMIT - characterValue <= -9 ? "none" : "block",
  }));

  const isApproachingLimit = characterValue >= 260;

  const convertToPercent = (value, max) => {
    let percentage = (value / max) * 100;
    return Math.min(percentage, 100);
  };

  return (
    <StyledContainer>
      <BackgroundCircle size={30} variant="determinate" value={100} />
      <FilledCircle
        size={30}
        variant="determinate"
        value={convertToPercent(characterValue, CHARACTER_LIMIT)}
      />
      <CenteredText className="font-cThin">
        {isApproachingLimit && CHARACTER_LIMIT - characterValue}
      </CenteredText>
    </StyledContainer>
  );
};

export default CharactersProgress;
