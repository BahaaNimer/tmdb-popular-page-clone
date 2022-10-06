import React, { useEffect, useState, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';

import styled from 'styled-components';
import { useFetchContext } from '../API/fetch';
import { color, font_size, font_weight, font_family } from '../styles/styles';

const SortContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  margin-top: 70px;
  margin-left: 0;
  margin-right: 0;
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

const Button = styled.button`
  all: unset;
  position: relative;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(10px, 160px);
  background-color: ${color.l_blue};
  border-radius: 15px;
  color: ${color.l_white};
  font-size: ${font_size.l};
  font-weight: ${font_weight.w7};
  height: 40px;

  &:hover {
    background-color: ${color.d_blue};
  }

  @media (max-width: 1300px) {
    margin-top: 2%;
    width: 80%;
  }

  @media (max-width: 800px) {
    width: 97%;
  }

  @media (max-width: 530px) {
    width: 97%;
  }

  @media (max-width: 475px) {
    width: 97%;
  }
`;

const Details = styled.details`
  width: 95%;
  height: 45px;

  & summary {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 15px;
    height: 60px;
    width: 80%;
    box-shadow: 0px 0px 4px ${color.l_gray};
    border-radius: 6px 6px 0px 0px;
    cursor: pointer;
    list-style: none;

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
  border: 1px solid ${color.white};
  width: 80%;
  padding: 10px;
  border-radius: 0px 0px 6px 6px;
  box-shadow: 0px 0px 4px ${color.l_gray};

  @media (max-width: 1300px) {
    width: 97%;
    margin-left: 15px;
  }

  @media (max-width: 485px) {
    margin-left: 7px;
  }
`;

const Select = styled.select`
  display: flex;
  padding: 2%;
  box-shadow: 0px 0px 4px ${color.l_gray};
  border: none;
  border-radius: 6px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 5px 5px 0px;
  background-color: ${color.l_gray};
  height: 40px;

  @media (max-width: 1300px) {
    height: 55px;
    line-height: 1.6rem;
  }

  &:active,
  &:focus,
  &:hover {
    border-style: none;
  }

  & option {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${color.white};
  }
`;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  padding: 15px;
  font-family: ${font_family.ssp}, ${font_family.ar}, ${font_family.ssf};
  font-size: ${font_size.fs1};
  font-weight: ${font_weight.w3};
`;

const SortBy = () => {
  const [sortBy, setSortBy] = useState('popularity.desc');
  const { setDataSort, setRest } = useFetchContext();
  const ref = useRef(null);

  const handleSubmit = (event) => {
    setSortBy(event.target.value);
  };

  const sendDataHandler = () => {
    const data = localStorage.getItem('sortBy');
    ref.current.continuousStart();
    setDataSort(data);
    setRest('clicked');
    ref.current.complete();
  };

  useEffect(() => {
    localStorage.setItem('sortBy', sortBy);
  }, [sortBy]);

  return (
    <>
      <LoadingBar
        color={color.l_blue}
        ref={ref}
      />
      <SortContainer className='sort_container'>
        <Details open>
          <summary>Sort By</summary>
          <SelectContainer className='select_container'>
            <Label htmlFor='drop_down'>Sort Results By</Label>
            <Select
              onChange={handleSubmit}
              name='drop_down'
              id='drop_down'>
              <option value='popularity.desc'>Popularity Descending</option>
              <option value='popularity.asc'>Popularity Ascending</option>
              <option value='vote_average.desc'>Rating Descending</option>
              <option value='vote_average.asc'>Rating Ascending</option>
              <option value='release_date.desc'>Release Date Descending</option>
              <option value='release_date.asc'>Release Date Ascending</option>
              <option value='original_title.desc'>Title (Z-A)</option>
              <option value='original_title.asc'>Title (A-Z)</option>
            </Select>
          </SelectContainer>
        </Details>
        <Button onClick={sendDataHandler}>Search</Button>
      </SortContainer>
    </>
  );
};

export default SortBy;
