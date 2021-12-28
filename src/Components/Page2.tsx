import styled from "styled-components";
import mockup1 from "../Components/img/mockup1@1x.png";
import shadow16 from "../Components/img/shadow1-15@2x.png";
import shadow17 from "../Components/img/shadow1-14@2x.png";
import character from "../Components/img/character-1@2x.png";
import butterfly from "../Components/img/butterfly@2x.png";

const Page2 = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 29.9px 40.7px;
  align-items: center;
  min-height: 1149px;
  background-size: 100% 100%;
`;

const Text2 = styled.div`
  color: ${(prop) => prop.theme.color.black};
  font-size: ${(prop) => prop.theme.fontSize.s};
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  font-style: normal;
  align-self: center;
  width: 594px;
  min-height: 31px;
  margin-top: 18px;
  letter-spacing: 0;
`;

const Text1 = styled.h1`
  color: ${(prop) => prop.theme.color.black};
  font-size: ${(prop) => prop.theme.fontSize.xxl};
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-style: normal;
  width: 594px;
  min-height: 104px;
  align-self: center;
  margin-top: 4px;
  margin-right: 4.8px;
  letter-spacing: 0;
`;

const SNS = styled.div`
  color: ${(prop) => prop.theme.color.silver};
  font-family: var(--font-family-noto_sans);
  font-size: ${(prop) => prop.theme.fontSize.m};
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  font-style: normal;
  width: 591px;
  min-height: 120px;
  align-self: center;
  margin-top: 24px;
  margin-right: 7.2px;
  letter-spacing: -1.45px;
  line-height: 40px;
`;

const OverlapGroup2 = styled.div`
  width: 596px;
  height: 772px;
  position: relative;
  margin-top: 16px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 346px;
  height: 687px;
  top: 0;
  left: 250px;
`;

const Shadow = styled.div`
  position: absolute;
  width: 334px;
  height: 680px;
  top: 7px;
  left: 12px;
  background-color: var(--tolopea);
  border-radius: 77px;
  filter: blur(20px);
  opacity: 0.2;
`;

const Mockup1 = styled.img`
  position: absolute;
  width: 343px;
  height: 681px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const X1 = styled.div`
  position: absolute;
  width: 361px;
  height: 304px;
  top: 468px;
  left: 0;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 380px;
  height: 334px;
  top: 0;
  left: 0;
`;

const Shadow1 = styled.img`
  position: absolute;
  width: 204px;
  height: 88px;
  top: 234px;
  left: 98px;
  mix-blend-mode: multiply;
`;

const Shadow11 = styled.img`
  position: absolute;
  width: 108px;
  height: 65px;
  top: 269px;
  left: 271px;
  mix-blend-mode: multiply;
`;

const Character = styled.img`
  position: absolute;
  width: 284px;
  height: 292px;
  top: 0;
  left: 0;
`;

const Butterfly = styled.img`
  position: absolute;
  width: 72px;
  height: 66px;
  top: 134px;
  left: 289px;
`;

function View2() {
  return (
    <>
      <Page2>
        <Text2>현생에서 나눌 수 없었던</Text2>
        <Text1>
          게임 속 이야기,
          <br />
          크로플에서 시작하세요
        </Text1>
        <SNS>
          인스타그램 같은 SNS에 올리기 눈치보였던 게임 속 소소한 이야기, 이제
          크로플에서 기록하며 추억을 쌓아 보세요.
        </SNS>
        <OverlapGroup2>
          <OverlapGroup>
            <Shadow></Shadow>
            <Mockup1 src={mockup1} />
          </OverlapGroup>
          <X1>
            <OverlapGroup1>
              <Shadow1 src={shadow16} />
              <Shadow11 src={shadow17} />
              <Character src={character} />
            </OverlapGroup1>
            <Butterfly src={butterfly} />
          </X1>
        </OverlapGroup2>
      </Page2>
    </>
  );
}
export default View2;
