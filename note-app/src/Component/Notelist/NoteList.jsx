// import React from 'react';
// import Note from '../Note/Note.jsx';
// import './NoteList.css';

// const NotesList = ({ notes, handledelete }) => {
    
//   return (
//     <div className="notes-list">
      
//       {notes.map((note) => (
        
//         <Note
//           key={note.id}
//           content={note.content}
//           date={note.date}
//           handledelete={() => handledelete(note.id)}
          
//         />
      
        
//       ))}
//     </div>
//   );
// };

// export default NotesList;
// import React from 'react';
// import Note from '../Note/Note.jsx';
// import './NoteList.css';

// const NotesList = ({ notes, handleDelete }) => {
//   return (
//     <div className="notes-list">
//       {notes.map((note) => (
//         <Note
//           key={note.id}
//           content={note.content}
//           date={note.date}
//           handledelete={() => handleDelete(note.id)}
//         />
//       ))}
//     </div>
//   );
// };

// export default NotesList;

import React from 'react';
import Note from '../Note/Note.jsx';
import './NoteList.css';

const NotesList = ({ notes, handleDelete }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          content={note.content}
          date={note.date}
          handleDelete={() => handleDelete(note.id)}
        />
      ))}
    </div>
  );
};

export default NotesList;