import { Button, MantineProvider } from '@mantine/core';

export default function App() {
  return (
    // Parent MantineProvider
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
      <Button>Affected only by parent provider</Button>
      {/*
        Child MantineProvider, inherits theme from parent MantineProvider.
        Other properties specified on child provider will override parent props.
        For example, in this case theme override will be:
        { colorScheme: 'dark', primaryColor: 'red' }
      */}
      <MantineProvider theme={{ primaryColor: 'red' }} inherit>
        <Button>Affected only by child provider</Button>
      </MantineProvider>
    </MantineProvider>
  );
}

// function Demo() {
//   return (
    
//   );
// }