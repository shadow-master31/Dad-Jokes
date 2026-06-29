# Dad Jokes 🥁
 
A minimal web app that fetches random dad jokes from a public API and displays them in a clean, dark-themed feed.
 
## Live demo
 
Open `index.html` in your browser — no build step needed.
 
## Features
 
- Fetches jokes from [icanhazdadjoke.com](https://icanhazdadjoke.com)
- Jokes stack in a live feed with numbered badges
- Loading state on the button prevents double-clicks
- Clear all jokes with one click
- Smooth slide-in animation per joke
- Responsive layout — works on mobile
## Project structure
 
```
dadjokes/
├── index.html       # Markup
├── stylesheet.css   # Styles
└── script.js        # Logic
```
 
## How it works
 
1. Clicking **Add a joke** fires an async `fetch` via Axios to `https://icanhazdadjoke.com/` with the `Accept: application/json` header.
2. The returned joke string is appended as a new `<li>` inside `#jokes`.
3. A counter tracks how many jokes have been added and labels each one.
## Running locally
 
No server required — just open the file:
 
```bash
# macOS
open index.html
 
# Linux
xdg-open index.html
 
# Windows
start index.html
```
 
Or serve it with any static server:
 
```bash
npx serve .
# or
python3 -m http.server
```
 
## Dependencies
 
| Package | Version | Purpose         |
|---------|---------|-----------------|
| [Axios](https://axios-http.com) | 1.13.2 | HTTP requests |
| [Syne](https://fonts.google.com/specimen/Syne) | — | Display font |
| [Inter](https://fonts.google.com/specimen/Inter) | — | Body font |
 
Both fonts load from Google Fonts. Axios loads from jsDelivr CDN. No `npm install` needed.
 
## API
 
This project uses the free [icanhazdadjoke.com](https://icanhazdadjoke.com) API.
 
- **Endpoint:** `GET https://icanhazdadjoke.com/`
- **Required header:** `Accept: application/json`
- **Response field used:** `data.joke` (string)
- No API key required. Rate limits apply for heavy use — see their docs.
## Known issues / potential improvements
 
- [ ] Add a duplicate-check so the same joke doesn't appear twice
- [ ] Persist jokes to `localStorage` so they survive a page refresh
- [ ] Add a copy-to-clipboard button on each joke card
- [ ] Offline fallback with a bundled joke list
## License
 
MIT — do whatever you want with it.
 
