function CatSVG(props) {
  return (
    <svg
      viewBox="0 0 200 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="춤추는 고양이"
      {...props}
    >
      {/* 꼬리 */}
      <path
        d="M158 150 Q195 140 185 100 Q178 75 155 80"
        fill="none"
        stroke="#ff9f43"
        strokeWidth="14"
        strokeLinecap="round"
      />

      {/* 몸통 */}
      <ellipse cx="100" cy="150" rx="55" ry="45" fill="#ff9f43" />

      {/* 앞발 */}
      <ellipse cx="75" cy="192" rx="14" ry="10" fill="#ffb976" />
      <ellipse cx="125" cy="192" rx="14" ry="10" fill="#ffb976" />

      {/* 배 무늬 */}
      <ellipse cx="100" cy="160" rx="30" ry="26" fill="#fff1de" />

      {/* 머리 */}
      <circle cx="100" cy="85" r="48" fill="#ff9f43" />

      {/* 귀 */}
      <path d="M62 55 L48 15 L88 45 Z" fill="#ff9f43" />
      <path d="M138 55 L152 15 L112 45 Z" fill="#ff9f43" />
      <path d="M66 48 L58 25 L82 42 Z" fill="#ffd8ab" />
      <path d="M134 48 L142 25 L118 42 Z" fill="#ffd8ab" />

      {/* 얼굴 무늬 */}
      <ellipse cx="100" cy="100" rx="26" ry="20" fill="#fff1de" />

      {/* 눈 */}
      <ellipse cx="82" cy="80" rx="6" ry="8" fill="#2d2d2d" />
      <ellipse cx="118" cy="80" rx="6" ry="8" fill="#2d2d2d" />
      <circle cx="84" cy="77" r="2" fill="#fff" />
      <circle cx="120" cy="77" r="2" fill="#fff" />

      {/* 코 */}
      <path d="M96 96 L104 96 L100 102 Z" fill="#e8748a" />

      {/* 입 */}
      <path
        d="M100 102 Q100 108 92 108 M100 102 Q100 108 108 108"
        fill="none"
        stroke="#2d2d2d"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* 수염 */}
      <g stroke="#2d2d2d" strokeWidth="1.5" strokeLinecap="round">
        <line x1="45" y1="88" x2="72" y2="92" />
        <line x1="45" y1="98" x2="72" y2="98" />
        <line x1="155" y1="88" x2="128" y2="92" />
        <line x1="155" y1="98" x2="128" y2="98" />
      </g>
    </svg>
  )
}

export default CatSVG
