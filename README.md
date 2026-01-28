# Management-Calendar

A minimalist, high-performance daily planner for modern productivity. Designed with a sleek black-and-white aesthetic, vCalendar helps you manage your 24-hour day with simple, persistent time blocks.

![vCalendar Preview](assets/images/vCalendarHomePage.png)

## Highlights

- Minimal, distraction-free UI
- Hourly blocks with past/present/future color-coding
- Local persistence using browser `localStorage`
- Mobile-friendly responsive layout

## Getting started

1. Clone or download this repository.
2. Open `index.html` in any modern web browser to run the app locally.

Alternatively, serve the folder with a simple static server (useful for some browsers that restrict localStorage or module usage when opened via `file://`):

   ```powershell
   # From the project root (Windows PowerShell)
   python -m http.server 8000; Start-Process "http://localhost:8000"
   ```

## How to use

- The current date appears at the top of the page.
- Click into any time block's description field to add or edit a task.
- Click the save icon next to a time block to persist that entry for the displayed date.
- The planner automatically styles time blocks as past, present, or future based on the current hour.

## Files of interest

- `index.html` — app entry point and layout
- `assets/css/style.css` — styles and theme
- `assets/js/script.js` — core behavior (time tracking, save/load)

## Development

- This is a static, client-side project. No build step required.
- If you'd like to extend the project, open `assets/js/script.js` and `assets/css/style.css`.

## Contributing

Contributions are welcome — open an issue or submit a pull request. If you want me to add tests, CI, or a live demo (GitHub Pages), tell me and I can set that up.

## License

This repository is licensed under the MIT License. See `LICENSE` for details.
