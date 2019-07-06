/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useState } from 'react';
import Paginate from './components/paginate';
import DisplayList from './components/displayList';
import SearchBar from './components/searchBar';
import './app.css';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <DisplayList data={data} />
      <Paginate query={query} pageCount={5} pageRangeDisplayed={5} marginPagesDisplayed={10} setData={setData} page={page} />
    </>
  );
}
export default App;
