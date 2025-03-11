"use client";
import { useState } from 'react';
import MemeCanvas from './MemeCanvas';
import TextControls from './TextControls';
import ImageUploader from './ImageUploader';
import { MemeState } from '../types';
import styles from './styles/MemeGenerator.module.css';

export default function MemeGenerator() {
  const [memeState, setMemeState] = useState<MemeState>({
    image: null,
    topText: 'TOP TEXT',
    bottomText: 'BOTTOM TEXT',
    textColor: '#ffffff',
    fontSize: 40,
    textStroke: true,
  });

  const updateMemeState = (newState: Partial<MemeState>): void => {
    setMemeState({ ...memeState, ...newState });
  };

  const handleDownload = (): void => {
    const canvas = document.getElementById('meme-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const link = document.createElement('a');
    link.download = 'my-meme.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* Left side - Canvas */}
        <div className={styles.canvasContainer}>
          <MemeCanvas
            image={memeState.image}
            topText={memeState.topText}
            bottomText={memeState.bottomText}
            textColor={memeState.textColor}
            fontSize={memeState.fontSize}
            textStroke={memeState.textStroke}
          />
          <button 
            onClick={handleDownload}
            disabled={!memeState.image}
            className={styles.downloadButton}
          >
            Download Meme
          </button>
        </div>

        {/* Right side - Controls */}
        <div className={styles.controlsContainer}>
          <ImageUploader 
            setImage={(image: HTMLImageElement) => updateMemeState({ image })} 
          />
          
          <TextControls 
            memeState={memeState}
            updateMemeState={updateMemeState}
          />
        </div>
      </div>
    </div>
  );
}

