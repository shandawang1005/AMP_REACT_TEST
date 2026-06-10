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

1. Add a button to sort score from low to high.
2. Add a new employee form with controlled inputs.
3. Show average score and update it when employees change.
4. Move the employee card into a reusable component.
5. Fetch employees from a fake async function inside `useEffect`.

## Project Structure

```text
src/
  data.js           # initialEmployees — import this in App.jsx
  content.js        # static hero text and interview task list
  styles.css        # provided CSS — use these class names in your JSX
  App.jsx           # candidate starter (implement state + UI here)
  App.solution.jsx  # reference solution for interviewers only
```

## Files To Edit During Interview

Candidates should work in:

```text
src/App.jsx
```

They may reference `src/styles.css` for class names. Do not edit `data.js` unless the task requires it.