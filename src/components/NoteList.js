import NoteItem from "./NoteItem";
import './NoteList.css'
function NoteList({ notes, onDelete, onEdit }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}
export default NoteList;
