import NoteCard from "./NoteCard";

function NotesGrid({ notes, onDelete, isTrash }) {
  return (
    <div className="notes-grid">
      {notes.map((note, index) => (
        <NoteCard
          key={index}
          note={note}
          onDelete={() => onDelete(index)}
          isTrash={isTrash}
        />
      ))}
    </div>
  );
}

export default NotesGrid;