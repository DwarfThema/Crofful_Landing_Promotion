import { useEffect, useState } from "react";
import styled from "styled-components";
import bg from "./img/bg1@1x.png";
import logo from "./img/crofful@1x.png";
import "scroll-behavior-polyfill";

const Page1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 1636px;
  display: flex;
  padding: 0 0px;
  margin-top: -100px;
  align-items: center;
  width: 100%;
`;
const OverlapGroup1 = styled.div`
  margin-top: -0.14px;
  display: flex;
  flex-direction: column;
  padding: 541.1px 51.5px;
  align-items: center;
  min-height: 1636px;
  background-image: url(${bg});
  background-size: 100% 100%;
  width: 100%;
`;

const Crofful = styled.img`
  width: 554px;
  height: 155px;
  margin-right: 7.87px;
`;

const OverlapGroup2 = styled.div`
  width: 597px;
  height: 58px;
  position: relative;
  margin-top: 21px;
`;

const SNS = styled.div`
  color: ${(prop) => prop.theme.color.white};
  font-size: ${(prop) => prop.theme.fontSize.xl};
  font-weight: 800;
  font-style: normal;
  position: absolute;
  width: 597px;
  top: 0;
  left: 0;
  text-shadow: 0px 4px 8px #663afe4c;
  text-align: center;
  letter-spacing: 1.6px;
`;

const Span0 = styled.span`
  color: ${(prop) => prop.theme.color.white};
  font-size: ${(prop) => prop.theme.fontSize.xl};
  font-weight: 800;
  font-style: normal;
  letter-spacing: 0.51px;
`;

const Span1 = styled.span`
  color: ${(prop) => prop.theme.color.white};
  font-size: ${(prop) => prop.theme.fontSize.xl};
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.51px;
`;

const Rectangle35 = styled.div`
  position: absolute;
  width: 389px;
  height: 2px;
  top: 44px;
  left: 104px;
  background-color: ${(prop) => prop.theme.color.white2};
  box-shadow: 0px 4px 8px #653afd33;
`;

const View = styled.div`
  margin-top: 102px;
  margin-left: 2px;
  display: flex;
  align-items: flex-end;
  min-width: 361px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const OverlapGroup = styled.div`
  width: 359px;
  height: 103px;
  position: relative;
  margin-bottom: 0;
`;

const Shadow = styled.div`
  position: absolute;
  width: 299px;
  height: 93px;
  top: 10px;
  left: 30px;
  background-color: ${(prop) => prop.theme.color.pupleHeart};
  border-radius: 90px;
  filter: blur(50px);
  opacity: 0.3;
`;

const Button = styled.div`
  position: absolute;
  width: 359px;
  height: 93px;
  top: 0;
  left: 0;
  background-color: ${(prop) => prop.theme.color.pupleHeart};
  border-radius: 90px;
`;

const Text1 = styled.h1`
  color: ${(prop) => prop.theme.color.white};
  font-size: ${(prop) => prop.theme.fontSize.l};
  font-weight: 700;
  position: absolute;
  width: 281px;
  top: 31px;
  left: 39px;
  text-align: center;
  letter-spacing: 0;
`;

function View1() {
  /*   const [useScrollY, setScrollY] = useState(0);
  const handleFollow = () => {
    setScrollY(window.pageYOffset);
  };
  useEffect(() => {
    console.log("ScrollY is ", useScrollY);
  }, [useScrollY]); */

  const handleBot = () => {
    window.scrollTo({
      top: 3000,
      behavior: "smooth",
    });
  };

  return (
    <Page1>
      <OverlapGroup1>
        <Crofful src={logo} />
        <OverlapGroup2>
          <SNS>
            <Span0>게임</Span0>
            <Span1> 속 부캐들을 위한 </Span1>
            <Span0>SNS</Span0>
          </SNS>
          <Rectangle35></Rectangle35>
        </OverlapGroup2>
        <View>
          <OverlapGroup>
            <Shadow></Shadow>

            <Button onClick={handleBot}>
              <Text1>오픈 알림 신청하기</Text1>
            </Button>
          </OverlapGroup>
        </View>
      </OverlapGroup1>
    </Page1>
  );
}

export default View1;
