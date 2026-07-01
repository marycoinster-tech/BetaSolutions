import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
      }

      setTimeout(() => {
        if (ringRef.current) {
          ringRef.current.style.left = `${x - 20}px`;
          ringRef.current.style.top = `${y - 20}px`;
        }
      }, 60);

      if (glowRef.current) {
        glowRef.current.style.left = `${x}px`;
        glowRef.current.style.top = `${y}px`;
      }
    };

    const onMouseDown = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(0.7)";
      if (ringRef.current) ringRef.current.style.transform = "scale(1.5)";
    };

    const onMouseUp = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(1)";
      if (ringRef.current) ringRef.current.style.transform = "scale(1)";
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" style={{ left: -100, top: -100 }} />
      <div ref={ringRef} className="custom-cursor-ring" style={{ left: -100, top: -100 }} />
      <div ref={glowRef} className="mouse-glow" style={{ left: -300, top: -300 }} />
    </>
  );
}
