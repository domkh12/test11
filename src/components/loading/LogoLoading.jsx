import React, { useEffect, useRef } from 'react';

const LogoLoading = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Ensure the canvas size is set correctly
    canvas.width = 200;
    canvas.height = 200;

    // Define the path for the logo (using the provided SVG path data)
    const paths = [
      'M4.62,28.7c-1.38-.26-2.21-1.08-2.81-2.11-.92-1.59-.88-3.31-.48-5.03.58-2.52,1.91-4.69,3.44-6.71,3.73-4.93,8.15-9.2,12.97-13.05.44-.35.99-.58,1.48-.87.4-.24.63-.07.8.31.38.84.36,1.69.09,2.56-.52,1.64-1.49,3.01-2.59,4.29-2.5,2.89-5.06,5.73-7.54,8.64-1.13,1.33-2.2,2.73-3.19,4.16-1.59,2.31-2.62,4.81-2.17,7.83Z',
      'M23.44.58c1.53.21,2.83,1.44,3.25,3.12.58,2.29.02,4.41-.89,6.49-1.32,3.02-3.36,5.54-5.49,7.99-3.25,3.76-7,6.99-10.77,10.2-.61.52-1.57.3-1.69-.48-.11-.76-.07-1.62.16-2.35.54-1.74,1.62-3.2,2.8-4.56,2.4-2.76,4.88-5.46,7.27-8.23,1.98-2.29,3.76-4.72,4.87-7.57.27-.7.53-1.44.61-2.19.08-.81-.07-1.64-.11-2.44Z',
      'M12.49,1.63C7.86,5.55,3.72,9.83.76,15.17c-.08-.03-.16-.06-.24-.09,0-1.99-.06-3.98.03-5.96.04-.92.19-1.91.58-2.73C2.53,3.43,4.84,1.7,8.21,1.64c1.42-.02,2.85,0,4.28,0Z',
      'M15.6,27.81c2.16-2.16,4.34-4.24,6.41-6.44,2.07-2.2,3.73-4.72,5.34-7.33.05.55.14,1.11.13,1.66-.02,1.59,0,3.18-.12,4.76-.26,3.38-2.88,6.41-6.14,7.2-.36.09-.73.15-1.09.15-1.49.02-2.98,0-4.53,0Z'
    ];

    const totalLength = 200; // Adjust this value based on your path length
    let offset = 0;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#4C3DE3';

      paths.forEach(pathData => {
        const path = new Path2D(pathData);
        ctx.setLineDash([totalLength, totalLength]);
        ctx.lineDashOffset = -offset;
        ctx.stroke(path);
      });

      offset += 1; // Adjust this value to change the speed
      if (offset > totalLength) {
        offset = 0;
      }
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-red-500">
      <div className="bg-green-500 flex justify-center items-center">
        <canvas ref={canvasRef} className="border border-black" />
      </div>
    </div>
  );
};

export default LogoLoading;
