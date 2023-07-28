import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import styled from 'styled-components';
import { sxToggleButton } from '../utils/reuseable/SxProps';

export const PageTitleText = styled.h2`
    font-size: 2rem;
    line-height:2.5rem;
    font-weight: 400;
    color: #F1F1F1;
    text-align: left;
    width: 100%;
    margin:0;
    padding:0;

    @media screen and (max-width:850px) {
        font-size: 1.7rem;
        line-height: 20px;
    }   
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:flex-end;
  align-items: center;
  flex:1;
  @media screen and (max-width: 1100px) {
    justify-content:flex-start;
    align-items: flex-start;
  }
`;


export const OuterPageContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items: center;
  width:100%;
  //max-width: 1400px;
  margin-top:1rem;
  min-height:100vh;
  height: fit-content;
  @media screen and (max-width: 1200px) {
    gap:10px;
  }
`;

export const RowWrap = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
    width:100%;
    height: fit-content;
    gap: 15px;
    @media screen and (max-width: 1100px) {
    flex-direction:column;
    justify-content:flex-start;
    align-items: flex-start;
    gap:15px;
    }
`;

export const ButtonToggleComponent = ({ showValue, setValue, rightText, leftText, disabled, leftVal, rightVal }) => {

    const handleChange = (event, type) => {

        if (type !== null) {
            setValue(type)
            // HAndle the local session for the Verksamhet
            if (leftText === "Alla" || leftText === "All") {
                window.localStorage.setItem('showAll', JSON.stringify(type));
            }
        }
    }

    return (
        <ButtonWrap>
            <ToggleButtonGroup
                value={showValue}
                exclusive
                disabled={disabled}
                onChange={handleChange}
                aria-label="text alignment"
            >
                <ToggleButton value={leftVal} aria-label="left aligned" sx={sxToggleButton}>
                    {leftText ?? ''}
                </ToggleButton>
                <ToggleButton value={rightVal} aria-label="right aligned" sx={sxToggleButton}>
                    {rightText ?? ''}
                </ToggleButton>
            </ToggleButtonGroup>
        </ButtonWrap>
    );
};