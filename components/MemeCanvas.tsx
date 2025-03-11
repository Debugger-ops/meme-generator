"use client";
import { useEffect, useRef } from 'react';
import styles from './styles/MemeCanvas.module.css';

interface MemeCanvasProps {
  image: HTMLImageElement | null;
  topText: string;
  bottomText: string;
  textColor: string;
  fontSize: number;
  textStroke: boolean;
}

export default function MemeCanvas({ 
  image, 
  topText, 
  bottomText, 
  textColor, 
  fontSize, 
  textStroke 
}: MemeCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (image) {
      // Draw the image
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      
      // Set text properties
      ctx.font = `bold ${fontSize}px Impact, sans-serif`;
      ctx.fillStyle = textColor;
      ctx.textAlign = 'center';
      
      // Add stroke if enabled
      if (textStroke) {
        ctx.strokeStyle = '#000';
        ctx.lineWidth = fontSize / 15;
        ctx.lineJoin = 'round';
      }
      
      // Draw top text
      const topY = fontSize + 10;
      if (textStroke) ctx.strokeText(topText, canvas.width / 2, topY);
      ctx.fillText(topText, canvas.width / 2, topY);
      
      // Draw bottom text
      const bottomY = canvas.height - 20;
      if (textStroke) ctx.strokeText(bottomText, canvas.width / 2, bottomY);
      ctx.fillText(bottomText, canvas.width / 2, bottomY);
    } else {
      // Draw placeholder
      ctx.fillStyle = '#e5e7eb';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.font = '20px Arial, sans-serif';
      ctx.fillStyle = '#6b7280';
      ctx.textAlign = 'center';
      ctx.fillText('Upload an image to start', canvas.width / 2, canvas.height / 2);
    }
  }, [image, topText, bottomText, textColor, fontSize, textStroke]);

  return (
    <canvas 
      id="meme-canvas"
      ref={canvasRef} 
      width={500} 
      height={500} 
      className={styles.canvas}
    />
  );
}
