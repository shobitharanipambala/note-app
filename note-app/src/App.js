// import React, { useState, useEffect } from 'react';
// import AddNote from '../src/Component/AddNote/Addnote';
// import NotesList from '../src/Component/Notelist/NoteList';
// import SearchBar from './Component/Search/Search';
// import './App.css';

// const App = () => {
//   const [notes, setNotes] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     const storedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
//     setNotes(storedNotes);
//     setSearchResults(storedNotes);
//   }, []);

//   const handleSave = (newNote) => {
//     const updatedNotes = [newNote, ...notes];
//     setNotes(updatedNotes);
//     setSearchResults(updatedNotes);
//     localStorage.setItem('notes', JSON.stringify(updatedNotes));
//   };

//   const handleDeleteNote = (noteId) => {
//     const updatedNotes = notes.filter((note) => note.id !== noteId);
//     setNotes(updatedNotes);
//     setSearchResults(updatedNotes);
//     localStorage.setItem('notes', JSON.stringify(updatedNotes));
//   };

//   const handleSearch = (query) => {
//     const filteredNotes = notes.filter((note) =>
//       note.text.toLowerCase().includes(query.toLowerCase())
//     );
//     setSearchResults(filteredNotes);
//   };

//   return (
//     <div className="app">
//       <div className="h1">
//         <h1>Notes</h1>
//       </div>
//       <SearchBar onSearch={handleSearch} />
//       <AddNote onAddNote={handleSave} />
//       <NotesList notes={searchResults} handleDelete={handleDeleteNote} />
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import AddNote from '../src/Component/AddNote/Addnote';
import NotesList from '../src/Component/Notelist/NoteList';
import SearchBar from './Component/Search/Search';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    setNotes(storedNotes);
    setSearchResults(storedNotes);
  }, []);

  const handleSave = (newNote) => {
    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    setSearchResults(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
    setSearchResults(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const handleSearch = (query) => {
    const filteredNotes = notes.filter((note) =>
      note.content.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredNotes);
  };

  return (
    <div className="app">
      <div className="h1">
        <h1>Notes</h1>
      </div>
      <div className="k">
      <SearchBar onSearch={handleSearch} />
      </div>
      <AddNote onAddNote={handleSave} />
      <NotesList notes={searchResults} handleDelete={handleDeleteNote} />
    </div>
  );
};

export default App;