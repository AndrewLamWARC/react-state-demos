import { ChakraProvider, Box, theme } from "@chakra-ui/react"

const App = () => (
  <ChakraProvider theme={theme}>
    <Box maxWidth={"12xl"} margin="auto" p={5}>
      Hello
    </Box>
  </ChakraProvider>
)

export { App }
