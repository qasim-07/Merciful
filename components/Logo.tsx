export default function Logo({ height = 44 }: { height?: number }) {
  return (
    <img
      src="/assets/logo.jpg"
      alt="Merciful Tools — Built strong. Built to last."
      height={height}
      style={{ height, width: "auto", display: "block", borderRadius: 6 }}
      draggable={false}
    />
  );
}
