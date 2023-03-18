// import React, { useState } from 'react';

// function SearchBar({ onSearch }) {
//   const [query, setQuery] = useState('');

//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSearch(query);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Search notes..."
//         value={query}
//         onChange={handleChange}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// }

// export default SearchBar;


// import React, { useState } from 'react';
// import { MdSearch } from 'react-icons/md';

// function SearchBar({ onSearch }) {
//   const [query, setQuery] = useState('');

//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSearch(query);
//   };

//   return (
//     <div className="search">
//       <MdSearch className="search-icons" />
//       <input
//         type="text"
//         placeholder="Search notes..."
//         value={query}
//         onChange={handleChange}
//       />
     
//      </div>
//   );
// }

// export default SearchBar;

import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import './Search.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search">
      <MdSearch className="search-icons" />
      <input
        type="text"
        placeholder="Search notes..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;