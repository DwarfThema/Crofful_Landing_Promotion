import styled from "styled-components";
import View1 from "./Page1";
import View2 from "./Page2";
import View3 from "./Page3";
import View4 from "./Page4";
import View5 from "./Page5";

const View = styled.div`
  position: relative;
  width: 50%;
`;

function Main() {
  return (
    <View>
      <View1 />
      <View2 />
      <View3 />
      <View4 />
      <View5 />
    </View>
  );
}

export default Main;
