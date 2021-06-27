import React from "react";
import AceEditor from "react-ace";

export default function Editor({ type, theme, value, onChange, identifier }) {
  return (
    <AceEditor
      mode={type}
      theme={theme}
      onChange={onChange}
      value={value}
      name={identifier}
      editorProps={{ $blockScrolling: true }}
    />
  );
}
