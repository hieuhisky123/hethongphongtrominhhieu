import styled from "styled-components";
import "./App.css";
import Pages from "./components/pages/Pages";
import Provider from "./components/providertocar";
import FloatingButton from "./components/home/support/FloatingButton";

function App() {
  return (
    <Provider>
      <Wapper>
        <Pages />
      </Wapper>
      <FloatingButton /> {/* Thêm FloatingButton vào trang */}
    </Provider>
  );
}

export default App;
const Wapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1920px;
  overflow: hidden;
`;
