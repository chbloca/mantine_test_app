import { Button, Group, MantineProvider, TextInput } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Demo />
    </MantineProvider>
  );
}

function Demo() {
  return (
    <MantineProvider
      inherit
      theme={{
        focusRingStyles: {
          // reset styles are applied to <button /> and <a /> elements
          // in &:focus:not(:focus-visible) selector to mimic
          // default browser behavior for native <button /> and <a /> elements
          resetStyles: () => ({ outline: 'none' }),

          // styles applied to all elements expect inputs based on Input component
          // styled are added with &:focus selector
          styles: (theme) => ({ outline: `2px solid ${theme.colors.orange[5]}` }),

          // focus styles applied to components that are based on Input
          // styled are added with &:focus selector
          inputStyles: (theme) => ({ outline: `2px solid ${theme.colors.orange[5]}` }),
        },
      }}
    >
      <Group grow>
        <Button>Move focus with tab</Button>
        <TextInput placeholder="Focus input to see styles override" />
      </Group>
    </MantineProvider>
  );
}