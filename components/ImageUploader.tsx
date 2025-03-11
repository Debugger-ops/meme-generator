"use client";
import { useState, useRef } from 'react';
import styles from './styles/ImageUploader.module.css';

interface ImageUploaderProps {
  setImage: (image: HTMLImageElement) => void;
}

export default function ImageUploader({ setImage }: ImageUploaderProps) {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File): void => {
    if (file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          const img = new Image();
          img.onload = () => setImage(img);
          img.src = result;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onButtonClick = (): void => {
    inputRef.current?.click();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Upload Image</h2>
      
      <div 
        onDragEnter={handleDrag}
        className={`${styles.dropzone} ${dragActive ? styles.active : ""}`}
      >
        <div className={styles.dropzoneContent}>
          <p className={styles.dropzoneText}>
            <span className={styles.emphasis}>Click to upload</span> or drag and drop
          </p>
          <p className={styles.dropzoneHint}>
            PNG, JPG or GIF files
          </p>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className={styles.fileInput}
        />
        {dragActive && 
          <div
            className={styles.dragOverlay} 
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        }
      </div>
      
      <button
        type="button"
        onClick={onButtonClick}
        className={styles.uploadButton}
      >
        Choose Image
      </button>
    </div>
  );
}

