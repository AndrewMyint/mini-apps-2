/* eslint-disable react/prop-types */
import React from 'react';


const displayList = (props) => {
  const { data } = props;
  if (data === null) {
    return <li>Loading</li>;
  }
  // eslint-disable-next-line react/no-array-index-key
  const mappedData = data.map((value, index) => <li key={index}>{value.description}</li>);
  return (
    <React.Fragment>
      <div className="container">
        <ul className="reactPaginate">
          {mappedData}
        </ul>
      </div>
    </React.Fragment>
  );
};
export default displayList;
