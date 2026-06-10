# AMP_REACT_TEST

Simple Vite + React interview practice project.

The app is intentionally small and uses plain JavaScript, so candidates can focus on React basics instead of project setup.

## Run

```bash
npm install
npm run dev
```

## What This Tests

- Rendering lists with `.map`
- Handling button clicks with `onClick`
- Managing form values with `useState`
- Filtering and sorting data
- Using `useEffect`
- Passing data into smaller components
- Updating array state immutably

## Suggested Interview Tasks

1. Import `initialEmployees` from `./data` and wire up all dashboard state.
2. Replace the static employee card with a filtered, sorted list from state.
3. Connect search, sort, checkbox, reset, and status bar to state.
4. Show selected employee details in the sidebar.
5. Add a button to sort score from low to high.
6. Add a new employee form with controlled inputs.
7. Show average score and update it when employees change.
8. Move the employee card into a reusable component.
9. Fetch employees from a fake async function inside `useEffect`.

## Project Structure

```text
src/
  data.js              # initialEmployees — candidates import this
  content.js           # hero copy only
  styles.css           # full layout CSS framework (panel, controls, employee-card, etc.)
  App.jsx              # layout skeleton with classNames — no state, handlers, or .map
  styles.solution.css  # same framework CSS (interviewer reference)
  App.solution.jsx     # complete working solution (interviewers only)
```

## What Candidates Get

- A finished **layout skeleton** in `App.jsx` showing where each CSS class goes
- A **static wireframe card** as the target structure for `.map`
- **Framework CSS** in `styles.css` — the finished UI should look like the reference when logic is wired up

## What Candidates Build

All React logic in `App.jsx`:

- Import `initialEmployees` from `./data`
- `useState`, `useMemo`, `useEffect`
- Controlled inputs and event handlers
- `.map` over employees with `employee-card`, `pill`, `selected`, etc.

Do not edit `data.js` unless the task requires it.

## Preview The Reference Solution

Temporarily change `src/main.jsx`:

```jsx
import App from "./App.solution.jsx";
import "./styles.solution.css";
```

Then switch back before handing the repo to a candidate.
