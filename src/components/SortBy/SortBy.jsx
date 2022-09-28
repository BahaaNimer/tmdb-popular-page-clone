import React, { useEffect, useState } from 'react';

import { Button } from '../Share/Buttons/Button';
import './SortBy.css';

const SortBy = ({ setDataSortedBy }) => {
  const [sortBy, setSortBy] = useState('Popularity Descending');

  const handleSubmit = (event) => {
    setSortBy(event.target.value);
  };

  const sendDataHandler = () => {
    const data = localStorage.getItem('sortBy');

    setDataSortedBy(data);
  };

  useEffect(() => {
    localStorage.setItem('sortBy', sortBy);
  }, [sortBy]);

  return (
    <>
      <div className='sort_container'>
        <details open>
          <summary>Sort By</summary>
          <div className='select_container'>
            <label htmlFor='drop_down'>Sort Results By</label>
            <select
              onChange={handleSubmit}
              name='drop_down'
              id='drop_down'>
              <option
                value={localStorage.getItem('sortBy')}
                disabled
                hidden>
                {localStorage.getItem('sortBy')}
              </option>
              <option value='Popularity Descending'>
                Popularity Descending
              </option>
              <option value='Popularity Ascending'>Popularity Ascending</option>
              <option value='Rating Descending'>Rating Descending</option>
              <option value='Rating Ascending'>Rating Ascending</option>
              <option value='Release Date Descending'>
                Release Date Descending
              </option>
              <option value='Release Date Ascending'>
                Release Date Ascending
              </option>
              <option value='Title (A-Z)'>Title (A-Z)</option>
              <option value='Title (Z-A)'>Title (Z-A)</option>
            </select>
          </div>
        </details>
        <Button onClick={sendDataHandler}>Search</Button>
      </div>
    </>
  );
};

export default SortBy;
