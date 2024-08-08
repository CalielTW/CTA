import React, { useEffect, useRef } from "react";
import useWheel from "../../hooks/useWheel";

export const WheelComponent = ({
  segments,
  segColors,
  winningSegment,
  onFinished,
  primaryColor,
  contrastColor,
  buttonText,
  isOnlyOnce,
}) => {
  const { isFinished, setFinished, setWinner } = useWheel();

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const size = 290;
  const centerX = 300;
  const centerY = 300;

  let currentSegment = "";
  let isStarted = false;
  let timerHandle = 0;
  let angleCurrent = 0;
  let angleDelta = 0;
  let spinStart = 0;
  let frames = 0;

  const maxSpeed = Math.PI / segments.length;
  const upTime = segments.length * 100;
  const downTime = segments.length * 1000;
  const timerDelay = segments.length;

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.addEventListener("click", spin, false);
      contextRef.current = canvas.getContext("2d");
      wheelInit();
    }

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener("click", spin);
      }
    };
  }, [segments]);

  const wheelInit = () => {
    wheelDraw();
  };

  const spin = () => {
    isStarted = true;
    if (timerHandle === 0) {
      spinStart = new Date().getTime();
      frames = 0;
      timerHandle = setInterval(onTimerTick, timerDelay);
    }
  };

  const onTimerTick = () => {
    frames++;
    draw();

    const duration = new Date().getTime() - spinStart;

    let progress = 0;
    let finished = false;

    if (duration < upTime) {
      progress = duration / upTime;
      angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2);
    } else {
      if (winningSegment) {
        if (currentSegment === winningSegment && frames > segments.length) {
          progress = duration / upTime;
          angleDelta =
            maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
          progress = 1;
        } else {
          progress = duration / downTime;
          angleDelta =
            maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
        }
      } else {
        progress = duration / downTime;
        angleDelta =
          maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
      }

      if (progress >= 1) finished = true;
    }

    angleCurrent += angleDelta;

    while (angleCurrent >= Math.PI * 2) angleCurrent -= Math.PI * 2;

    if (finished) {
      setFinished(true);
      setWinner(currentSegment);
      onFinished(currentSegment);
      clearInterval(timerHandle);
      timerHandle = 0;
      angleDelta = 0;
    }
  };

  const wheelDraw = () => {
    clear();
    drawWheel();
    drawNeedle();
  };

  const draw = () => {
    clear();
    drawWheel();
    drawNeedle();
  };

  const drawSegment = (key, lastAngle, angle) => {
    const ctx = contextRef.current;
    const value = segments[key];
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, size, lastAngle, angle, false);
    ctx.lineTo(centerX, centerY);
    ctx.closePath();
    ctx.fillStyle = segColors[key];
    ctx.fill();
    ctx.stroke();
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((lastAngle + angle) / 2);
    ctx.fillStyle = contrastColor || "white";
    ctx.font = "bold 1em proxima-nova";
    ctx.fillText(value.substr(0, 21), size / 2 + 20, 0);
    ctx.restore();
  };

  const drawWheel = () => {
    const ctx = contextRef.current;
    let lastAngle = angleCurrent;
    const len = segments.length;
    const PI2 = Math.PI * 2;
    ctx.lineWidth = 1;
    ctx.strokeStyle = primaryColor || "black";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = "1em proxima-nova";
    for (let i = 1; i <= len; i++) {
      const angle = PI2 * (i / len) + angleCurrent;
      drawSegment(i - 1, lastAngle, angle);
      lastAngle = angle;
    }

    ctx.beginPath();
    ctx.arc(centerX, centerY, 50, 0, PI2, false);
    ctx.closePath();
    ctx.fillStyle = primaryColor || "black";
    ctx.lineWidth = 10;
    ctx.strokeStyle = contrastColor || "white";
    ctx.fill();
    ctx.font = "bold 1em proxima-nova";
    ctx.fillStyle = contrastColor || "white";
    ctx.textAlign = "center";
    ctx.fillText(buttonText || "Spin", centerX, centerY + 3);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, PI2, false);
    ctx.closePath();

    ctx.lineWidth = 10;
    ctx.strokeStyle = primaryColor || "black";
    ctx.stroke();
  };

  const drawNeedle = () => {
    const ctx = contextRef.current;
    ctx.lineWidth = 1;
    ctx.strokeStyle = contrastColor || "white";
    ctx.fileStyle = contrastColor || "white";
    ctx.beginPath();
    ctx.moveTo(centerX + 20, centerY - 50);
    ctx.lineTo(centerX - 20, centerY - 50);
    ctx.lineTo(centerX, centerY - 70);
    ctx.closePath();
    ctx.fill();

    const change = angleCurrent + Math.PI / 2;

    let i =
      segments.length -
      Math.floor((change / (Math.PI * 2)) * segments.length) -
      1;
    if (i < 0) i = i + segments.length;

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = primaryColor || "black";
    ctx.font = "bold 1.5em proxima-nova";
    currentSegment = segments[i];
    isStarted &&
      ctx.fillText(currentSegment, centerX + 10, centerY + size + 50);
  };

  const clear = () => {
    const ctx = contextRef.current;
    ctx.clearRect(0, 0, 1000, 800);
  };

  return (
    <div
      id="wheel"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <canvas
        ref={canvasRef}
        id="canvas"
        width="600"
        height="600"
        style={{
          pointerEvents: isFinished && isOnlyOnce ? "none" : "auto",
        }}
      />
    </div>
  );
};
