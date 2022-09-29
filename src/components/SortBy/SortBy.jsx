import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useFetchContext } from '../API/fetch';
import { Button } from '../Share/Buttons/Button';

const SortContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  margin-top: 70px;
  margin-left: 0px;
  margin-right: 0px;
  flex-direction: column;
  height: 100%;
  padding-left: 150px;

  @media (max-width: 1300px) {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 65%;
    justify-content: center;
    align-items: center;
  }
`;

const Details = styled.details`
  width: 95%;
  height: 45px;

  & summary {
    padding-left: 15px;
    width: 95%;
    box-shadow: 0px 0px 4px rgb(172, 169, 169);
    border-radius: 6px 6px 0px 0px;
    cursor: pointer;
    list-style: none;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 1300px) {
      margin-left: 15px;
      width: 97%;
    }

    @media (max-width: 485px) {
      margin-left: 7px;
    }
  }

  @media (max-width: 1300px) {
    width: 97%;
  }

  @media (max-width: 485px) {
    margin-left: 7px;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 5px 5px 0px;
  border: 1px solid #eee;
  width: 95%;
  padding: 10px;
  border-radius: 0px 0px 6px 6px;
  box-shadow: 0px 0px 4px rgb(172, 169, 169);

  @media (max-width: 1300px) {
    width: 97%;
    margin-left: 15px;
  }

  @media (max-width: 485px) {
    margin-left: 7px;
  }
`;

const Select = styled.select`
  padding: 10px;
  box-shadow: 0px 0px 4px rgb(172, 169, 169);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 5px 5px 5px 0px;
  background-color: #ced3db;
  height: 40px;
  border: none;


  &:active,
  &:focus,
  &:hover {
    border-style: none;
  }

  & option {
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  padding: 15px;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  font-size: 1em;
  font-weight: 300;
`;

const SortBy = () => {
  const [sortBy, setSortBy] = useState('p_desc');
  const { setDataSort } = useFetchContext();

  const handleSubmit = (event) => {
    setSortBy(event.target.value);
  };

  const sendDataHandler = () => {
    const data = localStorage.getItem('sortBy');

    setDataSort(data);
  };

  useEffect(() => {
    localStorage.setItem('sortBy', sortBy);
  }, [sortBy]);

  return (
    <>
      <SortContainer className='sort_container'>
        <Details open>
          <summary>Sort By</summary>
          <SelectContainer className='select_container'>
            <Label htmlFor='drop_down'>Sort Results By</Label>
            <Select
              onChange={handleSubmit}
              name='drop_down'
              id='drop_down'>
              {/* <option
                value={localStorage.getItem('sortBy')}
                disabled
                hidden>
                {localStorage.getItem('sortBy')}
              </option> */}
              <option value='p_desc'>Popularity Descending</option>
              <option value='p_asc'>Popularity Ascending</option>
              <option value='rate_desc'>Rating Descending</option>
              <option value='rate_asc'>Rating Ascending</option>
              <option value='rel_desc'>Release Date Descending</option>
              <option value='rel_asc'>Release Date Ascending</option>
              <option value='title_desc'>Title (Z-A)</option>
              <option value='title_asc'>Title (A-Z)</option>
            </Select>
          </SelectContainer>
        </Details>
        <Button onClick={sendDataHandler}>Search</Button>
      </SortContainer>
    </>
  );
};

export default SortBy;
