import styled from "styled-components";

const CopyrightPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200%;
`;

const OverlapGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 203px;
  display: flex;
  padding: 51px 70px;
  min-width: 100%;
  background-color: ${(p) => p.theme.color.minsk};
  box-shadow: 0px 15px 20px #653afd33;
`;

const CroffulgmailcomCo = styled.div`
  width: 559px;
  min-height: 25px;
  text-align: center;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
  h1 {
    color: ${(p) => p.theme.color.blueviolet};
    font-family: "Noto Sans KR", sans-serif;
    font-size: ${(p) => p.theme.fontSize.s};
    font-weight: 700;
    font-style: normal;
  }
  h2 {
    color: ${(p) => p.theme.color.blueviolet};
    font-family: "Noto Sans KR", sans-serif;
    font-size: ${(p) => p.theme.fontSize.s};
    font-weight: 400;
    font-style: normal;
  }
`;

function Bottom() {
  return (
    <>
      <CopyrightPage>
        <OverlapGroup>
          <CroffulgmailcomCo>
            <h1>
              Crofful@gmail.com
              <br />
            </h1>
            <h2>Copyright ⓒ 2021 Crofful. All Right Reserved.</h2>
          </CroffulgmailcomCo>
        </OverlapGroup>
      </CopyrightPage>
    </>
  );
}
export default Bottom;
