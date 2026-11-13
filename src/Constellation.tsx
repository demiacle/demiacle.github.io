import type { CSSProperties } from 'react';
import styles from './Constellation.module.css';

/*
 * Animated background for the projects panel: the original constellation tile,
 * plus a few stars that twinkle and a few dots of light that travel along the
 * lines. Everything is drawn in the tile's own 800x800 coordinates and scaled
 * to 312px, which is the tile size the site has always used.
 */

const TILE = 312;
const SCALE = TILE / 800;
const COLS = 4;
const ROWS = 15;

const LINES = [
  'M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63',
  'M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764',
  'M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880',
  'M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382',
  'M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269',
];

const NODES: [number, number][] = [
  [769, 229],
  [539, 269],
  [603, 493],
  [731, 737],
  [520, 660],
  [309, 538],
  [295, 764],
  [40, 599],
  [102, 382],
  [127, 80],
  [370, 105],
  [578, 42],
  [237, 261],
  [390, 382],
];

/** Multi-segment routes that follow existing lines, for the traveling dots. */
const ROUTES = [
  'M40 599L102 382 237 261 390 382 603 493 731 737',
  'M295 764L309 538 390 382 539 269 769 229',
  'M126.5 79.5L237 261 370 105 577.5 41.5 769 229',
  'M731 737L520 660 309 538 40 599',
  'M769 229L539 269 603 493 520 660 295 764',
  'M370 105L539 269 237 261 102 382 40 599',
  'M603 493L390 382 102 382 237 261 126.5 79.5',
];

/** Small seeded PRNG so the layout is the same on every render and every visit. */
function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(20240607);
const pick = <T,>(items: readonly T[]) => items[Math.floor(rand() * items.length)];
const tileOrigin = () => [Math.floor(rand() * COLS) * TILE, Math.floor(rand() * ROWS) * TILE];

const TWINKLES = Array.from({ length: 26 }, () => {
  const [tx, ty] = tileOrigin();
  const [cx, cy] = pick(NODES);
  return { tx, ty, cx, cy, dur: 4 + rand() * 6, delay: -rand() * 10 };
});

const PULSES = Array.from({ length: 24 }, () => {
  const [tx, ty] = tileOrigin();
  const dur = 16 + rand() * 10;
  return { tx, ty, route: pick(ROUTES), dur, begin: -rand() * dur };
});

const tileTransform = (tx: number, ty: number) => `translate(${tx} ${ty}) scale(${SCALE})`;

export default function Constellation() {
  return (
    <div className={styles.frame} aria-hidden="true">
      <div className={styles.sky}>
        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="constellation-tile"
              width={TILE}
              height={TILE}
              patternUnits="userSpaceOnUse"
            >
              <g transform={`scale(${SCALE})`}>
                <g className={styles.lines}>
                  {LINES.map((d) => (
                    <path key={d} d={d} />
                  ))}
                </g>
                <g className={styles.nodes}>
                  {NODES.map(([cx, cy]) => (
                    <circle key={`${cx},${cy}`} cx={cx} cy={cy} r={5} />
                  ))}
                </g>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#constellation-tile)" />

          {TWINKLES.map(({ tx, ty, cx, cy, dur, delay }, i) => (
            <circle
              key={`t${i}`}
              className={styles.twinkle}
              transform={tileTransform(tx, ty)}
              cx={cx}
              cy={cy}
              r={7}
              style={{ '--dur': `${dur}s`, '--delay': `${delay}s` } as CSSProperties}
            />
          ))}

          <g className={styles.pulses}>
            {PULSES.map(({ tx, ty, route, dur, begin }, i) => (
              <g key={`p${i}`} transform={tileTransform(tx, ty)}>
                <g opacity={0}>
                  {/* Travel the route in the first 35% of the cycle, then rest unseen. */}
                  <animateMotion
                    path={route}
                    dur={`${dur}s`}
                    begin={`${begin}s`}
                    repeatCount="indefinite"
                    calcMode="linear"
                    keyPoints="0;1;1"
                    keyTimes="0;0.35;1"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0;0"
                    keyTimes="0;0.05;0.3;0.35;1"
                    dur={`${dur}s`}
                    begin={`${begin}s`}
                    repeatCount="indefinite"
                  />
                  <circle className={styles.halo} r={14} />
                  <circle className={styles.spark} r={4} />
                </g>
              </g>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}
