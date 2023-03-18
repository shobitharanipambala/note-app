// import React, { useState } from 'react';
// import './Add.css';

// const AddNote = ({ onAddNote }) => {
//   const [content, setContent] = useState('');

//   const handleAddNote = () => {
//     const date = new Date().toLocaleDateString('en-GB');
//     const newNote = { content, date, id: Date.now() };
//     onAddNote(newNote);
//     setContent('');
//   };

//   return (

//     <div className="add-note">
//       <textarea 
//         // className='note'
//         value={content}
//         onChange={ (change) => setContent(change.target.value)}
//         placeholder="Start Type your note here and save it ..."
//       />
//       <button  className= "button" onClick={handleAddNote}>Save</button>
      
//     </div>
//   );
// };

// export default AddNote;








import React, { useState } from 'react';
import './Add.css';

const AddNote = ({ onAddNote }) => {
  const [content, setContent] = useState('');

  const handleAddNote = () => {
    const date = new Date().toLocaleDateString('en-GB');
    const newNote = { content, date, id: Date.now() };
    onAddNote(newNote);
    setContent('');
  };

  return (
    <div className="add-note">
      <textarea
        value={content}
        onChange={(change) => setContent(change.target.value)}
        placeholder="Start Type your note here and save it ..."
      />
      <button className="button" onClick={handleAddNote}>
        Save
      </button>
      
      </div>
  )
}
export default AddNote;

































// import React from "react";
// import './Add.css';



// function AddNote() {
//     return(
//         // <div className ="card" >
//         <div className="card">
//               <div className=" ">
//                 <textarea className="card1" placeholder="text">
            
//                  </textarea>
//                 </div>
//             <div className="button">
//                 <button type="button" className="saveButton">Save</button>
//             </div>
//         </div>

        
//     )
    


// };
// export default AddNote;

