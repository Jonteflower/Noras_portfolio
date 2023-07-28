
import { CircularProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { MarketTileContainer, OuterContainer, TableHeaderWrapper } from '../tableHelpers/tableComponents';
import TableHeader from './tableHeader';
import LanguageContext from '../../../stores/languageContext';
import TableRow from './tableRow';

function combineObjectValues(obj) {
  // Extract the values into an array
  let valuesArray = Object.values(obj);

  // Combine the values into a single string with "-" separator
  let combinedString = valuesArray.join("-");

  return combinedString;
}

export default function GeneralTable({ data, setData, loading, headerSmall, headerLarge, longText }) {
  const { language } = useContext(LanguageContext)
  const [showHidden, setShowHidden] = useState(false)
  const [iconRotation, setIconRotation] = useState(0);
  const [keyArray, setKeyArray] = useState(headerLarge)

  const handleClick = () => {
    setShowHidden(!showHidden);
    setIconRotation(iconRotation === 0 ? 180 : 0);
  };

  useEffect(() => {
    setKeyArray(showHidden ? headerSmall : headerLarge)
  }, [showHidden])

  return (
    <TableHeaderWrapper >
      <TableHeader
        language={language}
        itemArray={data}
        setItemArray={setData}
        setShowHidden={setShowHidden}
        handleClick={handleClick}
        keyArr={keyArray}
        iconRotation={iconRotation}
        isDisabled={headerLarge.length == headerSmall.length}
      />
      <OuterContainer>
        <MarketTileContainer>
          {
            loading ?
              <CircularProgress sx={{ mt: 4 }} />
              :
              data?.map((item, index) => {
                const keyVal = combineObjectValues(item)
                return <TableRow stats={item} key={keyVal} showHidden={showHidden} keys={keyArray} longText={longText} />;
              })
          }
        </MarketTileContainer>
      </OuterContainer>
    </TableHeaderWrapper>
  );
};
