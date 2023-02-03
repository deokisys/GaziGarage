import React from "react";
import OpenViduVideoComponent from "./OvVideo";

export default function LiveVideo({ streamManager }) {
  return (
    <div>
      {streamManager !== undefined ? (
        <div className="streamcomponent">
          <OpenViduVideoComponent streamManager={streamManager} />
        </div>
      ) : null}
    </div>
  );
}
