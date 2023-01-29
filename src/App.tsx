import { Text, TextInput } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';

export default function App() {
  return (
    <Demo />
  );
}

function Demo() {
  const [value, setValue] = useDebouncedState('', 200);

  return (
    <>
      <TextInput
        label="Enter value to see debounce effect"
        defaultValue={value}
        style={{ flex: 1 }}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Debounced value: {value}</Text>
    </>
  );
}