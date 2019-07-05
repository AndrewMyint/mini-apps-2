import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

function App() {
  const [data, setData] = useState(null);

  async function fetchData() {
    const apiCall = await fetch(
      'http://localhost:3000/events?_page=7&_limit=10',
    );
    const apiData = await apiCall.json();
    setData(apiData);
    // eslint-disable-next-line no-console
    console.log(data);
  }

  return (
    <React.Fragment>
      {/* <div>Hello from react 22</div> */}
      <div>Hello from react</div>
      <button type="submit" onClick={() => fetchData()}>Click me</button>
      <ReactPaginate pageCount={10} pageRangeDisplayed={10} marginPagesDisplayed={5} />
    </React.Fragment>
  );
}
export default App;
