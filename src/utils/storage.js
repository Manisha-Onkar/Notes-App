// ✅ CORRECT way to define and export functions
export function getNotes() {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
}

export function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}
