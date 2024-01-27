import "./Portal.css";

import { useRecoilValue } from "recoil";
import { currentTimeMessageState } from "../states/datetime";
import Tooltip from "./Tooltip";

function Portal() {
  const tooltipMessage = useRecoilValue(currentTimeMessageState);

  return (
    <div className="portal">
      <Tooltip>{tooltipMessage}</Tooltip>
    </div>
  );
}

export default Portal;
