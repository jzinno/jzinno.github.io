import { useEffect, useState, FC, type JSX } from "react";

interface SvgWaveProps {
  opacity: number;
  path: string;
  delay: number;
  startColor: string;
  endColor: string;
}

const SvgWave: FC<SvgWaveProps> = ({
  opacity,
  path,
  delay,
  startColor,
  endColor,
}) => {
  return (
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style={{
        height: "50%",
        width: "100%",
        position: "absolute",
        bottom: 0,
        opacity,
        transform: "translateY(100%)",
        animationName: "bounce",
        animationDuration: ".66s",
        animationTimingFunction: "ease-out",
        animationDelay: `${delay}s`,
        animationFillMode: "forwards",
      }}
    >
      <path d={path} style={{ stroke: "none", fill: "url(#grad)" }}></path>
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: startColor, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: endColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};

interface WaveComponentProps {
  startColor?: string;
  endColor?: string;
}

const WaveComponent: FC<WaveComponentProps> = ({
  startColor = "#ff5e62",
  endColor = "#ff9966",
}) => {
  const [waves, setWaves] = useState<JSX.Element[]>([]);

  const wavePaths = [
    "M-1.53,49.99 C199.39,150.00 312.09,-49.98 501.53,49.99 L500.00,150.00 L0.00,150.00 Z",
    "M0,50 C190,100 310,0 500,50 L500,150 L0,150 Z",
    "M0,50 C150,160 350,10 500,50 L500,150 L0,150 Z",
    "M0,50 C210,170 320,0 500,50 L500,150 L0,150 Z",
    "M0,50 C220,200 300,0 500,50 L500,150 L0,150 Z",
  ];

  useEffect(() => {
    const newWaves: JSX.Element[] = [];
    for (let i = wavePaths.length - 1; i >= 0; i--) {
      newWaves.push(
        <SvgWave
          key={i}
          opacity={(i + 1) / wavePaths.length}
          path={wavePaths[i]}
          delay={i * 0.095}
          startColor={startColor}
          endColor={endColor}
        />
      );
    }
    setWaves(newWaves);
  }, [startColor, endColor]);

  return (
    <div className="relative" style={{ height: "225px" }}>
      {waves}
    </div>
  );
};

export default WaveComponent;
