import styled from "styled-components";
import bg from "./img/bg1@1x.svg";
import logo from "./img/crofful-1@2x.svg";

const BG1 = styled.img`
  position: absolute;
  width: 100%;
  z-index: -10;
`;

const Base = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  padding: 0 0px;
  align-items: flex-start;
  min-width: 100%;
`;

const OverlapGroup1 = styled.div`
  width: 100%;
  margin-top: -0.14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 541.1px 51.5px;
  align-items: center;
  min-height: 1636px;
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
  align-self: flex-start;
  margin-top: 21px;
`;

const SNS = styled.div`
  position: absolute;
  width: 597px;
  top: 0;
  left: 0;
  text-shadow: 0px 4px 8px #663afe4c;
  text-align: center;
  letter-spacing: 1.6px;
`;

const Span0 = styled.span`
  letter-spacing: 0.51px;
`;

const Span1 = styled.span`
  font-family: var(--font-family-nanumsquareotf-regular);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-xl);
  letter-spacing: 0.51px;
`;

const Rectangle35 = styled.div`
  position: absolute;
  width: 389px;
  height: 2px;
  top: 44px;
  left: 104px;
  background-color: #ffffff66;
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
  width: 100%;
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
  background-color: #663afe;
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
  background-color: #854cff;
  border-radius: 90px;
`;

const Text1 = styled.h1`
  position: absolute;
  width: 281px;
  top: 31px;
  left: 39px;
  font-family: var(--font-family-roboto);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-l);
  text-align: center;
  letter-spacing: 0;
`;

function Page1() {
  return (
    <>
      <Base>
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
              <Button></Button>
              <Text1>오픈 알림 신청하기</Text1>
            </OverlapGroup>
          </View>
        </OverlapGroup1>
      </Base>
      <BG1 src={bg} />
    </>
  );
}

export default Page1;
