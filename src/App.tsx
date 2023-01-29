import { Button, Stack, Text } from '@mantine/core';

export default function App() {
  return (
    <Demo />
  );
}

function Demo() {
  return (
    <Stack align="flex-start">
      <Text color="blue.3">Text with theme.colors.blue[3] color</Text>
      <Button color="pink.4">Button with theme.colors.pink[4] color</Button>
    </Stack>
  );
}