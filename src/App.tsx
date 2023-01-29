import { useMantineTheme, Text, Code, Group } from "@mantine/core";
import { useMouse } from "@mantine/hooks";

export default function App() {
  return (
    <Demo />
  );
}

function Demo() {
  const theme = useMantineTheme();
  const { ref, x, y } = useMouse();

  return (
    <>
      <Group position="center">
        <div
          ref={ref}
          style={{
            width: 300,
            height: 180,
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          }}
        />
      </Group>
      <Text align="center">
        Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
      </Text>
    </>
  );
}