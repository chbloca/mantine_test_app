import { Button, Group, MantineProvider } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Demo />
    </MantineProvider>
  );
}

function Demo() {
  return (
    <Group position="center">
      <Button variant="gradient">Default gradient button</Button>
      <MantineProvider
        inherit
        theme={{
          defaultGradient: {
            from: 'orange',
            to: 'red',
            deg: 45,
          },
        }}
      >
        <Button variant="gradient">Gradient from provider</Button>
      </MantineProvider>
    </Group>
  );
}