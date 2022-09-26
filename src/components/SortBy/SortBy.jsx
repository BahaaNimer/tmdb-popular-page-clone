import React from 'react';

const SortBy = () => {
  return (
    <div>
      <details>
        <summary>Sort By</summary>
        <label for='drop-down'>Sort By:</label>
        <select
          name='drop-down'
          id='drop-down'>
          <option value='one'>One</option>
          <option value='two'>Two</option>
          <option value='three'>Three</option>
        </select>
      </details>
    </div>
  );
};

export default SortBy;
