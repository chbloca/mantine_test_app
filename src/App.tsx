import { Button, MantineProvider } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider theme={{ fontFamily: 'Open Sans' }} withGlobalStyles withNormalizeCSS>
      <Demo />
    </MantineProvider>
  );
}

function Demo() {
  return <Button>My app button</Button>;
}