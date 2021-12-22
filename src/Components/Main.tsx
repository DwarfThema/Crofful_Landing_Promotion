import styled from "styled-components";
import bg from "./img/bg1@1x.svg";

const BG1 = styled.img`
  width: 100%;
  z-index: -10;
`;

function Main() {
  return (
    <>
      <BG1 src={bg} />
    </>
  );
}

export default Main;
