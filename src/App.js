import "./App.css";

import { RecoilRoot } from "recoil";
import Clock from "./components/Clock";

function App() {
  return (
    <RecoilRoot>
      <div className="container">
        <Clock />
      </div>
    </RecoilRoot>
  );
}

export default App;
