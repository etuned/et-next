import React from "react";
import { Link, Box, Flex, Text, Button, Stack, Center } from "@chakra-ui/react";

import Logo from "../ui/Logo";
import DrawerMenu from "./DrawerMenu";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
  <Center>
    <NavBarContainer {...props}>
     <DrawerMenu 
     position='fixed' />
      <Logo {...props}
        color='black'
      />
      
    </NavBarContainer>
    </Center>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      position='fixed'
      as="nav"
      align="center"
      justify="space-between"
      top={-4}

      m={4}
      p={2}
      w="100vw"

      bgColor='whitesmoke'
      color='black'
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;