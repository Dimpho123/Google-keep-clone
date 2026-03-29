import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CreateNote from "./components/CreateNote";
import NotesGrid from "./components/NotesGrid";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [trash, setTrash] = useState([]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState("notes");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    const savedTrash = JSON.parse(localStorage.getItem("trash"));
    if (savedNotes) setNotes(savedNotes);
    if (savedTrash) setTrash(savedTrash);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("trash", JSON.stringify(trash));
  }, [notes, trash]);

 const addNote = (note) => {
  setNotes(prev => [
    { ...note, reminder: false, pinned: false },
    ...prev
  ]);
};


  const deleteNote = (id) => {
    const noteToDelete = notes[id];
    setTrash([noteToDelete, ...trash]);
    setNotes(notes.filter((_, i) => i !== id));
  };

  const restoreNote = (id) => {
    const noteToRestore = trash[id];
    setNotes([noteToRestore, ...notes]);
    setTrash(trash.filter((_, i) => i !== id));
  };

  const filterNotes = (list) =>
    list.filter((note) => note.text.toLowerCase().includes(search.toLowerCase()));

  let displayedNotes = [];
  if (active === "notes") displayedNotes = filterNotes(notes);
  else if (active === "reminders") displayedNotes = filterNotes(notes.filter((n) => n.reminder));
  else if (active === "trash") displayedNotes = filterNotes(trash);

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Navbar
        setSearch={setSearch}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onMenuClick={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className="main-layout">
        <Sidebar active={active} setActive={setActive} collapsed={sidebarCollapsed} />
        <div className="content">
          {active !== "trash" && <CreateNote onAdd={addNote} />}
          <NotesGrid
            notes={displayedNotes}
            onDelete={active === "trash" ? restoreNote : deleteNote}
            isTrash={active === "trash"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;