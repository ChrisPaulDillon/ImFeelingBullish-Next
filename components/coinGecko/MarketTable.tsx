import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTable } from 'react-table';
import MarketTableRows from './MarketTableRows';

export interface IMarketTableRow {
  name: React.ReactNode;
  price: string;
  marketCapRank: number;
  marketCap: string;
  dailyChange: string;
}

interface IProps {
  marketData: IMarketTableRow[];
}

const MarketTable: React.FC<IProps> = ({ marketData }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Price',
        accessor: 'price',
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
    ],
    []
  );

  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow, getTableBodyProps } = useTable({
    columns,
    data: marketData,
  });

  return (
    <Table variant="striped" colorScheme="teal">
      <TableCaption>Great Tokenomics</TableCaption>
      <Thead color="gray.500">
        <Tr position="sticky" top={0} zIndex={9} bg="white" shadow="0 1px 0 rgba(0,0,0,0.1)">
          {columns.map((headerGroup) => (
            <Th key={headerGroup.Header} maxW="20%" textAlign="center" py={2} px={0}>
              {headerGroup.Header}
            </Th>
          ))}
        </Tr>
      </Thead>
      <MarketTableRows data={marketData} rows={rows} prepareRow={prepareRow} getTableBodyProps={getTableBodyProps} />
      <Tfoot></Tfoot>
    </Table>
  );
};

export default MarketTable;
