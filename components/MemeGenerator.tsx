"use client";
import { useState } from 'react';
import MemeCanvas from './MemeCanvas';
import TextControls from './TextControls';
import ImageUploader from './ImageUploader';
import { MemeState, MemeGeneratorState, MemeLayer, CreateLayer, FontFamily } from '../types';
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

  // Function to update meme state
  const updateMemeState = (newState: Partial<MemeState>): void => {
    setMemeState((prevState) => ({ ...prevState, ...newState }));
  };

  // Function to handle meme download
  const handleDownload = (): void => {
    const canvas = document.getElementById('meme-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const link = document.createElement('a');
    link.download = 'my-meme.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // Function to reset the meme to its initial state
  const handleReset = (): void => {
    setMemeState({
      image: null,
      topText: 'TOP TEXT',
      bottomText: 'BOTTOM TEXT',
      textColor: '#ffffff',
      fontSize: 40,
      textStroke: true,
    });
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
          
          {/* Download and Reset buttons */}
          <div className={styles.buttonGroup}>
            <button 
              onClick={handleDownload}
              disabled={!memeState.image}
              className={styles.downloadButton}
            >
              Download Meme
            </button>
            <button 
              onClick={handleReset}
              disabled={!memeState.image}
              className={styles.resetButton}
            >
              Reset Meme
            </button>
          </div>
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
