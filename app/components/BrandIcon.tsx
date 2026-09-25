type CoffeeIconProps = {
  size?: number;
  className?: string;
  onClick?: () => void;
};

export function CoffeeIcon({ size = 32, className, onClick }: CoffeeIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Coffee"
      role="img"
      onClick={onClick}
    >
      {/* Steam */}
      <path
        d="M62 40C54 34 57 27 63 22C69 17 70 12 67 8"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M76 42C70 37 72 32 77 27C82 23 83 19 81 15"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Coffee rim */}
      <path
        d="M35 52C35 47 47 44 64 44C81 44 93 47 93 52"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Coffee */}
      <ellipse cx="64" cy="53" rx="27" ry="6" fill="currentColor" />

      {/* Cup */}
      <path
        d="M35 54C36 68 39 83 49 88C54 91 61 92 67 91"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <path
        d="M92 54C91 67 88 82 78 88"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Handle */}
      <path
        d="M91 61C104 56 108 64 104 73C101 80 96 82 88 84"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Bottom */}
      <path
        d="M49 88C54 92 62 93 70 91"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
