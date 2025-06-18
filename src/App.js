import { useState, useEffect } from "react";
import { getNotes, saveNotes } from "./utils/storage";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const addNote = (note) => setNotes([note, ...notes]);

  const deleteNote = (id) => setNotes(notes.filter((n) => n.id !== id));

  const editNote = (updatedNote) =>
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>📝 My Notes</h1>
      <SearchBar onSearch={setSearchTerm} />
      <NoteForm onAdd={addNote} />
      <NoteList notes={filteredNotes} onDelete={deleteNote} onEdit={editNote} />
    </div>
  );
}

export default App;
