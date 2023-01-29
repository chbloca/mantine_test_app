import { Button, Paper } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import { useState } from "react";

export default function App() {
  return (
    <Demo />
  );
}

function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      {opened && (
        <Paper ref={ref} shadow="sm">
          <span>Click outside to close</span>
        </Paper>
      )}
    </>
  );
}