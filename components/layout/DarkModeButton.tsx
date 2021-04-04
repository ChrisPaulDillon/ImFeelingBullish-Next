import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      fontSize="15px"
      variant="ghost"
      icon={colorMode == 'dark' ? <FaSun /> : <FaMoon />}
      aria-label="Change Colour Mode"
    />
  );
};

export default DarkModeButton;
