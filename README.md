# ðŸŽ¨ Random Color Generator

A tiny, fun **random color generator** built with **vanilla HTML, CSS, and JavaScript**. Click the button, get a random hex color, watch the whole page transition to it â€” and the hex code is copied to your clipboard automatically.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ðŸ“Œ Project Type

| | |
|---|---|
| **Category** | Frontend utility / Mini web app |
| **Type** | Static single-page app, no routing |
| **Purpose** | Generate a random hex color and preview it live |
| **Dependencies** | None |
| **Build Tools** | None â€” runs directly in the browser |

---

## ðŸ›  Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (Flexbox, transitions, gradients, media queries) |
| Logic | Vanilla JavaScript (ES6+, arrow functions) |
| API | Browser **Clipboard API** (`navigator.clipboard`) |
| Fonts | Google Fonts â€” Roboto |
| Hosting | Any static host (GitHub Pages, Netlify, Vercel) |

---

## âœ¨ Features

- ðŸŽ² **Random hex color** generated on every click
- ðŸ–Œï¸ **Live page preview** â€” the entire background smoothly transitions to the new color
- ðŸ“‹ **Auto-copy** â€” hex code is copied to the clipboard instantly
- ðŸ” Generates a color automatically on page load
- ðŸŒˆ **Glassmorphism-style card** with gradient, glow, and hover animation
- ðŸ“± **Fully responsive** â€” tuned for desktop, tablet, and small phones (320px+)

---

## âš™ï¸ How It Works

```js
const randomNumber = Math.floor(Math.random() * 16777215); // 0 â€“ 0xFFFFFF
const randomCode  = "#" + randomNumber.toString(16);       // number â†’ hex
body.style.backgroundColor = randomCode;                   // live preview
navigator.clipboard.writeText(randomCode);                 // auto copy
```

1. A random integer is generated between `0` and `16,777,215` (the full 24-bit RGB range).
2. That number is converted to a hexadecimal string and prefixed with `#`.
3. The color is applied to the page background and displayed as text.
4. The hex code is written to the clipboard.

> **Note:** Because `toString(16)` is not zero-padded, very dark colors can occasionally produce a shorter code (e.g. `#abc`). Zero-padding with `.padStart(6, "0")` would make every output a strict 6-digit hex â€” a nice small improvement.

---

## ðŸ“ Project Structure

```
RandomColorGenerator/
â”œâ”€â”€ index.html        # UI markup
â”œâ”€â”€ css/
â”‚   â””â”€â”€ custom.css    # Card styling, transitions, responsive rules
â””â”€â”€ js/
    â””â”€â”€ app.js        # Random color logic + clipboard copy
```

---

## ðŸš€ Getting Started

No installation required.

```bash
git clone https://github.com/faisalrlakhany/RandomColorGenerator.git
cd RandomColorGenerator
```

Then open `index.html` in your browser, or run it with VS Code **Live Server**.

> Clipboard API works on `https://` or `localhost`. Opening the file directly (`file://`) may block auto-copy in some browsers.

---

## ðŸ§  Concepts Practiced

- `Math.random()` and number-to-hex conversion
- DOM selection and dynamic styling (`element.style`)
- CSS transitions for smooth color changes
- Clipboard API integration
- Responsive design with breakpoints

---

## ðŸ‘¨â€ðŸ’» Author

**Muhammad Faisal Lakhany**
GitHub: [@faisalrlakhany](https://github.com/faisalrlakhany)
