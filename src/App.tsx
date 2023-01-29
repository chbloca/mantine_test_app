import { Button, Group, MantineProvider } from '@mantine/core';

export default function App() {
  return (
    <Demo />
  );
}

// the following button will have theme.colors.orange[theme.primaryShade] background
function Demo() {
  return <Button color="orange">Orange button</Button>;
}