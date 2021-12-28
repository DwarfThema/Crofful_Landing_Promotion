import styled from "styled-components";
import mockup3 from "../Components/img/mockup3@1x.png";
import mockup2 from "../Components/img/mockup2@1x.png";
import shadow1_1 from "../Components/img/shadow1-1@2x.png";
import shadow2 from "../Components/img/shadow1@2x.png";
import shadow1_2 from "../Components/img/shadow1-2@2x.png";
import shadow13 from "../Components/img/shadow1-3@2x.png";
import shadow14 from "../Components/img/shadow1-4@2x.png";
import shadow15 from "../Components/img/shadow1-5@2x.png";
import maskgroup from "../Components/img/mask-group-1@2x.png";
import maskgroup1 from "../Components/img/mask-group-2@2x.png";
import animal2_2 from "../Components/img/animal-crossing-new-horizons---character-artwork-02-2-1@2x.png";
import minecraft from "../Components/img/minecraft-1@2x.png";

const Page3 = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 1458px;
  min-width: 704px;
  background-size: 100% 100%;
  align-items: center;
`;

const OverlapGroup4 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15.4px 2.4px;
  align-items: center;
  min-height: 1458px;
  background-color: ${(p) => p.theme.color.magnolia};
`;

const Text2 = styled.h1`
  color: ${(prop) => prop.theme.color.black};
  font-size: ${(p) => p.theme.fontSize.xxl};
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-style: normal;
  width: 594px;
  min-height: 104px;
  align-self: center;
  margin-top: 60px;
  margin-left: 1.2px;
  letter-spacing: 0;
`;

const OverlapGroupContainer = styled.div`
  width: 666px;
  height: 1239px;
  position: relative;
  margin-top: 24px;
`;

const OverlapGroup6 = styled.div`
  position: absolute;
  width: 615px;
  height: 767px;
  top: 0;
  left: 23px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 312px;
  height: 622px;
  top: 145px;
  left: 303px;
`;

const Shadow = styled.div`
  position: absolute;
  width: 302px;
  height: 616px;
  top: 6px;
  left: 10px;
  background-color: ${(p) => p.theme.color.tolopea};
  border-radius: 77px;
  filter: blur(20px);
  opacity: 0.2;
`;

const Mockup3 = styled.img`
  position: absolute;
  width: 311px;
  height: 617px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Text1 = styled.div`
  color: ${(p) => p.theme.color.silver};
  font-size: ${(p) => p.theme.fontSize.m};
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  font-style: normal;
  position: absolute;
  width: 592px;
  top: 0;
  left: 0;
  letter-spacing: -1.45px;
  line-height: 40px;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 320px;
  height: 344px;
  top: 105px;
  left: 32px;
`;

const Shadow1 = styled.img`
  position: absolute;
  width: 188px;
  height: 90px;
  top: 254px;
  left: 0;
  mix-blend-mode: multiply;
`;

const Shadow11 = styled.img`
  position: absolute;
  width: 102px;
  height: 154px;
  top: 76px;
  left: 218px;
  mix-blend-mode: multiply;
`;

const Shadow12 = styled.img`
  position: absolute;
  width: 168px;
  height: 90px;
  top: 219px;
  left: 131px;
  mix-blend-mode: multiply;
`;

const MaskGroup = styled.img`
  position: absolute;
  width: 140px;
  height: 272px;
  top: 0;
  left: 145px;
`;

const MaskGroup1 = styled.img`
  position: absolute;
  width: 152px;
  height: 293px;
  top: 14px;
  left: 20px;
`;

const OverlapGroupContainer1 = styled.div`
  position: absolute;
  width: 666px;
  height: 729px;
  top: 510px;
  left: 0;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 315px;
  height: 622px;
  top: 0;
  left: 0;
`;

const Shadow2 = styled.div`
  position: absolute;
  width: 302px;
  height: 616px;
  top: 6px;
  left: 13px;
  background-color: ${(p) => p.theme.color.tolopea};
  border-radius: 77px;
  filter: blur(20px);
  opacity: 0.2;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 438px;
  height: 347px;
  top: 382px;
  left: 228px;
`;

const Shadow13 = styled.img`
  position: absolute;
  width: 154px;
  height: 170px;
  top: 14px;
  left: 33px;
  mix-blend-mode: multiply;
`;

const Shadow21 = styled.img`
  position: absolute;
  width: 325px;
  height: 112px;
  top: 228px;
  left: 113px;
  mix-blend-mode: multiply;
`;

const Shadow14 = styled.img`
  position: absolute;
  width: 184px;
  height: 82px;
  top: 219px;
  left: 31px;
  mix-blend-mode: multiply;
`;

const AnimalCrossingNewHorizonsCharacterA = styled.img`
  position: absolute;
  width: 281px;
  height: 282px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Minecraft = styled.img`
  position: absolute;
  width: 239px;
  height: 336px;
  top: 11px;
  left: 152px;
  object-fit: cover;
`;

function View3() {
  return (
    <>
      <Page3>
        <OverlapGroup4>
          <Text2>
            내 피드를 공유하고
            <br />
            다양한 유저들의 게시물을 확인하세요
          </Text2>
          <OverlapGroupContainer>
            <OverlapGroup6>
              <OverlapGroup>
                <Shadow></Shadow>
                <Mockup3 src={mockup3} />
              </OverlapGroup>
              <Text1>
                피드를 둘러보며 보며 자연스럽게 나와 취향이 비슷한 유저들과 만나
                함께 이야기 나눌 수 있어요.
              </Text1>
              <OverlapGroup3>
                <Shadow1 src={shadow13} />
                <Shadow11 src={shadow14} />
                <Shadow12 src={shadow15} />
                <MaskGroup src={maskgroup1} />
                <MaskGroup1 src={maskgroup} />
              </OverlapGroup3>
            </OverlapGroup6>
            <OverlapGroupContainer1>
              <OverlapGroup1>
                <Shadow2></Shadow2>
                <Mockup3 src={mockup2} />
              </OverlapGroup1>
              <OverlapGroup2>
                <Shadow13 src={shadow1_1} />
                <Shadow21 src={shadow2} />
                <Shadow14 src={shadow1_2} />
                <AnimalCrossingNewHorizonsCharacterA src={animal2_2} />
                <Minecraft src={minecraft} />
              </OverlapGroup2>
            </OverlapGroupContainer1>
          </OverlapGroupContainer>
        </OverlapGroup4>
      </Page3>
    </>
  );
}

export default View3;
