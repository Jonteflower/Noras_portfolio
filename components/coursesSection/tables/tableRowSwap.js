import React from 'react';
import { ButtonDiv, InnerTableRow, OuterTableRow, RowData } from '../../reusable/tables/tableComponents';

function truncateTitle(title) {
  const maxLength = 15;
  return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
}

export default function TableRow({ stats, keys }) {

  return (
    <OuterTableRow>
      <InnerTableRow>
        {keys.map((key, index) => (
          <RowData key={`${stats.id}-${index}`} flex={key.flex.toString()} aligned={'center'}>
            {key.name === 'title1' || key.name === 'title2' ? truncateTitle(stats?.[key.name] ?? '-')
              : key.name === 'meters' ? Math.round(stats?.[key.name]).toLocaleString().replace(/,/g, " ",) ?? '-'
                : (stats?.[key.name] ?? '-') + (key.name === 'percent' ? ' %' : '')
            }
          </RowData>
        ))}
      </InnerTableRow>
      <ButtonDiv></ButtonDiv>
    </OuterTableRow>
  )
}
