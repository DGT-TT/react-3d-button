# Examples

This directory contains usage examples for the React 3D Button component.

## Files

- **BasicExample.tsx** - Demonstrates all button types, sizes, and features
- **NextJSExample.tsx** - Shows how to use with Next.js App Router with state management
- **CustomTheme.css** - Example of creating a custom theme

## Running Examples

These examples are meant to be used as reference. To test them in your own project:

1. Install the package:
```bash
npm install react-3d-button
```

2. Copy the example code into your React or Next.js project

3. Import the necessary styles:
```tsx
import 'react-3d-button/styles';
// Optionally import a theme
import 'react-3d-button/themes/ocean.css';
```

## Create a Test App

### For React (Vite)

```bash
npm create vite@latest test-buttons -- --template react-ts
cd test-buttons
npm install
npm install react-3d-button
# Copy BasicExample.tsx to src/App.tsx
npm run dev
```

### For Next.js

```bash
npx create-next-app@latest test-buttons
cd test-buttons
npm install react-3d-button
# Copy NextJSExample.tsx to app/page.tsx
npm run dev
```
