import React from "react";
import AceEditor from "react-ace";
import EditorHeader from "../EditorHeader/EditorHeader";

export default function Editor({
  mode,
  theme,
  value,
  onChange,
  identifier,
  onClickDownload,
}) {
  return (
    <div>
      <EditorHeader
        mode={mode}
        onClickDownload={onClickDownload}
        value={value}
      />
      <AceEditor
        height="auto"
        style={{
          minHeight: "320px",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
        width="auto"
        mode={mode}
        theme={theme}
        onChange={onChange}
        value={value}
        name={identifier}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
}
