# AMP React Interview Tests

Two independent interview exercises in this repo. Each folder has its own `package.json`, dependencies, and Vite config.

## Exercises

| Folder | Focus |
| --- | --- |
| [`react-js/`](./react-js/) | React fundamentals — state, effects, events, filtering, sorting |
| [`react-ts/`](./react-ts/) | TypeScript — interfaces, unions, reusing types, typed handlers and props |

## Run

Pick one exercise, then:

```bash
cd react-js   # or react-ts
npm install
npm run dev
```

## Repo Layout

```text
react-js/          # JavaScript exercise
  package.json
  src/
react-ts/          # TypeScript exercise
  package.json
  src/
  tsconfig.json
.gitignore           # shared ignore rules for both projects
```

Each exercise is fully standalone. Install dependencies separately inside each folder.

## Interviewer Notes

- Candidate starters: `App.jsx` / `App.tsx`
- Reference solutions: `App.solution.jsx` / `App.solution.tsx`
- Swap the import in `main.jsx` / `main.tsx` to preview a solution before the interview
