"use client";
import { MemeState } from "../types";
import styles from "./styles/AdvancedControls.module.css";

interface AdvancedControlsProps {
  memeState: MemeState;
  updateMemeState: (newState: Partial<MemeState> | ((prevState: MemeState) => Partial<MemeState>)) => void;
}

export default function AdvancedControls({ memeState, updateMemeState }: AdvancedControlsProps) {
  // Helper function to update nested state safely
  const updateNestedState = <T extends keyof MemeState>(
    key: T,
    nestedKey: keyof MemeState[T],
    value: number
  ): void => {
    updateMemeState((prevState) => ({
      ...prevState,
      [key]: {
        ...(prevState[key] as Record<string, any>),
        [nestedKey]: value,
      },
    }));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Advanced Settings</h2>

      {/* Crop Tool */}
      <div className={styles.formGroup}>
        <label className={styles.label}>Crop Image</label>
        <div className={styles.cropControls}>
          {(["x", "y", "width", "height"] as Array<keyof MemeState["crop"]>).map((key) => (
            <input
              key={key}
              type="number"
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              onChange={(e) => updateNestedState("crop", key, Number(e.target.value) || 0)}
              className={styles.numberInput}
            />
          ))}
        </div>
      </div>

      {/* Erase Tool */}
      <div className={styles.formGroup}>
        <label className={styles.label}>Erase Tool</label>
        <div className={styles.eraseControls}>
          {(["x", "y", "radius"] as Array<keyof MemeState["erase"]>).map((key) => (
            <input
              key={key}
              type="number"
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              onChange={(e) => updateNestedState("erase", key, Number(e.target.value) || 0)}
              className={styles.numberInput}
            />
          ))}
        </div>
      </div>

      {/* Image Filters */}
      <div className={styles.formGroup}>
        <label className={styles.label}>Image Filters</label>
        <div className={styles.filterControls}>
          {(["grayscale", "sepia", "brightness", "contrast"] as Array<keyof MemeState["filters"]>).map((key) => (
            <input
              key={key}
              type="range"
              min="0"
              max={key === "brightness" || key === "contrast" ? "200" : "100"}
              onChange={(e) => updateNestedState("filters", key, Number(e.target.value) || 0)}
              className={styles.rangeInput}
            />
          ))}
        </div>
      </div>

      {/* Undo/Redo Buttons */}
      <div className={styles.buttonGroup}>
        <button
          onClick={() =>
            updateMemeState((prevState) => ({
              currentHistoryIndex: Math.max(0, prevState.currentHistoryIndex - 1),
            }))
          }
          disabled={memeState.currentHistoryIndex === 0}
          className={styles.button}
        >
          Undo
        </button>
        <button
          onClick={() =>
            updateMemeState((prevState) => ({
              currentHistoryIndex: Math.min(prevState.history.length - 1, prevState.currentHistoryIndex + 1),
            }))
          }
          disabled={memeState.currentHistoryIndex >= memeState.history.length - 1}
          className={styles.button}
        >
          Redo
        </button>
      </div>

      {/* Flip/Rotate Buttons */}
      <div className={styles.buttonGroup}>
        <button
          onClick={() => updateMemeState((prevState) => ({ flipHorizontal: !prevState.flipHorizontal }))}
          className={styles.button}
        >
          Flip Horizontal
        </button>
        <button
          onClick={() => updateMemeState((prevState) => ({ flipVertical: !prevState.flipVertical }))}
          className={styles.button}
        >
          Flip Vertical
        </button>
      </div>
    </div>
  );
}
