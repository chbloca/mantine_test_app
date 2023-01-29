import { useElementSize } from "@mantine/hooks";

export default function App() {
  return (
    <Demo />
  );
}


function Demo() {
  const { ref, width, height } = useElementSize();

  return (
    <>
      <textarea ref={ref} style={{ width: 400, height: 120 }} />
      <div>Width: {width}px, height: {height}px</div>
    </>
  );
}