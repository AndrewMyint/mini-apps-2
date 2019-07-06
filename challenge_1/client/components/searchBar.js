/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const { setQuery } = props;
  const input = useRef(null);
  const handleSearchKeyword = (e) => {
    e.preventDefault();
    const keyword = input.current.value;
    setQuery(keyword);
  };
  return (
    <>
      <form>
        <label>
          Search:
          <input ref={input} type="text" name="searchKeyword" />
        </label>
        <button onClick={handleSearchKeyword} type="submit">search</button>
      </form>
    </>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  setQuery: PropTypes.func.isRequired,
};
