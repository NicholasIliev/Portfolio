// MouseCircle.jsx
import React, { useState, useEffect } from "react";

function MouseCircle() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="mouse-circle-container">
      <div
        className="spotlight"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <div
        className="mouse-circle"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </div>
  );
}

export default MouseCircle;
