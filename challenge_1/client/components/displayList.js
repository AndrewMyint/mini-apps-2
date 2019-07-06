import React from 'react';
import PropTypes from 'prop-types';

const DisplayList = (props) => {
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
export default DisplayList;

DisplayList.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};
