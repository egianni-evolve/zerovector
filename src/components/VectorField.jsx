import { useEffect, useRef } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import { CRTShader } from '../lib/CRTShader';

const GRID_SPACING = 44;
const LINE_LENGTH = 18;
const LERP_SPEED = 0.06;
const STROKE_ALPHA = 0.07;
const SCANLINE_INTERVAL = 8000; // ms per sweep

function VectorField() {
  const sourceCanvasRef = useRef(null);  // offscreen 2D canvas
  const displayCanvasRef = useRef(null); // visible WebGL canvas
  const mousePosition = useMousePosition();
  const anglesRef = useRef(null);
  const driftRef = useRef({ time: 0 });
  const crtRef = useRef(null);

  useEffect(() => {
    const source = sourceCanvasRef.current;
    const display = displayCanvasRef.current;
    if (!source || !display) return;

    const ctx = source.getContext('2d');
    let animationId;
    let cols, rows;

    // Initialize CRT shader on the display canvas
    crtRef.current = new CRTShader(display, {
      barrelDistortion: 0.04,
      chromaticAberration: 0.0008,
      scanlineIntensity: 0.18,
      scanlineCount: 800.0,
      phosphorMask: 0.15,
      bloom: 0.06,
      noise: 0.025,
      vignette: 0.25,
      brightness: 1.15,
      flicker: 0.003,
    });

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Source canvas (2D) — matches viewport at device resolution
      source.width = w * dpr;
      source.height = h * dpr;
      source.style.width = w + 'px';
      source.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Display canvas (WebGL) — same dimensions
      display.width = w * dpr;
      display.height = h * dpr;
      display.style.width = w + 'px';
      display.style.height = h + 'px';

      cols = Math.ceil(w / GRID_SPACING) + 1;
      rows = Math.ceil(h / GRID_SPACING) + 1;

      // Initialize angles grid
      const totalCells = cols * rows;
      if (!anglesRef.current || anglesRef.current.length !== totalCells) {
        anglesRef.current = new Float32Array(totalCells);
        for (let i = 0; i < totalCells; i++) {
          anglesRef.current[i] = Math.random() * Math.PI * 2;
        }
      }
    }

    function render(timestamp) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const mouse = mousePosition.current;
      const drift = driftRef.current;
      drift.time = timestamp || 0;

      // --- Draw vector field to source canvas ---
      ctx.clearRect(0, 0, width, height);

      // Compute attractor position
      let attractX, attractY;
      if (mouse.hasMouseMoved) {
        attractX = mouse.x;
        attractY = mouse.y;
      } else {
        // Autonomous drift for mobile / no-mouse
        const t = drift.time * 0.0003;
        attractX = width * 0.5 + Math.sin(t) * width * 0.3;
        attractY = height * 0.5 + Math.cos(t * 0.7) * height * 0.25;
      }

      // Draw vector grid
      ctx.strokeStyle = `rgba(0, 255, 255, ${STROKE_ALPHA})`;
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';

      const angles = anglesRef.current;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const idx = row * cols + col;
          const x = col * GRID_SPACING;
          const y = row * GRID_SPACING;

          // Target angle toward attractor
          const targetAngle = Math.atan2(attractY - y, attractX - x);

          // Lerp current angle toward target
          let current = angles[idx];
          let diff = targetAngle - current;

          // Normalize angle difference to [-PI, PI]
          while (diff > Math.PI) diff -= Math.PI * 2;
          while (diff < -Math.PI) diff += Math.PI * 2;

          current += diff * LERP_SPEED;
          angles[idx] = current;

          // Draw line segment
          const halfLen = LINE_LENGTH / 2;
          const cos = Math.cos(current);
          const sin = Math.sin(current);

          ctx.beginPath();
          ctx.moveTo(x - cos * halfLen, y - sin * halfLen);
          ctx.lineTo(x + cos * halfLen, y + sin * halfLen);
          ctx.stroke();
        }
      }

      // Scanline sweep
      const scanProgress = (drift.time % SCANLINE_INTERVAL) / SCANLINE_INTERVAL;
      const scanY = scanProgress * (height + 40) - 20;

      ctx.strokeStyle = `rgba(0, 255, 255, 0.03)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(width, scanY);
      ctx.stroke();

      // Subtle glow around the scanline
      const gradient = ctx.createLinearGradient(0, scanY - 20, 0, scanY + 20);
      gradient.addColorStop(0, 'rgba(0, 255, 255, 0)');
      gradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.015)');
      gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanY - 20, width, 40);

      // --- Pipe through CRT shader to display canvas ---
      if (crtRef.current) {
        crtRef.current.render(source);
      }

      animationId = requestAnimationFrame(render);
    }

    resize();
    animationId = requestAnimationFrame(render);

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      if (crtRef.current) {
        crtRef.current.destroy();
        crtRef.current = null;
      }
    };
  }, [mousePosition]);

  return (
    <>
      {/* Offscreen source canvas — vector field renders here */}
      <canvas
        ref={sourceCanvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          visibility: 'hidden',
        }}
      />
      {/* Visible display canvas — CRT shader output */}
      <canvas
        ref={displayCanvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
    </>
  );
}

export default VectorField;
