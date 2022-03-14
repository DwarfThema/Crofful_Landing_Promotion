import styled from "styled-components";
import mockup4 from "../Components/img/mockup4-1@1x.png";
import shadow1 from "../Components/img/shadow1@2x.png";
import animal from "../Components/img/animal-crossing-new-horizons---character-artwork-08-1-1@2x.png";
import vector from "../Components/img/vector@2x.png";
import vector1 from "../Components/img/vector-1@2x.png";

const Page4 = styled.div`
  height: 1137px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 704px;
  width: 100%;
`;

const OverlapGroup3 = styled.div`
  width: 700px;
  height: 1154px;
  position: relative;
  margin-bottom: -17.47px;
`;

const BG4 = styled.div`
  position: absolute;
  width: 700px;
  height: 1137px;
  top: 0;
  left: 0;
  background-color: ${(p) => p.theme.color.white};
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 331px;
  height: 654px;
  top: 398px;
  left: 77px;
`;

const Shadow = styled.div`
  position: absolute;
  width: 318px;
  height: 647px;
  top: 7px;
  left: 13px;
  background-color: ${(p) => p.theme.color.tolopea};
  border-radius: 77px;
  filter: blur(20px);
  opacity: 0.2;
`;

const Mockup4 = styled.img`
  position: absolute;
  width: 326px;
  height: 649px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 332px;
  height: 357px;
  top: 797px;
  left: 336px;
`;

const Shadow1 = styled.img`
  position: absolute;
  width: 253px;
  height: 106px;
  top: 251px;
  left: 78px;
  mix-blend-mode: multiply;
`;

const AnimalCrossingNewHorizonsCharacterA = styled.img`
  position: absolute;
  width: 332px;
  height: 332px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 441px;
  height: 224px;
  top: 609px;
  left: 238px;
`;

const Vector = styled.img`
  position: absolute;
  width: 358px;
  height: 108px;
  top: 116px;
  left: 0;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 402px;
  height: 122px;
  top: 0;
  left: 39px;
`;

const Text1 = styled.p`
  color: ${(p) => p.theme.color.white};
  font-size: 100%;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  font-style: normal;
  position: absolute;
  top: 135px;
  left: 44px;
  letter-spacing: -0.65px;
  line-height: 22px;
`;

const Text2 = styled.p`
  color: ${(p) => p.theme.color.silver};
  font-size: 100%;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  font-style: normal;
  position: absolute;
  top: 19px;
  left: 72px;
  letter-spacing: -0.65px;
  line-height: 20px;
`;

const Text3 = styled.div`
  color: ${(p) => p.theme.color.silver};
  font-family: "Noto Sans KR", sans-serif;
  font-size: ${(p) => p.theme.fontSize.m};
  font-weight: 400;
  font-style: normal;
  position: absolute;
  width: 592px;
  top: 211px;
  left: 54px;
  letter-spacing: -1.45px;
  line-height: 40px;
`;

const Text4 = styled.h1`
  color: var(--eerie-black);
  font-family: "Noto Sans KR", sans-serif;
  font-size: ${(p) => p.theme.fontSize.xxl};
  font-weight: 600;
  font-style: normal;
  position: absolute;
  width: 594px;
  top: 83px;
  left: 54px;
  letter-spacing: 0;
`;

function View4() {
  return (
    <>
      <Page4>
        <OverlapGroup3>
          <BG4></BG4>
          <OverlapGroup>
            <Shadow></Shadow>
            <Mockup4 src={mockup4} />
          </OverlapGroup>
          <OverlapGroup1>
            <Shadow1 src={shadow1} />
            <AnimalCrossingNewHorizonsCharacterA src={animal} />
          </OverlapGroup1>
          <OverlapGroup2>
            <Vector src={vector} />
            <Vector1 src={vector1} />
            <Text1>
              항상 응원해주셔서 감사해요
              <span style={{ fontWeight: "500" }}> 😊</span>
              <br />제 디자인을 좋아해주셔서 기분이 좋네요ㅎㅎ
            </Text1>
            <Text2>
              이번에 크리스마스 섬 꾸미신거 진짜 예뻐요!!!{" "}
              <span style={{ fontWeight: "500" }}>👍👍</span>
              <br />
              마이디자인도 올려주시는 것마다 취향입니당{" "}
              <span style={{ fontWeight: "500" }}>💕</span>
              <br />
              완전 팬이에요ㅎㅎ
            </Text2>
          </OverlapGroup2>
          <Text3>
            내가 만든 창작물을 팔로워들과 공유해요. 다운 받은 창작물을 적용하고
            리뷰와 감사인사를 남겨요. 내가 좋아하는 크리에이터와 소통하고 응원할
            수 있어요.
          </Text3>
          <Text4>
            내가 만든 창작물을 공유하고
            <br />
            크리에이터와 소통해요
          </Text4>
        </OverlapGroup3>
      </Page4>
    </>
  );
}
export default View4;
