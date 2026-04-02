import React from "react";

function NoteCard({ note, onDelete, isTrash }) {
  return (
    <div
      className="note-card"
      style={{
        background: note.color || "#fff",
        color: note.color === "#000000" ? "#fff" : "#000",
      }}
    >
        {note.title && <h4>{note.title}</h4>}  {}
      <p>{note.text}</p>
      <button className="delete-btn" onClick={onDelete}>
        {isTrash ? "Restore" : "Delete"}
      </button>
    </div>
  );
}

export default NoteCard;