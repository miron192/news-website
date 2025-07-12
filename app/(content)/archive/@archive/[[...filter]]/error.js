"use client";
const FilterError = ({ error }) => {
  return (
    <div id="error">
      <h2>
        An error occurred while filtering the news. Please check the filter
        criteria and try again. If the problem persists, contact support.
      </h2>
      <p>{error.message}</p>
    </div>
  );
};

export default FilterError;
