# React TS Interview

TypeScript exercise with the same dashboard UI as the JS version. The focus is on **using types correctly**, not on project setup.

## Run

```bash
npm install
npm run dev
```

## What This Tests

- Defining and reusing `interface` / `type`
- Typing `useState`, handlers, and derived data
- Using union types such as `SortBy`
- Deriving utility types such as `EmployeeId = Employee["id"]`
- Reusing prop types when extracting components (`EmployeeCardProps`)

## Provided Types

```text
src/types/employee.ts   # Employee interface + EmployeeId type
src/types/dashboard.ts  # SortBy union — candidates add EmployeeCardProps here
src/data.ts             # initialEmployees typed as Employee[]
```

## What Candidates Build

All logic in `src/App.tsx`:

- Import and reuse `Employee`, `EmployeeId`, and `SortBy`
- Type every piece of state and every handler
- Replace the static card with a typed `.map`
- Extract `EmployeeCard` and define `EmployeeCardProps` in `types/dashboard.ts`

Do not use `any`. Reuse existing types instead of redefining shapes inline.

## Project Structure

```text
src/
  types/
    employee.ts
    dashboard.ts
  data.ts
  content.ts
  styles.css
  App.tsx
  App.solution.tsx
  components/EmployeeCard.solution.tsx
```

## Preview The Reference Solution

Temporarily change `src/main.tsx`:

```tsx
import App from "./App.solution.tsx";
import "./styles.solution.css";
```
