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

    {/* TOOLBAR */}
{expanded && (
  <div className="note-toolbar">

    {/* Toggle Palette */}
    <button
      type="button"
      className="icon-btn"
      onClick={(e) => {
        e.stopPropagation();
        setShowColors(!showColors);
      }}
     
    >
     <div class="tooltip">
              <span class="material-symbols-outlined hover">Palette</span>
              <span class="tooltip-text">Background options</span>
            </div>
    </button>

    {/*  COLOR OPTIONS */}
    {showColors && (
      <div className="color-palette">

        {/* Preset colors */}
        {colors.map((c) => (
          <span
            key={c}
            className="color-circle"
            style={{ background: c }}
            onClick={() => setColor(c)}
          />
        ))}

        {/*  CUSTOM COLOR PICKER */}
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="color-picker"
          title="Pick custom color"
        />
      </div>
    )}

    <button  type="button"
      className="icon-btn"
      onClick={(e) => {
        e.stopPropagation();
        setShowColors(!showColors);
      }}>
        <div class="tooltip">
              <span class="material-symbols-outlined hover">add_alert</span>
              <span class="tooltip-text">Remind me</span>
            </div>
    </button>
    <button type="button"
      className="icon-btn"
      onClick={(e) => {
        e.stopPropagation();
        setShowColors(!showColors);
      }}>
    <div class="tooltip">
                <span class="material-symbols-outlined hover small-icon"
                  >person_add</span
                >
                <span class="tooltip-text">Collaborator</span>
              </div>
</button>
<div class="tooltip">
                    <span class="material-symbols-outlined hover small-icon"
                      >image</span
                    >
                    <span class="tooltip-text">Add Image</span>
                  </div>
                  <div class="tooltip">
                    <span class="material-symbols-outlined hover small-icon"
                      >archive</span
                    >
                    <span class="tooltip-text">Archive</span>
                  </div>
                  <div class="tooltip">
                    <span class="material-symbols-outlined hover small-icon"
                      >more_vert</span
                    >
                    <span class="tooltip-text">More</span>
                  </div>
                  <div class="tooltip">
                     <span class="material-symbols-outlined hover small-icon"
                      >undo</span
                    >
                    <span class="tooltip-text">Undo</span>
                  </div>
                  <div class="tooltip">
                    <span class="material-symbols-outlined hover small-icon"
                      >redo</span
                    >
                    <span class="tooltip-text">Redo</span>
                  </div>
                
    


     

    

    {/* ADD BUTTON */}
    <button type="submit" className="close-btn">
      Add
    </button>

  </div>
)}
  </form>
);
}
export default CreateNote;