import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
