import { useState } from "react";

import Editor from "./components/Editor/Editor";
import Header from "./components/Header/Header";

import "./App.css";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/webpack-resolver";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlay,
  faFileDownload,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faPlay, faFileDownload, faGithub, faCogs);

function App() {
  const [htmlValue, setHtmlValue] = useState("");
  const [cssValue, setCssValue] = useState("");
  const [jsValue, setJsValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [theme, setTheme] = useState("dark");
  const [layout, setLayout] = useState("vertical");

  /**
   *Function Handler that previews the output when clicks on run button
   *
   */
  const setOutputHandler = () => {
    const output = `
      <html>
        <style>
          ${cssValue}
        </style>
        <body>
          ${htmlValue}
          <script type="text/javascript">
            ${jsValue}
          </script>
        </body>
      </html>
    `;
    setOutputValue(output);
  };

  /**
   *Function Handler that toggles between dark and light mode
   *
   */
  const setThemeHandler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  /**
   *Function Handler that toggles between horizontal and vertical modes
   *
   */
  const setLayoutHandler = () => {
    layout === "horizontal" ? setLayout("vertical") : setLayout("horizontal");
  };

  /**
   *Function Handler that downloads the code written.
   *
   */
  const onClickDownloadHandler = (value) => {
    if (value.length === 0) {
      return;
    }
    let HTMLhiddenElement = document.createElement("a");

    HTMLhiddenElement.href = "data:attachment/text," + encodeURI(value);
    HTMLhiddenElement.target = "_blank";
    HTMLhiddenElement.download = "download.txt";
    HTMLhiddenElement.click();
  };

  return (
    <div className="App  w-screen h-screen" style={{ background: "#383c48" }}>
      <Header
        onClickRun={setOutputHandler}
        theme={theme}
        onClickTheme={setThemeHandler}
        layout={layout}
        onClickLayout={setLayoutHandler}
      />
      <div
        className={
          layout === "horizontal"
            ? `grid grid-cols-1 gap-4 px-4`
            : `grid grid-cols-2 gap-4 px-4`
        }
      >
        <div
          style={layout === "vertical" ? { height: "calc(100vw - 5rem)" } : {}}
          className={
            layout === "horizontal"
              ? `grid grid-cols-3 gap-2 mt-2`
              : `grid grid-cols-1 gap-2 mt-2`
          }
        >
          <Editor
            identifier={"htmlEditor"}
            mode={"html"}
            theme={theme === "dark" ? "tomorrow_night_blue" : "github"}
            value={htmlValue}
            onChange={setHtmlValue}
            onClickDownload={onClickDownloadHandler}
          />
          <Editor
            identifier={"cssEditor"}
            mode={"css"}
            theme={theme === "dark" ? "tomorrow_night_blue" : "github"}
            value={cssValue}
            onChange={setCssValue}
            onClickDownload={onClickDownloadHandler}
          />
          <Editor
            identifier={"jsEditor"}
            mode={"javascript"}
            theme={theme === "dark" ? "tomorrow_night_blue" : "github"}
            value={jsValue}
            onChange={setJsValue}
            onClickDownload={onClickDownloadHandler}
          />
        </div>
        <div
          className="bg-white border-4 mt-2"
          style={
            layout === "horizontal"
              ? { height: "calc(100vh - 8rem - 340px)" }
              : {}
          }
        >
          <iframe srcDoc={outputValue} title="preview" />
        </div>
      </div>
    </div>
  );
}

export default App;
