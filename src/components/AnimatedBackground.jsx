const nodes = [
  [285, 150],
  [470, 260],
  [930, 120],
  [1120, 220],
  [340, 620],
  [520, 510],
  [700, 430],
  [820, 650],
  [1050, 520],
  [210, 390],
  [390, 330],
  [780, 345],
  [980, 275],
]

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-antiqueWhite">
      <div className="absolute inset-0 opacity-55 bg-[linear-gradient(rgba(171,155,150,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(171,155,150,0.18)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="absolute top-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full bg-dustyRose/25 blur-3xl animate-pulse" />
      <div className="absolute bottom-[-180px] left-[-120px] h-[420px] w-[420px] rounded-full bg-cinnamonWood/20 blur-3xl animate-pulse" />

      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="traceGradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#A63A50" stopOpacity="0" />
            <stop offset="45%" stopColor="#A63A50" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#A1674A" stopOpacity="0.3" />
          </linearGradient>
          <filter id="signalGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          id="traceA"
          d="M80 150 H285 V260 H470 M730 120 H930 V220 H1120"
          fill="none"
          stroke="url(#traceGradient)"
          strokeWidth="3"
        />
        <path
          id="traceB"
          d="M120 620 H340 V510 H520 V430 H700 M820 650 V520 H1050"
          fill="none"
          stroke="url(#traceGradient)"
          strokeWidth="3"
        />
        <path
          id="traceC"
          d="M60 390 H210 V330 H390 M610 345 H780 V275 H980"
          fill="none"
          stroke="#A1674A"
          strokeOpacity="0.24"
          strokeWidth="2"
        />

        <path
          d="M0 710 C90 690 150 730 240 710 S390 690 480 710 S630 730 720 710 S870 690 960 710 S1110 730 1200 710"
          fill="none"
          stroke="#BA6E6E"
          strokeOpacity="0.22"
          strokeWidth="3"
          strokeDasharray="18 18"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-72"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>

        {nodes.map(([cx, cy], index) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="6"
            fill="#A63A50"
            fillOpacity="0.24"
          >
            <animate
              attributeName="r"
              values="5;8;5"
              dur={`${3 + (index % 4)}s`}
              begin={`${index * 0.18}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              values="0.16;0.36;0.16"
              dur={`${3 + (index % 4)}s`}
              begin={`${index * 0.18}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {[
          ["traceA", "6s", "0s"],
          ["traceB", "8s", "1.4s"],
          ["traceC", "7s", "2.2s"],
        ].map(([trace, duration, delay]) => (
          <circle
            key={trace}
            r="5"
            fill="#A63A50"
            fillOpacity="0.48"
            filter="url(#signalGlow)"
          >
            <animateMotion dur={duration} begin={delay} repeatCount="indefinite">
              <mpath href={`#${trace}`} />
            </animateMotion>
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.15;0.85;1"
              dur={duration}
              begin={delay}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-antiqueWhite/35 via-antiqueWhite/10 to-antiqueWhite/55" />
    </div>
  )
}
