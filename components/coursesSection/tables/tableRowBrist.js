import React from 'react';
import { ButtonDiv, InnerTableRow, OuterTableRow, RowData } from '../../reusable/tables/tableComponents';


function truncateTitle(title) {
  const maxLength = 15;
  return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
}

export default function TableRowBrist({ stats, keys }) {

  return (
    <OuterTableRow>
      <InnerTableRow>
        {keys.map((key, index) => (
          <RowData key={`${stats.id}-${index}`} flex={key.flex.toString()} aligned={'center'}>
            {
              key.name === 'title' ? truncateTitle(stats?.[key.name] ?? '-')
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
