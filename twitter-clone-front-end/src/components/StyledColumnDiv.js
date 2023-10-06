import styled from "styled-components";

const FlexColDiv = styled.div`
  align-items: stretch;
  border: 0px solid black;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  z-index: 0;
`;

export const StyledColumnDiv = ({ children, ...props }) => {
  return <FlexColDiv {...props}>{children}</FlexColDiv>;
};
