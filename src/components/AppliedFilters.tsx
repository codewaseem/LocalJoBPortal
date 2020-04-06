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
    cursor: pointer;
    &:hover,
    &:focus {
      color: var(--dark-cyan);
      text-decoration: underline;
    }
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
        &:hover,
        &:focus {
          background: var(--very-dark-gray-cyan);
        }
      }
    }
  }
`;

type Props = React.AllHTMLAttributes<any> & {
  filters: string[];
  onClearAll: () => void;
  onClearFilter: (filter: string) => void;
};

const AppliedFilters: React.FC<Props> = ({
  filters,
  onClearAll,
  onClearFilter,
  ...props
}) => {
  return (
    <Container className={props.className}>
      <div className="filters">
        <h2 className="sr-only">Currently applied filters are.</h2>

        {filters.map((filter) => (
          <div key={filter} className="filter">
            <span aria-label={`${filter}.`}>{filter}</span>
            <button
              aria-label={`Clear ${filter} filter.`}
              title={`Clear filter`}
              onClick={() => onClearFilter(filter)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <button
        aria-label="Clear all filters."
        title={`Clear all filters`}
        className="clear"
        onClick={onClearAll}
      >
        Clear
      </button>
    </Container>
  );
};

export default AppliedFilters;
