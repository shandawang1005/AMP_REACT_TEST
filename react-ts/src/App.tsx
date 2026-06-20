import { heroContent } from "./content";
// TODO: import initialEmployees from "./data"
// TODO: import useState, useEffect, useMemo from "react"
// TODO: import type { Employee, EmployeeId } from "./types/employee"
// TODO: import type { SortBy } from "./types/dashboard"

function App() {
  // TODO: type state — Employee[], EmployeeId | null, string, SortBy, boolean, string
  // TODO: derive visibleEmployees as Employee[]
  // TODO: derive selectedEmployee as Employee | undefined
  // TODO: type handlers — e.g. (employeeId: EmployeeId) => void, (employee: Employee) => void
  // TODO: reuse Employee / EmployeeId / SortBy instead of plain number or string where possible
  // TODO: when extracting EmployeeCard, define EmployeeCardProps in types/dashboard.ts and reuse it

  return (
    <main className="page">
      {/* Hero — static copy is provided; no changes needed here */}
      <section className="hero">
        <p className="eyebrow">{heroContent.eyebrow}</p>
        <h1>{heroContent.title}</h1>
        <p>{heroContent.description}</p>
      </section>

      {/* Controls — wire inputs to typed state and add onChange / onClick handlers */}
      <section className="panel">
        <div className="controls">
          {/* TODO: bind searchText with value + onChange */}
          <label>
            Search by name
            <input placeholder="Try Ava or Sofia" />
          </label>

          {/* TODO: bind sortBy as SortBy with value + onChange */}
          <label>
            Sort employees
            <select defaultValue="score">
              <option value="score">Highest score</option>
              <option value="name">Name A-Z</option>
            </select>
          </label>

          {/* TODO: bind showActiveOnly with checked + onChange */}
          <label className="checkbox">
            <input type="checkbox" />
            Active only
          </label>

          {/* TODO: call handleReset on click */}
          <button type="button">Reset</button>
        </div>

        {/* TODO: show lastAction and total active count from employees state */}
        <div className="status-bar">
          <span>No action yet</span>
          <strong>Total active: 0</strong>
        </div>
      </section>

      {/* Main layout — list on the left, selected employee details on the right */}
      <section className="layout">
        <div className="panel">
          <h2>Employees</h2>

          {/* TODO: if visibleEmployees is empty, show <p className="empty">No employees match your filters.</p> */}
          {/* TODO: replace the static card below with visibleEmployees.map(...) */}
          <ul className="employee-list">
            {/* Wireframe only — copy this structure for each Employee in your .map */}
            <li className="employee-card">
              {/* TODO: add "selected" class when employee.id === selectedEmployeeId */}
              {/* TODO: onClick selects the employee */}
              <button className="employee-main" type="button">
                <span>
                  <strong>Employee name</strong>
                  <small>Role / Level</small>
                </span>
                <span className="score">00</span>
              </button>

              {/* TODO: toggle active/inactive; use pill + active classes */}
              <button className="pill active" type="button">
                Active
              </button>
            </li>
          </ul>
        </div>

        {/* TODO: if selectedEmployee exists, show name, role, level, score, status */}
        {/* TODO: use selected-name for the name; otherwise keep the empty message */}
        <aside className="panel details">
          <h2>Selected Employee</h2>
          <p className="empty">Click an employee to see details.</p>
        </aside>
      </section>
    </main>
  );
}

export default App;
