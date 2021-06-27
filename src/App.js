import "./App.css";
import Editor from "./components/Editor/Editor";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/webpack-resolver";
import { useState } from "react";

function App() {
  const [htmlValue, setHtmlValue] = useState("");
  const [cssValue, setCssValue] = useState("");
  const [jsValue, setJsValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

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

  return (
    <div className="App">
      <button onClick={setOutputHandler}>Run</button>
      <Editor
        identifier={"htmlEditor"}
        type={"html"}
        theme={"monokai"}
        value={htmlValue}
        onChange={setHtmlValue}
      />
      <Editor
        identifier={"cssEditor"}
        type={"css"}
        theme={"monokai"}
        value={cssValue}
        onChange={setCssValue}
      />
      <Editor
        identifier={"jsEditor"}
        type={"javascript"}
        theme={"monokai"}
        value={jsValue}
        onChange={setJsValue}
      />
      <iframe srcDoc={outputValue} title="preview" />
    </div>
  );
}

export default App;
