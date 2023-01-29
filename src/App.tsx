import { Button, Group, MantineProvider } from '@mantine/core';

export default function App() {
  return (
    <Demo />
  );
}

function Demo() {
  return (
    <MantineProvider theme={{ primaryShade: 6 }}>
      <Group position="center">
        <Button variant="filled">Filled button</Button>
        <Button variant="light">Light button</Button>
        <Button variant="outline">Outline button</Button>
      </Group>
    </MantineProvider>
  );
}