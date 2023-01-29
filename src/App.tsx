import { Button, MantineProvider } from '@mantine/core';

export default function App() {
  return (
    <Demo />
  );
}

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Button: {
            defaultProps: { color: 'red' },
          },
        },
      }}
    >
      <Button>Red color, defined with defaultProps</Button>
      <Button color="cyan">Cyan color, overridden by prop</Button>
    </MantineProvider>
  );
}