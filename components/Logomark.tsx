export default function Logomark({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pourik-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3d488" />
          <stop offset="55%" stopColor="#c79a2b" />
          <stop offset="100%" stopColor="#9c7418" />
        </linearGradient>
        <linearGradient id="pourik-silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e7e9ec" />
          <stop offset="55%" stopColor="#aab1bb" />
          <stop offset="100%" stopColor="#7c8592" />
        </linearGradient>
      </defs>
      <circle
        cx="38"
        cy="42"
        r="24"
        stroke="url(#pourik-gold)"
        strokeWidth="11"
      />
      <circle
        cx="78"
        cy="42"
        r="24"
        stroke="url(#pourik-silver)"
        strokeWidth="11"
      />
      <path
        d="M70 26 L104 10 M104 10 L92 12 M104 10 L102 22"
        stroke="url(#pourik-gold)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
