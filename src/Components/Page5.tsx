import styled from "styled-components";
import bg5 from "../Components/img/bg5-1@1x.png";
import inputbox from "../Components/img/inputbox-1@1x.png";
import disagree from "../Components/img/check-1@2x.png";
import agree from "../Components/img/chack-1@2x.png";

const SubmitPage = styled.div`
  height: 960px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 200%;
`;

const OverlapGroup3 = styled.div`
  height: 980px;
  margin-top: -0.47px;
  display: flex;
  flex-direction: column;
  padding: 346.3px 20.9px;
  align-items: center;
  min-width: 100%;
  background-image: url(${bg5});
  background-size: 100% 100%;
`;

const OverlapGroup2 = styled.div`
  width: 658px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 62.8px 35.9px;
  align-items: center;
  min-height: 502px;
  background-color: ${(p) => p.theme.color.white4};
  border-radius: 70px;
  box-shadow: 0px 30px 30px #653afd4c;
`;

const SNSCrofful = styled.div`
  color: ${(p) => p.theme.color.silver};
  font-family: "Noto Sans KR", sans-serif;
  font-size: ${(p) => p.theme.fontSize.l};
  font-weight: 400;
  font-style: normal;
  width: 532px;
  margin-bottom: -28px;
  min-height: 42px;
  margin-right: 0;
  text-align: center;
  letter-spacing: -1.5px;
  line-height: 70px;
  white-space: nowrap;
`;

const Text3 = styled.h1`
  color: ${(p) => p.theme.color.black};
  font-family: "Noto Sans KR", sans-serif;
  font-size: ${(p) => p.theme.fontSize.xxxl};
  font-weight: 800;
  font-style: normal;
  width: 586px;
  margin-bottom: -36px;
  min-height: 48px;
  align-self: flex-start;
  margin-top: 11px;
  text-align: center;
  letter-spacing: 0;
  line-height: 84px;
  white-space: nowrap;
`;

const View = styled.div`
  width: 540px;
  height: 72px;
  margin-top: 45px;
  margin-left: 0;
  display: flex;
  justify-content: center;
  background-image: url(${inputbox});
  background-size: 100% 100%;
`;

const GimhFy = styled.input`
  color: ${(p) => p.theme.color.mountain};
  font-family: "Noto Sans KR", sans-serif;
  font-size: ${(p) => p.theme.fontSize.s};
  font-weight: 400;
  font-style: normal;
  margin-top: 23px;
  width: 494.1878662109375px;
  height: 32.307682037353516px;
  margin-left: -2px;
  background-color: transparent;
  letter-spacing: 0;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #99999999;
  }
`;

const View1 = styled.div`
  margin-top: 36px;
  margin-left: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 361px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const OverlapGroup = styled.div`
  height: 72px;
  display: flex;
  padding: 20.9px 62.8px;
  align-items: flex-start;
  min-width: 359px;
  background-color: ${(p) => p.theme.color.electricviolet};
  border-radius: 90px;
  box-shadow: 0px 15px 20px #653afd33;
`;

const Text1 = styled.div`
  color: ${(p) => p.theme.color.white};
  font-family: "Roboto", sans-serif;
  font-size: ${(p) => p.theme.fontSize.s};
  font-weight: 700;
  font-style: normal;
  margin-top: 2px;
  width: 233px;
  min-height: 24px;
  text-align: center;
  letter-spacing: 0;
`;

const View2 = styled.div`
  align-self: flex-start;
  margin-top: 18px;
  margin-left: 23.93px;
  display: flex;
  align-items: flex-start;
  min-width: 338px;
`;

const OverlapGroup1 = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  border-radius: 11.97px;
`;

const Default = styled.div`
  border: 3px solid ${(p) => p.theme.color.mountain};
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: ${(p) => p.theme.color.white};
  border-radius: 11.97px;
`;

const Check = styled.img`
  margin-top: 5.8px;
  width: 17.5px;
  height: 13px;
  margin-left: 0;
`;

const Agree = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: ${(p) => p.theme.color.electricviolet};
  border-radius: 90px;
`;

const Text2 = styled.div`
  color: ${(p) => p.theme.color.mountain};
  font-family: "Noto Sans KR", sans-serif;
  font-size: ${(p) => p.theme.fontSize.xxs};
  font-weight: 400;
  font-style: normal;
  width: 303px;
  min-height: 24px;
  margin-left: 8px;
  letter-spacing: 0;
`;

function View5() {
  return (
    <>
      <SubmitPage>
        <OverlapGroup3>
          <OverlapGroup2>
            <SNSCrofful>게임 속 부캐들의 SNS, Crofful</SNSCrofful>
            <Text3>오픈 소식을 가장 먼저 받아보세요!</Text3>
            <View>
              <GimhFy
                name="이메일을입력해주세요"
                placeholder="이메일을 입력해주세요."
                type="email"
              />
            </View>
            <View2>
              <OverlapGroup1>
                <Default>
                  <Check src={disagree} />
                </Default>
                <Agree>
                  <Check src={agree} />
                </Agree>
              </OverlapGroup1>
              <Text2>개인정보 처리 방침에 동의합니다.</Text2>
            </View2>
            <a href="javascript:SubmitForm('form1')">
              <View1>
                <OverlapGroup>
                  <Text1>오픈 알림 신청하기</Text1>
                </OverlapGroup>
              </View1>
            </a>
          </OverlapGroup2>
        </OverlapGroup3>
      </SubmitPage>
    </>
  );
}
export default View5;
