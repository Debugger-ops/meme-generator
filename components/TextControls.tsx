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

      {/* Existing Controls */}
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Top Text
        </label>
        <input
          type="text"
          placeholder="TOP TEXT"
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
          placeholder="BOTTOM TEXT"
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

      {/* New Controls for Advanced Text Customization */}

      {/* Font Family Selector */}
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Font Family
        </label>
        <select
          value={memeState.fontFamily}
          onChange={(e) => updateMemeState({ fontFamily: e.target.value })}
          className={styles.selectInput}
        >
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>

      {/* Text Alignment Selector */}
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Text Alignment
        </label>
        <select
          value={memeState.textAlign}
          onChange={(e) => updateMemeState({ textAlign: e.target.value as 'left' | 'center' | 'right' })}
          className={styles.selectInput}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>

      {/* Text Opacity Slider */}
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Text Opacity: {memeState.textOpacity}
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={memeState.textOpacity}
          onChange={(e) => updateMemeState({ textOpacity: parseFloat(e.target.value) })}
          className={styles.rangeInput}
        />
      </div>

      {/* Text Rotation Slider */}
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Text Rotation: {memeState.textRotation}°
        </label>
        <input
          type="range"
          min="-180"
          max="180"
          value={memeState.textRotation}
          onChange={(e) => updateMemeState({ textRotation: parseInt(e.target.value) })}
          className={styles.rangeInput}
        />
      </div>

      {/* Text Shadow Customization */}
      <div className={styles.checkboxGroup}>
        <input
          type="checkbox"
          id="textShadow"
          checked={memeState.textShadow}
          onChange={(e) => updateMemeState({ textShadow: e.target.checked })}
          className={styles.checkbox}
        />
        <label htmlFor="textShadow" className={styles.checkboxLabel}>
          Add text shadow
        </label>
      </div>

      {memeState.textShadow && (
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Shadow Color
          </label>
          <input
            type="color"
            value={memeState.shadowColor}
            onChange={(e) => updateMemeState({ shadowColor: e.target.value })}
            className={styles.colorInput}
          />
        </div>
      )}

      {/* Text Background Color */}
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Text Background Color
        </label>
        <input
          type="color"
          value={memeState.textBackgroundColor}
          onChange={(e) => updateMemeState({ textBackgroundColor: e.target.value })}
          className={styles.colorInput}
        />
      </div>

      {/* Text Border Customization */}
      <div className={styles.checkboxGroup}>
        <input
          type="checkbox"
          id="textBorder"
          checked={memeState.textBorder}
          onChange={(e) => updateMemeState({ textBorder: e.target.checked })}
          className={styles.checkbox}
        />
        <label htmlFor="textBorder" className={styles.checkboxLabel}>
          Add text border
        </label>
      </div>

      {memeState.textBorder && (
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Border Color
          </label>
          <input
            type="color"
            value={memeState.borderColor}
            onChange={(e) => updateMemeState({ borderColor: e.target.value })}
            className={styles.colorInput}
          />
        </div>
      )}

      {memeState.textBorder && (
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Border Thickness: {memeState.borderThickness}px
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={memeState.borderThickness}
            onChange={(e) => updateMemeState({ borderThickness: parseInt(e.target.value) })}
            className={styles.rangeInput}
          />
        </div>
      )}
    </div>
  );
}
