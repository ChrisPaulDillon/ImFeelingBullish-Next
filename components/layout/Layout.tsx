import { useColorMode, theme, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Page } from '../common/Pages';
import NavBar from './NavBar';

const Layout = ({ children }: any) => {
  const { colorMode } = useColorMode();

  return (
    <Flex direction="column" m="0 auto" mx={2}>
      <NavBar />
      <Flex flexDir="row">
        <Page>{children}</Page>
      </Flex>
    </Flex>
  );
};

export default Layout;
