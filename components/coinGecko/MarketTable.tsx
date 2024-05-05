import { Box, Flex, Table, TableCaption, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { useSortBy, useTable } from 'react-table';
import MarketTableRows from './MarketTableRows';

export interface MarketTableRow {
  name: string;
  symbol: string;
  displayName: React.ReactNode;
  price: string;
  ath: string;
  percentFromAth: string;
  marketCapRank: number;
  marketCap: string;
  dailyChange: string;
  volumeOverMarketcap: string;
  high_24h: string;
  low_24h: string;
}

interface MarketTableProps {
  marketData: MarketTableRow[];
}

const MarketTable: React.FC<MarketTableProps> = ({ marketData }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'displayName',
        sortType: 'name',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'All Time High',
        accessor: 'ath',
      },
      {
        Header: 'Percent From ATH',
        accessor: 'percentFromAth',
      },
      {
        Header: 'Market Cap Rank',
        accessor: 'marketCapRank',
      },
      {
        Header: 'Market Cap',
        accessor: 'marketCap',
      },
      {
        Header: '24 Hr Change',
        accessor: 'dailyChange',
      },
      {
        Header: 'Volume/Marketcap',
        accessor: 'volumeOverMarketcap',
      },
      {
        Header: '24 Hr High',
        accessor: 'high_24h',
      },
      {
        Header: '24 Hr Low',
        accessor: 'low_24h',
      },
    ],
    []
  );

  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow, getTableBodyProps } = useTable(
    {
      columns,
      data: marketData,
    },
    useSortBy
  );

  return (
    <Box px={3}>
      <Table>
        <TableCaption>Great Tokenomics</TableCaption>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()} position="sticky" top={0} zIndex={9} bg="white" shadow="0 1px 0 rgba(0,0,0,0.1)">
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps(column.getSortByToggleProps())} textAlign="center">
                  <Flex align="center" justify="center">
                    <Box>{column.render('Header')}</Box>
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <Box as={AiFillCaretDown} aria-label="sort" />
                        ) : (
                          <Box as={AiFillCaretUp} aria-label="sort" />
                        )
                      ) : (
                        ''
                      )}
                    </span>
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <MarketTableRows data={marketData} rows={rows} prepareRow={prepareRow} getTableBodyProps={getTableBodyProps} />
        <Tfoot></Tfoot>
      </Table>
    </Box>
  );
};

export default MarketTable;
