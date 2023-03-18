// import {MdDeleteForever} from 'react-icons/md';
// import React from 'react';
// import './Note.css';

// const Note = ({ content, date, handledelete}) => {
//   return (
//     <div className='note'>
//       <p>{content}</p>
//        <div className="note1">
//        <p>{date}</p>
//        <MdDeleteForever onClick={handledelete}/>
//       </div>
//     </div>
//   );
// };

// export default Note;

import { MdDeleteForever } from 'react-icons/md';
import React from 'react';
import './Note.css';

const Note = ({ content, date, handleDelete }) => {
  return (
    <div className="note">
      <p>{content}</p>
      <div className="note1">
        <p>{date}</p>
        <MdDeleteForever onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Note;



