import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import layoutImage from "../../assets/layout.png";

export default function Header({
  onClickRun,
  theme,
  onClickTheme,
  layout,
  onClickLayout,
}) {
  return (
    <header
      className="flex justify-between items-center p-4 text-white h-16"
      style={{ background: "#1e1f26" }}
    >
      <div>
        <h1 className="font-semibold">{"<Code Me />"}</h1>
      </div>
      <div className="flex gap-4">
        <div className="flex justify-around items-center gap-4 px-2 bg-white rounded-lg">
          <div className="cursor-pointer">
            <img
              onClick={onClickLayout}
              className={layout === "vertical" ? "transform -rotate-90" : ""}
              src={layoutImage}
              alt=""
            />
          </div>

          {theme === "light" ? (
            <div className="cursor-pointer" onClick={onClickTheme}>
              🔦
            </div>
          ) : (
            <div className="cursor-pointer" onClick={onClickTheme}>
              💡
            </div>
          )}
        </div>
        <div
          onClick={onClickRun}
          className="text-black flex items-center rounded-lg px-2 cursor-pointer"
          style={{ background: "#21aa6d" }}
        >
          <FontAwesomeIcon icon={["fas", "cogs"]} color="black" />
          <p className="inline-block pl-2">Run</p>
        </div>
        <a
          className="text-2xl cursor-pointer"
          href="https://github.com/twentyonedot/playment-challenge"
        >
          <FontAwesomeIcon icon={["fab", "github"]} color="white" />
        </a>
      </div>
    </header>
  );
}
