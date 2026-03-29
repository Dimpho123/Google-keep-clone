import React, { useState } from "react";

function CreateNote({ onAdd }) {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [showColors, setShowColors] = useState(false);
const [title, setTitle] = useState("");
const colors = [
  "#ffffff", "#f28b82", "#fbbc04", "#fff475",
  "#ccff90", "#a7ffeb", "#cbf0f8", "#aecbfa",
  "#d7aefb", "#fdcfe8", "#e6c9a8", "#e8eaed"
];
  const [expanded, setExpanded] = useState(false); 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAdd({ title, text, color  });
    setTitle("");
    setText("");
    setColor("#ffffff");
    setExpanded(false);
  };

  return (
  <form
    className="create-note"
    style={{ background: color }}
    onSubmit={handleSubmit}
    onClick={() => setExpanded(true)}
  >

    {/* TITLE */}
    {expanded && (
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    )}

    {/* NOTE */}
    <textarea
      placeholder="Take a note..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      rows={expanded ? 3 : 1}
    />

    {/* TOOLBAR (MUST BE INSIDE FORM) */}
    {expanded && (
      <div className="note-toolbar">

        {/* COLOR BUTTON */}
        <button
          type="button"
          className="icon-btn"
          onClick={(e) => {
            e.stopPropagation();
            setShowColors(!showColors);
          }}
        >
          🎨
        </button>

        {/* COLOR PALETTE */}
        {showColors && (
          <div className="color-palette">
            {colors.map((c) => (
              <span
                key={c}
                className="color-circle"
                style={{ background: c }}
                onClick={() => setColor(c)}
              />
            ))}
          </div>
        )}

        {/* Add BUTTON */}
        <button type="submit" className="close-btn">
          Add
        </button>

      </div>
    )}

  </form>
);
}
export default CreateNote;