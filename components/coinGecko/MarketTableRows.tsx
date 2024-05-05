import { Tbody, Td, Text, Tr } from '@chakra-ui/react';
import React from 'react';

interface MarketTableRowsProps {
  data: any;
  rows: any;
  prepareRow: (value) => void;
  getTableBodyProps: () => void;
}

const determineCellColour = (cell) => {
  if (cell.column.id == 'dailyChange') {
    return cell.value.includes('-') ? 'red.500' : 'green.500';
  }
  if (cell.column.id == 'volumeOverMarketcap') {
    const val = Number(cell.value);
    return val >= 10 && val <= 50 && 'green.500';
  }
};

const MarketTableRows: React.FC<MarketTableRowsProps> = ({ data, rows, prepareRow, getTableBodyProps, ...rest }) => {
  return (
    <Tbody id="markets" {...getTableBodyProps()} {...rest}>
      {rows.map((row, i) => {
        prepareRow(row);
        return (
          <Tr key={i} w="100%" {...row.getRowProps()}>
            {row.cells.map((cell, cellIndex) => {
              return (
                <Td
                  key={cellIndex}
                  maxW="10%"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  textAlign="center"
                  textColor={determineCellColour(cell)}
                  py={2}
                  px={0}
                  zIndex={1}
                  {...cell.getCellProps()}>
                  <Text>{cell.render('Cell')}</Text>
                </Td>
              );
            })}
          </Tr>
        );
      })}
    </Tbody>
  );
};

export default MarketTableRows;
