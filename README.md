# MemeForge

MemeForge is a web application that allows users to create custom memes by uploading images and adding text with various styling options.

## Features

- Upload custom images for meme creation
- Add multiple text elements to your meme
- Customize text with different fonts, sizes, colors, and positions
- Download your created memes as image files
- Responsive design for desktop and mobile devices

## Project Structure

```
memeforge/
├── app/
│   ├── page.tsx           # Main page component
│   ├── layout.tsx         # App layout with metadata
│   ├── globals.css        # Global CSS styles
│   └── page.module.css    # Page-specific styles
├── components/
│   ├── MemeGenerator.tsx  # Main component that coordinates the meme creation
│   ├── MemeCanvas.tsx     # Canvas where the meme is displayed and edited
│   ├── TextControls.tsx   # Controls for adding/editing text on memes
│   ├── ImageUploader.tsx  # Component for uploading and selecting images
│   └── styles/
│       ├── MemeGenerator.module.css
│       ├── MemeCanvas.module.css
│       ├── TextControls.module.css
│       └── ImageUploader.module.css
└── types.ts               # TypeScript type definitions
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/memeforge.git
   cd memeforge
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## How to Use

1. **Upload an Image**
   - Click the "Upload Image" button to select an image from your device
   - Alternatively, use one of the provided template images

2. **Add Text**
   - Click the "Add Text" button to create a new text element
   - Type your text in the input field
   - Use the text controls to adjust font, size, color, and position

3. **Customize Your Meme**
   - Drag text elements to position them
   - Adjust text properties using the control panel
   - Preview your meme in real-time

4. **Download Your Meme**
   - Click the "Download" button to save your meme as a PNG image

## Technologies Used

- React with Next.js framework
- TypeScript for type safety
- CSS Modules for component styling
- HTML5 Canvas for meme rendering
- File API for image handling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to all the contributors who have helped improve MemeForge
- Inspired by popular meme generators and image editing tools
