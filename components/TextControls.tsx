"use client";
import { MemeState } from '../types';
import styles from './styles/TextControls.module.css';

interface TextControlsProps {
  memeState: MemeState;
  updateMemeState: (newState: Partial<MemeState>) => void;
}

export default function TextControls({ memeState, updateMemeState }: TextControlsProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Text Settings</h2>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Top Text
        </label>
        <input
          type="text"
          value={memeState.topText}
          onChange={(e) => updateMemeState({ topText: e.target.value })}
          className={styles.textInput}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Bottom Text
        </label>
        <input
          type="text"
          value={memeState.bottomText}
          onChange={(e) => updateMemeState({ bottomText: e.target.value })}
          className={styles.textInput}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Font Size: {memeState.fontSize}px
        </label>
        <input
          type="range"
          min="20"
          max="80"
          value={memeState.fontSize}
          onChange={(e) => updateMemeState({ fontSize: parseInt(e.target.value) })}
          className={styles.rangeInput}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Text Color
        </label>
        <input
          type="color"
          value={memeState.textColor}
          onChange={(e) => updateMemeState({ textColor: e.target.value })}
          className={styles.colorInput}
        />
      </div>
      
      <div className={styles.checkboxGroup}>
        <input
          type="checkbox"
          id="textStroke"
          checked={memeState.textStroke}
          onChange={(e) => updateMemeState({ textStroke: e.target.checked })}
          className={styles.checkbox}
        />
        <label htmlFor="textStroke" className={styles.checkboxLabel}>
          Add text outline
        </label>
      </div>
    </div>
  );
}
