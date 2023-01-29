import { Button, MantineProvider, Paper, TextInput } from '@mantine/core';
import { useRef } from 'react';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Demo />
    </MantineProvider>
  );
}

function Demo() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const paperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Button ref={buttonRef} />
      <Paper ref={paperRef} />
      <TextInput ref={inputRef} />
    </>
  );
}