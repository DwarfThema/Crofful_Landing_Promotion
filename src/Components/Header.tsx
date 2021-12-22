import React from "react";
import styled from "styled-components";

const FixedBar = styled.div`
  position: fixed;
  height: 130px;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  min-width: 1170px;
  background-color: #ffffff4c;
  backdrop-filter: blur(25px) brightness(100%);
  -webkit-backdrop-filter: blur(25px) brightness(100%);
  background-image: url(grad.svg);
  background-size: 100% 100%;
`;

const OverlapGroup = styled.div`
  height: 134px;
  margin-top: -2px;
  display: flex;
  padding: 31.9px 38px;
  align-items: flex-start;
  min-width: 1170px;
  background-image: url(line.svg);
  background-size: 100% 100%;
`;

const Crofful = styled.img`
  width: 312px;
  height: 70px;
`;

function Header() {
  return (
    <>
      <FixedBar>
        <OverlapGroup>
          <Crofful src="crofful-1.svg" />
        </OverlapGroup>
      </FixedBar>
    </>
  );
}

export default Header;
