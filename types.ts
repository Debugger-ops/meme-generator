// Existing MemeState interface
export interface MemeState {
  image: HTMLImageElement | null;
  topText: string;
  bottomText: string;
  textColor: string;
  fontSize: number;
  textStroke: boolean;
  fontFamily: string; // New: Font family for text
  textAlign: 'left' | 'center' | 'right'; // New: Text alignment
  textOpacity: number; // New: Text opacity (0 to 1)
  textRotation: number; // New: Text rotation in degrees
  textPadding: number; // New: Text padding in pixels
  textBackgroundColor: string; // New: Background color for text
  textBorder: boolean; // New: Toggle for text border
  borderColor: string; // New: Border color
  borderThickness: number; // New: Border thickness in pixels
  textShadow: boolean; // New: Toggle for text shadow
  shadowColor: string; // New: Shadow color
  shadowBlur: number; // New: Shadow blur radius
  shadowOffsetX: number; // New: Shadow horizontal offset
  shadowOffsetY: number; // New: Shadow vertical offset

}

// Extended MemeState with new features
export interface ExtendedMemeState extends MemeState {
  textOpacity: number; // New: Text opacity (0 to 1)
  textRotation: number; // New: Text rotation in degrees
  textPadding: number; // New: Text padding in pixels
  textBackgroundColor: string; // New: Background color for text
  textBorder: boolean; // New: Toggle for text border
  borderColor: string; // New: Border color
  borderThickness: number; // New: Border thickness in pixels
  textShadow: boolean; // New: Toggle for text shadow
  shadowColor: string; // New: Shadow color
  shadowBlur: number; // New: Shadow blur radius
  shadowOffsetX: number; // New: Shadow horizontal offset
  shadowOffsetY: number; // New: Shadow vertical offset
  crop: {
    x: number; // New: Crop X coordinate
    y: number; // New: Crop Y coordinate
    width: number; // New: Crop width
    height: number; // New: Crop height
  };
  erase: {
    x: number; // New: Erase X coordinate
    y: number; // New: Erase Y coordinate
    radius: number; // New: Erase radius
  };
  filters: {
    grayscale: number; // New: Grayscale filter (0 to 100)
    sepia: number; // New: Sepia filter (0 to 100)
    brightness: number; // New: Brightness filter (0 to 200)
    contrast: number; // New: Contrast filter (0 to 200)
  };
  flipHorizontal: boolean; // New: Flip image horizontally
  flipVertical: boolean; // New: Flip image vertically
  history: MemeState[]; // New: Undo/Redo history
  currentHistoryIndex: number; // New: Current position in history
}

// Existing TextProperties interface
export interface TextProperties {
  text: string;
  fontSize: number;
  fontFamily: string;
  color: string;
  x: number;
  y: number;
}

// Extended TextProperties with new features
export interface ExtendedTextProperties extends TextProperties {
  opacity: number; // New: Text opacity (0 to 1)
  rotation: number; // New: Text rotation in degrees
  padding: number; // New: Text padding in pixels
  backgroundColor: string; // New: Background color for text
  border: {
    enabled: boolean; // New: Toggle for text border
    color: string; // New: Border color
    thickness: number; // New: Border thickness in pixels
  };
  shadow: {
    enabled: boolean; // New: Toggle for text shadow
    color: string; // New: Shadow color
    blur: number; // New: Shadow blur radius
    offsetX: number; // New: Shadow horizontal offset
    offsetY: number; // New: Shadow vertical offset
  };
}

// Existing MemeLayer interface
export interface MemeLayer {
  id: string;
  type: 'text' | 'image';
  properties: TextProperties | ImageProperties;
}

// Extended MemeLayer with new features
export interface ExtendedMemeLayer extends MemeLayer {
  properties: ExtendedTextProperties | ExtendedImageProperties;
}

// Existing ImageProperties interface
export interface ImageProperties {
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

// Extended ImageProperties with new features
export interface ExtendedImageProperties extends ImageProperties {
  filters: {
    grayscale: number; // New: Grayscale filter (0 to 100)
    sepia: number; // New: Sepia filter (0 to 100)
    brightness: number; // New: Brightness filter (0 to 200)
    contrast: number; // New: Contrast filter (0 to 200)
  };
  crop: {
    x: number; // New: Crop X coordinate
    y: number; // New: Crop Y coordinate
    width: number; // New: Crop width
    height: number; // New: Crop height
  };
  erase: {
    x: number; // New: Erase X coordinate
    y: number; // New: Erase Y coordinate
    radius: number; // New: Erase radius
  };
  flipHorizontal: boolean; // New: Flip image horizontally
  flipVertical: boolean; // New: Flip image vertically
}

// Existing MemeGeneratorState interface
export interface MemeGeneratorState {
  backgroundImage: string | null;
  layers: MemeLayer[];
  selectedLayerId: string | null;
}

// Extended MemeGeneratorState with new features
export interface ExtendedMemeGeneratorState extends MemeGeneratorState {
  layers: ExtendedMemeLayer[]; // New: Layers with extended properties
  history: MemeGeneratorState[]; // New: Undo/Redo history
  currentHistoryIndex: number; // New: Current position in history
}

// Existing MemeCanvasProps interface
export interface MemeCanvasProps {
  backgroundImage: string | null;
  layers: MemeLayer[];
  onLayerSelect: (id: string) => void;
}

// Extended MemeCanvasProps with new features
export interface ExtendedMemeCanvasProps extends MemeCanvasProps {
  layers: ExtendedMemeLayer[]; // New: Layers with extended properties
}

// Existing TextControlsProps interface
// Original TextControlsProps
export interface TextControlsProps {
  selectedLayer: MemeLayer | null;
  onTextChange: (properties: TextProperties) => void;
}

// Extended TextControlsProps with function overloading
export interface ExtendedTextControlsProps extends TextControlsProps {
  selectedLayer: ExtendedMemeLayer | null;
  onTextChange: {
    (properties: TextProperties): void; // Original signature
    (properties: ExtendedTextProperties): void; // Extended signature
  };
}

// Existing ImageUploaderProps interface
export interface ImageUploaderProps {
  onImageUpload: (image: File) => void;
}

// Enum for different font families
export enum FontFamily {
  Arial = 'Arial',
  Verdana = 'Verdana',
  Helvetica = 'Helvetica',
  Tahoma = 'Tahoma',
  TrebuchetMS = 'Trebuchet MS',
  TimesNewRoman = 'Times New Roman',
  Georgia = 'Georgia',
  Garamond = 'Garamond',
  CourierNew = 'Courier New',
  BrushScriptMT = 'Brush Script MT',
}

// Utility type for creating a new layer
export type CreateLayer = (type: 'text' | 'image', initialProperties: TextProperties | ImageProperties) => MemeLayer;

// Extended utility type for creating a new layer with extended properties
export type CreateExtendedLayer = (
  type: 'text' | 'image',
  initialProperties: ExtendedTextProperties | ExtendedImageProperties
) => ExtendedMemeLayer;
