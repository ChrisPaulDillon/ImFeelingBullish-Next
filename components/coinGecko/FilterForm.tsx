import { Box, Heading, Text, Flex, Link } from '@chakra-ui/react';
import { useMemo } from 'react';

const FilterForm = () => {
    const priceColumns = useMemo(
        () => [
          {
            Label: "Over $1000",
            ValueMax: 9999999999,
            ValueMin: 10000,
            onClick: () => {},
          },
          {
            Label: "$500 to $999",
            ValueMax: 999,
            ValueMin: 500,
            onClick: () => {},
          },
          {
            Label: "$100 to $499",
            ValueMax: 499,
            ValueMin: 100,
            onClick: () => {},
          },
          {
            Label: "$10 to $99",
            ValueMax: 99,
            ValueMin: 10,
            onClick: () => {},
          },
          {
            Label: "$1 to $9",
            ValueMax: 9,
            ValueMin: 1,
            onClick: () => {},
          },
          {
            Label: "$0.10 to $0.99",
            ValueMax: 0.99,
            ValueMin: 0.10,
            onClick: () => {},
          },
          {
            Label: "Under $0.10",
            ValueMax: 0.10,
            ValueMin: 0.000000000001,
            onClick: () => {},
          },
        ],
        []
      );
    return(<Flex flexDir='column' borderRight='2px' minW='150px' borderColor="red.500">
        <Heading size='md' p={1}>Price</Heading>
        {priceColumns.map((x) => (<FilterItem label={x.Label} onClick={x.onClick}/> ))}
        <FilterItem label="Over $1000" onClick={() => {}}/>
        
    </Flex>)
}

interface IFilterItemProps {
    label: string;
    onClick: () => void;
}

const FilterItem: React.FC<IFilterItemProps> = ({label, onClick}) => {
    return(<Box p={1}><Link onClick={onClick}><Text fontSize='sm'>{label}</Text></Link></Box>)
}

export default FilterForm;