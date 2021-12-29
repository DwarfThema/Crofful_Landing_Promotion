import styled from "styled-components";
import logo from "./img/crofful-1@2x.png";
import line from "./img/line@1x.png";
import bg from "./img/grad@1x.png";

const FixedBar1 = styled.div`
  position: fixed;
  height: 50px;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  min-width: 3044px;
`;

const OverlapGroup = styled.div`
  width: 3044px;
  height: 50px;
  position: relative;
  margin-top: -2px;
`;

const BgBlur = styled.div`
  position: absolute;
  width: 3044px;
  height: 50px;
  top: 2px;
  left: 0;
  background-color: ${(prop) => prop.theme.color.white3};
  backdrop-filter: blur(25px) brightness(100%);
  -webkit-backdrop-filter: blur(25px) brightness(100%);
  background-size: cover;
`;

const Grad = styled.img`
  position: absolute;
  width: 3044px;
  height: 50px;
  top: 2px;
  left: 0;
`;

const Line = styled.img`
  position: absolute;
  width: 1897px;
  height: 50px;
  top: 0;
  left: 0;
`;

const Crofful = styled.img`
  position: absolute;
  width: 120px;
  top: 22%;
  left: 19px;
`;

function Header() {
  return (
    <FixedBar1>
      <OverlapGroup>
        <BgBlur></BgBlur>
        <Grad src={bg} />
        <Line src={line} />
        <Crofful src={logo} />
      </OverlapGroup>
    </FixedBar1>
  );
}

export default Header;
