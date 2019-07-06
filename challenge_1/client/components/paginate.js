/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

const Paginate = (props) => {
  const {
    pageCount, pageRangeDisplayed, marginPagesDisplayed, setData, query, page,
  } = props;
  const fetchData = async (pageNumber, keyword) => {
    const apiCall = await fetch(
      `http://localhost:3000/events?_page=${pageNumber}&_limit=10&q=${keyword}`,
    );
    const apiData = await apiCall.json();
    setData(apiData);
    // eslint-disable-next-line no-console
  };
  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    fetchData(selectedPage, query);
    console.log('selectedEvent: ', selectedPage);
  };
  useEffect(() => {
    fetchData(page, query);
  }, [page, query]);
  return (
    <>
      <ReactPaginate
        className="react-paginate reactPaginate"
        pageCount={pageCount}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPagesDisplayed}
        onPageChange={handlePageClick}
      />
    </>
  );
};

Paginate.propTypes = {
  pageCount: PropTypes.number.isRequired,
  pageRangeDisplayed: PropTypes.number.isRequired,
  marginPagesDisplayed: PropTypes.number.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Paginate;
