import React from 'react';
import { ButtonDiv, InnerTableRow, OuterTableRow, RowData } from '../tableHelpers/tableComponents';

function truncateTitle(title, showHidden) {
  const maxLength = showHidden ? 100 : 35;
  return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
}

export default function TableRow({ stats, keys, longText, showHidden }) {

  return (
    <OuterTableRow>
      <InnerTableRow>
        {keys.map((key, index) => (
          <RowData key={`${stats.id}-${index}`} flex={key.flex.toString()} aligned={'center'}>
            {
              key.name === longText ? truncateTitle(stats?.[key.name] ?? '-', showHidden)
                :
                stats?.[key.name]
            }
          </RowData>
        ))}
      </InnerTableRow>
      <ButtonDiv></ButtonDiv>
    </OuterTableRow>
  )
}
