import { Button, MantineProvider } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Demo />
    </MantineProvider>
  );
}


function Demo() {
  return (
    <MantineProvider theme={{ defaultRadius: 0 }}>
      <Button>With 0px border-radius</Button>
      <Button radius="xl">Default radius can be overridden with radius prop</Button>
    </MantineProvider>
  );
}