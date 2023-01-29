import { Group, Button } from "@mantine/core";
import { useEventListener } from "@mantine/hooks";
import { useState, useCallback } from "react";

export default function App() {
  return (
    <Demo />
  );
}

function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener('click', increment);

  return (
    <Group position="center">
      <Button ref={ref}>Button clicks: {count}</Button>
    </Group>
  );
}