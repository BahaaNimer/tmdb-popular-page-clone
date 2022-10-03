import React, { useEffect, useState, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';

import styled from 'styled-components';
import { useFetchContext } from '../API/fetch';
import { styles } from '../styles/styles';

const SortContainer = styled.div`
  position: relative;
  width: ${(props) => props.styles.width.w100};
  display: flex;
  margin-top: ${(props) => props.styles.margin.m70x};
  margin-left: ${(props) => props.styles.margin.m0};
  margin-right: ${(props) => props.styles.margin.m0};
  flex-direction: column;
  height: ${(props) => props.styles.height.h100};
  padding-left: ${(props) => props.styles.padding.p150x};

  @media (max-width: ${(props) => props.styles.max_width.w1300x}) {
    margin: ${(props) => props.styles.margin.m0};
    padding: ${(props) => props.styles.padding.p0};
    width: ${(props) => props.styles.width.w100};
    height: ${(props) => props.styles.height.h65};
    justify-content: center;
    align-items: center;
  }
`;

const Button = styled.button`
  all: unset;
  position: relative;
  width: ${(props) => props.styles.width.w70};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(10px, 160px);
  background-color: ${(props) => props.styles.color.l_blue};
  border-radius: ${(props) => props.styles.border_radius.br15};
  color: ${(props) => props.styles.color.l_white};
  font-size: large;
  font-weight: ${(props) => props.styles.font_weight.w7};
  height: ${(props) => props.styles.height.h40x};

  &:hover {
    background-color: ${(props) => props.styles.color.d_blue};
  }

  @media (max-width: ${(props) => props.styles.max_width.w1300x}) {
    margin-top: ${(props) => props.styles.margin.m2};
    width: ${(props) => props.styles.width.w80};
  }

  @media (max-width: ${(props) => props.styles.max_width.w800x}) {
    width: ${(props) => props.styles.width.w97};
  }

  @media (max-width: ${(props) => props.styles.max_width.w530x}) {
    width: ${(props) => props.styles.width.w97};
  }

  @media (max-width: ${(props) => props.styles.max_width.w475x}) {
    width: ${(props) => props.styles.width.w97};
  }
`;

const Details = styled.details`
  width: ${(props) => props.styles.width.w95};
  height: ${(props) => props.styles.height.h45x};

  & summary {
    padding-left: ${(props) => props.styles.padding.p15x};
    width: ${(props) => props.styles.width.w80};
    box-shadow: 0px 0px 4px ${(props) => props.styles.color.l_gray};
    border-radius: ${(props) => props.styles.border_radius.br6}
      ${(props) => props.styles.border_radius.br6} 0px 0px;
    cursor: pointer;
    list-style: none;
    height: ${(props) => props.styles.height.h60x};
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: ${(props) => props.styles.max_width.w1300x}) {
      margin-left: ${(props) => props.styles.margin.m15x};
      width: ${(props) => props.styles.width.w97};
    }

    @media (max-width: ${(props) => props.styles.max_width.w485x}) {
      margin-left: ${(props) => props.styles.margin.m7x};
    }
  }

  @media (max-width: ${(props) => props.styles.max_width.w1300x}) {
    width: ${(props) => props.styles.width.w97};
  }

  @media (max-width: ${(props) => props.styles.max_width.w485x}) {
    margin-left: ${(props) => props.styles.margin.m7x};
  }
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px ${(props) => props.styles.margin.m5x}
    ${(props) => props.styles.margin.m5x} 0px;
  border: 1px solid ${(props) => props.styles.color.white};
  width: ${(props) => props.styles.width.w80};
  padding: 10px ${(props) => props.styles.padding.p10x};
  border-radius: 0px 0px ${(props) => props.styles.border_radius.br6}
    ${(props) => props.styles.border_radius.br6};
  box-shadow: 0px 0px 4px ${(props) => props.styles.color.l_gray};

  @media (max-width: ${(props) => props.styles.max_width.w1300x}) {
    width: ${(props) => props.styles.width.w97};
    margin-left: ${(props) => props.styles.margin.m15x};
  }

  @media (max-width: ${(props) => props.styles.max_width.w485x}) {
    margin-left: ${(props) => props.styles.margin.m7x};
  }
`;

const Select = styled.select`
  padding: ${(props) => props.styles.padding.p2};
  box-shadow: 0px 0px 4px ${(props) => props.styles.color.l_gray};
  border-radius: ${(props) => props.styles.border_radius.br6};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.styles.margin.m5x}
    ${(props) => props.styles.margin.m5x} ${(props) => props.styles.margin.m5x}
    0px;
  background-color: ${(props) => props.styles.color.l_gray};
  height: ${(props) => props.styles.height.h40x};
  border: none;

  @media (max-width: ${(props) => props.styles.max_width.w1300x}) {
    height: ${(props) => props.styles.height.h60x};
  }

  &:active,
  &:focus,
  &:hover {
    border-style: none;
  }

  & option {
    background-color: ${(props) => props.styles.color.white};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  padding: ${(props) => props.styles.padding.p15x};
  font-family: 'Source Sans Pro', Arial, sans-serif;
  font-size: ${(props) => props.styles.font_size.fs1};
  font-weight: ${(props) => props.styles.font_weight.w3};
`;

const SortBy = () => {
  const [sortBy, setSortBy] = useState('p_desc');
  const { setDataSort } = useFetchContext();
  const ref = useRef(null);

  const handleSubmit = (event) => {
    setSortBy(event.target.value);
  };

  const sendDataHandler = () => {
    const data = localStorage.getItem('sortBy');
    ref.current.continuousStart();
    setTimeout(() => {
      ref.current.complete();
      setDataSort(data);
    }, 500);
  };

  useEffect(() => {
    localStorage.setItem('sortBy', sortBy);
  }, [sortBy]);

  return (
    <>
      <LoadingBar
        color={styles.color.l_blue}
        ref={ref}
      />
      <SortContainer
        styles={styles}
        className='sort_container'>
        <Details
          styles={styles}
          open>
          <summary>Sort By</summary>
          <SelectContainer
            styles={styles}
            className='select_container'>
            <Label
              styles={styles}
              htmlFor='drop_down'>
              Sort Results By
            </Label>
            <Select
              styles={styles}
              onChange={handleSubmit}
              name='drop_down'
              id='drop_down'>
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
        <Button
          styles={styles}
          onClick={sendDataHandler}>
          Search
        </Button>
      </SortContainer>
    </>
  );
};

export default SortBy;
