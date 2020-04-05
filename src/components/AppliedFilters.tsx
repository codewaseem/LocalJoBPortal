import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background: white;
  padding: 10px 25px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  > .clear {
    padding: 5px 10px;
    border: 0;
    background: white;
    color: var(--very-dark-gray-cyan);
    font-size: medium;
    font-weight: 400;
    margin: 10px;
  }
  > .filters {
    flex: 1;
    > .filter {
      background: var(--light-cyan-table);
      display: inline-block;
      border-radius: 5px;
      color: var(--dark-cyan);
      font-weight: bolder;
      display: inline-flex;
      font-size: smaller;
      margin: 5px;
      > span {
        display: inline-block;
        padding: 10px;
      }

      > button {
        border: 0;
        display: inline-block;
        background: var(--dark-cyan);
        color: white;
        padding: 0 5px;
        font-size: x-large;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
      }
    }
  }
`;

const AppliedFilters = () => {
  return (
    <Container>
      <div className="filters">
        <h2 className="sr-only">Currently applied filters are.</h2>

        <div className="filter">
          <span aria-label={`Frontend.`}>Frontend</span>
          <button aria-label={`Clear frontend filter.`} title={`Clear filter`}>
            ✕
          </button>
        </div>
      </div>
      <button
        aria-label="Clear all filters."
        title={`Clear all filters`}
        className="clear"
      >
        Clear
      </button>
    </Container>
  );
};

export default AppliedFilters;
