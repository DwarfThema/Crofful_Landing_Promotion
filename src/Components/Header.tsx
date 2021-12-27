import styled from "styled-components";
import logo from "./img/crofful-1@2x.svg";
import line from "./img/line@1x.svg";
import bg from "./img/grad@1x.svg";

const FixedBar = styled.div`
  position: fixed;
  width: 100%;
  height: 5%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  min-width: 100%;
  background-color: #ffffff4c;
  backdrop-filter: blur(25px) brightness(100%);
  -webkit-backdrop-filter: blur(25px) brightness(100%);
  background-image: url(${bg});
  background-size: cover;
`;

const OverlapGroup = styled.div`
  min-width: 100%;
  height: 105%;
  margin-top: -2px;
  display: flex;
  align-items: flex-start;
  background-image: url(${line});
  background-size: cover;
`;

const Crofful = styled.img`
  position: relative;
  width: 100%;
  height: 50%;
  top: 25%;
  left: -35%;
`;

function Header() {
  return (
    <>
      <FixedBar>
        <OverlapGroup>
          <Crofful src={logo} />
        </OverlapGroup>
      </FixedBar>
    </>
  );
}

export default Header;
