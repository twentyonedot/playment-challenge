import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EditorHeader({ mode, onClickDownload, value }) {
  return (
    <div
      style={{
        background: "#1a1b1f",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
      className="flex justify-between items-center p-2 text-white"
    >
      <p className="uppercase">{mode}</p>
      <FontAwesomeIcon
        onClick={() => {
          onClickDownload(value);
        }}
        style={{ fontSize: "25px", cursor: "pointer" }}
        icon={["fas", "file-download"]}
        color="white"
      />
    </div>
  );
}
