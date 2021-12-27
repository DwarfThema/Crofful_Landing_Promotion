import styled from "styled-components";
import logo from "./img/crofful-1@2x.svg";
import line from "./img/line@1x.svg";
import bg from "./img/grad@1x.svg";

const FixedBar1 = styled.div`
  position: fixed;
  height: 130px;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  min-width: 3044px;
`;

const OverlapGroup = styled.div`
  width: 3044px;
  height: 71px;
  position: relative;
  margin-top: -2px;
`;

const BgBlur = styled.div`
  position: absolute;
  width: 3044px;
  height: 65px;
  top: 2px;
  left: 0;
  background-color: ${prop=>prop.theme.color.white3};
  backdrop-filter: blur(25px) brightness(100%);
  -webkit-backdrop-filter: blur(25px) brightness(100%);
`;

const Grad = styled.img`
  position: absolute;
  width: 3044px;
  height: 65px;
  top: 2px;
  left: 0;
`;

const Line = styled.img`
  position: absolute;
  width: 1897px;
  height: 71px;
  top: 0;
  left: 0;
`;

const Crofful = styled.img`
  position: absolute;
  width: 156px;
  height: 35px;
  top: 17px;
  left: 19px;
`;

function Header() {
  return (
    <FixedBar1>
      <OverlapGroup>
        <BgBlur></BgBlur>
        <Grad
          src={bg}
        />
        <Line
          src={line}
        />
        <Crofful src={logo} />
      </OverlapGroup>
    </FixedBar1>
  );
}

export default Header;
