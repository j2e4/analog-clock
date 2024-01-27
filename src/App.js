import "./App.css";

import { RecoilRoot } from "recoil";
import Clock from "./components/Clock";
import Portal from "./components/Portal";

function App() {
  return (
    <RecoilRoot>
      <div className="container">
        <Clock />
        <Portal />
      </div>
    </RecoilRoot>
  );
}

export default App;
