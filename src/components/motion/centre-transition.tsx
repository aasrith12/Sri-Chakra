'use client';
import { useEffect, useRef, useState } from 'react';
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react';
const triangles = [
  '250,94 403,355 97,355',
  '250,406 100,145 400,145',
  '250,124 378,346 122,346',
  '250,371 131,166 369,166',
  '250,169 343,330 157,330',
  '250,334 170,195 330,195',
  '250,201 314,312 186,312',
  '250,305 196,211 304,211',
  '250,278 227,239 273,239',
];
function Triangle({
  points,
  index,
  progress,
}: {
  points: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index < 4 ? 0.17 + index * 0.025 : 0.37 + (index - 4) * 0.025;
  const end = start + 0.23;
  const x = useTransform(progress, [start, end], [(index % 2 ? 1 : -1) * (85 + index * 8), 0]);
  const y = useTransform(progress, [start, end], [((index % 3) - 1) * 90, 0]);
  const rotate = useTransform(progress, [start, end], [index % 2 ? 35 : -35, 0]);
  const opacity = useTransform(progress, [start - 0.06, start, end], [0, 0.3, 0.86]);
  return (
    <motion.polygon
      points={points}
      style={{ x, y, rotate, opacity, transformOrigin: '250px 250px' }}
    />
  );
}
function Boundary({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const length = useTransform(progress, [index * 0.025, 0.13 + index * 0.025], [0, 1]);
  return (
    <motion.span
      className={`stage-boundary boundary-${index}`}
      style={index % 2 ? { scaleY: length } : { scaleX: length }}
    />
  );
}
export function CentreTransition() {
  const target = useRef<HTMLElement>(null);
  const [mode, setMode] = useState<'static' | 'desktop' | 'mobile'>('static');
  const progress = useMotionValue(1);
  const entered = useInView(target, { once: true, amount: 0.35 });
  const { scrollYProgress } = useScroll({ target, offset: ['start start', 'end end'] });
  useEffect(() => {
    const query = window.matchMedia('(min-width: 901px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMode(reduced.matches ? 'static' : query.matches ? 'desktop' : 'mobile');
    update();
    query.addEventListener('change', update);
    reduced.addEventListener('change', update);
    return () => {
      query.removeEventListener('change', update);
      reduced.removeEventListener('change', update);
    };
  }, []);
  useEffect(() => {
    if (mode === 'static') {
      progress.set(1);
      return;
    }
    if (mode === 'desktop') {
      progress.set(scrollYProgress.get());
      return scrollYProgress.on('change', (value) => progress.set(value));
    }
    progress.set(0);
    if (entered) {
      const controls = animate(progress, 1, { duration: 3.8, ease: 'easeInOut' });
      return () => controls.stop();
    }
  }, [mode, entered, progress, scrollYProgress]);
  const rings = useTransform(progress, [0.65, 0.78], [0, 1]);
  const bindu = useTransform(progress, [0.79, 0.85], [0, 1]);
  const message = useTransform(progress, [0.9, 0.98], [0, 1]);
  const messageY = useTransform(progress, [0.9, 1], [12, 0]);
  return (
    <section
      ref={target}
      className="signature-section"
      data-mode={mode}
      aria-labelledby="centre-heading"
    >
      <h2 className="sr-only" id="centre-heading">
        Many parts. One trusted centre.
      </h2>
      <p className="sr-only">
        Experience, products, relationships and purpose come together at Sri Chakra Agencies.
      </p>
      <div className="signature-sticky container">
        <div className="signature-caption">
          <span>The idea behind Sri Chakra</span>
          <a href="#experience">
            Continue to our story <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="signature-stage">
          <div className="stage-frame" aria-hidden="true">
            {[0, 1, 2, 3].map((index) => (
              <Boundary key={index} index={index} progress={progress} />
            ))}
          </div>
          <span className="stage-label stage-top">EXPERIENCE</span>
          <span className="stage-label stage-right">PRODUCTS</span>
          <span className="stage-label stage-bottom">RELATIONSHIPS</span>
          <span className="stage-label stage-left">PURPOSE</span>
          <div className="signature-art" aria-hidden="true">
            <svg viewBox="0 0 500 500" fill="none">
              <motion.g className="signature-rings" style={{ opacity: rings }}>
                <circle cx="250" cy="250" r="181" />
                <circle cx="250" cy="250" r="201" />
                <circle cx="250" cy="250" r="207" />
                {Array.from({ length: 16 }, (_, i) => (
                  <path
                    key={i}
                    d="M216 72 Q250 24 284 72"
                    transform={`rotate(${i * 22.5} 250 250)`}
                  />
                ))}
              </motion.g>
              <g className="signature-triangles">
                {triangles.map((points, index) => (
                  <Triangle key={points} points={points} index={index} progress={progress} />
                ))}
              </g>
              <motion.circle
                className="signature-bindu"
                cx="250"
                cy="250"
                r="4"
                style={{ opacity: bindu, scale: bindu, transformOrigin: '250px 250px' }}
              />
            </svg>
          </div>
          <motion.div
            className="signature-message"
            aria-hidden="true"
            style={{ opacity: message, y: messageY }}
          >
            <p>
              Many parts.
              <br />
              <em>One trusted centre.</em>
            </p>
            <span>SRI CHAKRA AGENCIES</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
