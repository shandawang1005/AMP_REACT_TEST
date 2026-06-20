# React JS Interview

Plain JavaScript exercise focused on React state, effects, events, filtering, and sorting.

## Run

```bash
npm install
npm run dev
```

## What Candidates Build

All React logic in `src/App.jsx`:

- Import `initialEmployees` from `./data`
- `useState`, `useMemo`, `useEffect`
- Controlled inputs and event handlers
- `.map` over employees using the provided layout and CSS classes

## Project Structure

```text
src/
  data.js              # initialEmployees
  content.js           # hero copy
  styles.css           # layout CSS framework
  App.jsx              # starter skeleton with comment guides
  App.solution.jsx     # reference solution (interviewers only)
  styles.solution.css  # same CSS (interviewer reference)
```

## Preview The Reference Solution

Temporarily change `src/main.jsx`:

```jsx
import App from "./App.solution.jsx";
import "./styles.solution.css";
```
