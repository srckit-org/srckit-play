# srckit-play

<p align="center">
  <strong>Interactive JavaScript and HTML playgrounds with live preview.</strong>
</p>

<p align="center">
  <a href="https://play.srckit.org">Live Demo</a> ·
  <a href="https://github.com/srckit-org/srckit">SrKit Suite</a> ·
  <a href="https://github.com/srckit-org/srckit-play/issues">Report Bug</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/react-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/MUI-9-007FFF?style=flat-square&logo=mui&logoColor=white" alt="MUI 9" />
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind 4" />
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 6" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/github/license/srckit-org/srckit-play?style=flat-square" alt="License" />
</p>

---

## Overview

srckit-play provides interactive playgrounds for JavaScript and HTML. Write code, see results instantly, and experiment with web technologies — all in your browser.

## Features

### JavaScript Playground
- **Write & run** — execute JavaScript code
- **Console output** — see `console.log()` results
- **Quick testing** — try code snippets instantly

### HTML Playground
- **Live preview** — see rendered HTML in real-time
- **iframe sandbox** — isolated rendering environment
- **Instant feedback** — changes appear as you type

## Getting Started

```bash
git clone https://github.com/srckit-org/srckit-play.git
cd srckit-play
npm install
npm run dev
```

## Example JavaScript

```javascript
// Array methods
const nums = [1, 2, 3, 4, 5];
console.log(nums.filter(n => n % 2 === 0));
console.log(nums.map(n => n * 2));

// Object destructuring
const { name, age } = { name: "Alice", age: 30 };
console.log(`${name} is ${age}`);
```

## Example HTML

```html
<h1 style="color: #63b3ed">Hello World</h1>
<p style="font-family: sans-serif">
  This is a live preview.
</p>
<button onclick="alert('Clicked!')">Click Me</button>
```

## License

MIT © [srckit-org](https://github.com/srckit-org)
