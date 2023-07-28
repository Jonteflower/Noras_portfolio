import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { LeftTable, TableHeaderContainer, ButtonDiv } from '../tableHelpers/tableComponents';
import TableTitles from '../tableHelpers/generalTableHeader';
import styled from 'styled-components';

const StyledIconButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :disabled {
    cursor: not-allowed;
  }
`;

const StyledIcon = styled(AiOutlineRight)`
  color: ${props => props.isDisabled ? '#FF4D5999' : '#FF4D99'};
  font-size: 16px;
  transition: transform 0.3s;
  transform: ${props => `rotate(${props.iconRotation}deg)`};
`;

function TableHeader({ language, itemArray, setItemArray, handleClick, keyArr, iconRotation, isDisabled }) {
  
  return (
    <TableHeaderContainer>
      <LeftTable>
        <TableTitles
          language={language}
          itemArray={itemArray}
          setItemArray={setItemArray}
          keyArray={keyArr}
          showIcons={true}
        />
      </LeftTable>
      <ButtonDiv>
        <StyledIconButton onClick={handleClick} disabled={isDisabled}>
          <StyledIcon iconRotation={iconRotation} isDisabled={isDisabled} />
        </StyledIconButton>
      </ButtonDiv>
    </TableHeaderContainer>
  )
}

export default TableHeader
