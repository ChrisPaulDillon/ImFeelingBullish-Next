import React from 'react';
import { useColorMode, Flex, Box, IconButton, Link, Stack, useColorModeValue } from '@chakra-ui/react';
import { Banner } from '../common/Texts';
import { IconType } from 'react-icons';
import DarkModeButton from './DarkModeButton';

const NavBar = () => {
  return (
    <Flex
      as="nav"
      w="100%"
      justifyContent="flex"
      alignItems="space-between"
      minH="6vh"
      position="relative"
      top={0}
      borderBottom="1px"
      borderColor={useColorModeValue('gray.400', 'gray.700')}>
      <Stack isInline w="100%" justify="space-between" align="center">
        {/* <Box mt={1}>
          <IconButton
            icon={<MdMenu />}
            size="md"
            onClick={handleBurgerMenuPress}
            color={theme.colors.iconColor[colorMode]}
            aria-label=""
            isRoundmod
            fontSize="1.25em"
            variant="ghost"
          />
        </Box> */}
        <Banner mx={2} mt={1} textAlign="center" color={useColorModeValue('red.500', 'red.800')}>
          ImFeelingBullish.com
        </Banner>
        <DarkModeButton />
      </Stack>
    </Flex>
  );
};

interface INavItemProps {
  name: string;
  Icon: IconType;
  link: string;
  tooltip: string;
  memberStatusId: number;
  userMemberStatusId: number;
  onClose?: () => void;
  isOpen: boolean;
  idx: number;
}

export const LeftNavItem: React.FC<INavItemProps> = ({ Icon, link, tooltip, memberStatusId, userMemberStatusId }) => {
  return (
    <Box ml={2}>
      {userMemberStatusId >= memberStatusId && (
        <Stack spacing={1} isInline w="80%" py="0.5em" justify="space-between">
          <Link href={link} isExternal>
            <IconButton Icon={Icon} size="sm" label={tooltip} color="gray.100" onClick={() => undefined} aria-label="" />
          </Link>
        </Stack>
      )}
    </Box>
  );
};

export default NavBar;
