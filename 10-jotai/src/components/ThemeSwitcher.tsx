import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

type ThemeSwitcherProps = Omit<IconButtonProps, "aria-label">

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <IconButton
      size="md"
      fontSize="large"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  )
}
