import React from 'react';
import { ButtonDiv, InnerTableRow, OuterTableRow, RowData } from '../tableHelpers/tableComponents';

function truncateTitle(title) {
  const maxLength = 100;
  return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
}

export default function TableRow({ stats, keys, longText }) {

  return (
    <OuterTableRow>
      <InnerTableRow>
        {keys.map((key, index) => (
          <RowData key={`${stats.id}-${index}`} flex={key.flex.toString()} aligned={'center'}>
            {
              key.name === longText ? truncateTitle(stats?.[key.name] ?? '-')
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
