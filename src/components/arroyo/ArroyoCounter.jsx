import { useState, useEffect, useRef } from 'react';

function ArroyoCounter({ value, prefix = '' }) {
  const [current, setCurrent] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const step = value / 50;
          let cur = 0;
          const id = setInterval(() => {
            cur = Math.min(cur + step, value);
            setCurrent(Math.round(cur));
            if (cur >= value) clearInterval(id);
          }, 40);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{prefix}{current.toLocaleString()}</span>;
}

export default ArroyoCounter;
