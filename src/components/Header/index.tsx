import { Flex } from '@chakra-ui/react';
import { Logo } from './Logo';
import { NotificationNav } from './NotificationNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      alignItems="center"
    >
      <Logo />
      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile />
      </Flex>
    </Flex>
  );
}