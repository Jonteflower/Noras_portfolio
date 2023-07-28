import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { IconButton } from '@mui/material';
import React from 'react';
import { ButtonDiv, LeftTable, TableHeaderContainer } from '../../reusable/tables/tableComponents';
import TableTitles from '../../reusable/tables/tableHeader';

const rotationStyle = (rotation) => ({
  transform: `rotate(${rotation}deg)`,
  transition: 'transform 0.3s',
});

function TableHeader({ language, itemArray, setItemArray, handleClick, keyArr, iconRotation, isDisabled}) {
  const color = { light: '#FF4D59', dark: '#FF4D5999' };

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
        <IconButton
          sx={{ p: 0 }}
          size='small'
          color="primary"
          aria-label="add"
          component="label"
          onClick={handleClick}
          disabled={isDisabled}
        >
          <KeyboardArrowRightIcon sx={{ color: color.light, fontSize: 30, p: 0, m: 0, ...rotationStyle(iconRotation) }} />
        </IconButton>
      </ButtonDiv>
    </TableHeaderContainer>
  )
}

export default TableHeader


