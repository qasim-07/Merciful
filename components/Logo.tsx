export default function Logo({ size = 40, light = false }: { size?: number; light?: boolean }) {
  const ink = light ? "#ffffff" : "#0b1b33";
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="Merciful Industrial Tools logo">
      <circle cx="24" cy="24" r="21" stroke={ink} strokeWidth="3.4" />
      {/* three chuck jaws */}
      <g fill={ink}>
        <rect x="21.4" y="6.5" width="5.2" height="12" rx="2" />
        <rect x="21.4" y="6.5" width="5.2" height="12" rx="2" transform="rotate(120 24 24)" />
        <rect x="21.4" y="6.5" width="5.2" height="12" rx="2" transform="rotate(240 24 24)" />
      </g>
      <circle cx="24" cy="24" r="4.4" fill="#2563eb" />
    </svg>
  );
}
