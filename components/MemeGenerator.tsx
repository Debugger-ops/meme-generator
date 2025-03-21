"use client";
import { useState } from 'react';
import MemeCanvas from './MemeCanvas';
import TextControls from './TextControls';
import ImageUploader from './ImageUploader';
import AdvancedControls from './AdvancedControls';
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
    fontFamily: 'Arial', // New: Font family
    textAlign: 'center', // New: Text alignment
    textOpacity: 1, // New: Text opacity (0 to 1)
    textRotation: 0, // New: Text rotation in degrees
    textPadding: 10, // New: Text padding in pixels
    textBackgroundColor: 'transparent', // New: Background color for text
    textBorder: false, // New: Toggle for text border
    borderColor: '#000000', // New: Border color
    borderThickness: 2, // New: Border thickness in pixels
    textShadow: false, // New: Toggle for text shadow
    shadowColor: '#000000', // New: Shadow color
    shadowBlur: 5, // New: Shadow blur radius
    shadowOffsetX: 2, // New: Shadow horizontal offset
    shadowOffsetY: 2, // New: Shadow vertical offset
    crop: {
      x: 0, // New: Crop X coordinate
      y: 0, // New: Crop Y coordinate
      width: 100, // New: Crop width
      height: 100, // New: Crop height
    },
    erase: {
      x: 0, // New: Erase X coordinate
      y: 0, // New: Erase Y coordinate
      radius: 10, // New: Erase radius
    },
    filters: {
      grayscale: 0, // New: Grayscale filter (0 to 100)
      sepia: 0, // New: Sepia filter (0 to 100)
      brightness: 100, // New: Brightness filter (0 to 200)
      contrast: 100, // New: Contrast filter (0 to 200)
    },
    history: [], // New: Undo/Redo history
    currentHistoryIndex: 0, // New: Current position in history
    flipHorizontal: false, // New: Flip image horizontally
    flipVertical: false, // New: Flip image vertically
  
  });

  // Function to update meme state
  const updateMemeState = (newState: Partial<MemeState> | ((prevState: MemeState) => Partial<MemeState>)) => {
    setMemeState((prevState) => ({
      ...prevState,
      ...(typeof newState === "function" ? newState(prevState) : newState),
    }));
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
    fontFamily: 'Arial', // New: Font family
    textAlign: 'center', // New: Text alignment
    textOpacity: 1, // New: Text opacity (0 to 1)
    textRotation: 0, // New: Text rotation in degrees
    textPadding: 10, // New: Text padding in pixels
    textBackgroundColor: 'transparent', // New: Background color for text
    textBorder: false, // New: Toggle for text border
    borderColor: '#000000', // New: Border color
    borderThickness: 2, // New: Border thickness in pixels
    textShadow: false, // New: Toggle for text shadow
    shadowColor: '#000000', // New: Shadow color
    shadowBlur: 5, // New: Shadow blur radius
    shadowOffsetX: 2, // New: Shadow horizontal offset
    shadowOffsetY: 2, // New: Shadow vertical offset
    crop: {
      x: 0, // New: Crop X coordinate
      y: 0,// New: Crop Y coordinate
      width: 100, // New: Crop width
      height: 100, // New: Crop height
    },
    erase: {
      x: 0, // New: Erase X coordinate
      y: 0, // New: Erase Y coordinate
      radius: 10, // New: Erase radius
    },
    filters: {
      grayscale: 0, // New: Grayscale filter (0 to 100)
      sepia: 0, // New: Sepia filter (0 to 100)
      brightness: 0, // New: Brightness filter (0 to 200)
      contrast: 0, // New: Contrast filter (0 to 200)
    },
    history: [], // New: Undo/Redo history
    currentHistoryIndex: 0, // New: Current position in history
    flipHorizontal: false, // New: Flip image horizontally
    flipVertical: false // New: Flip image vertically
      
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
          <AdvancedControls memeState={memeState} updateMemeState={updateMemeState} />
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
