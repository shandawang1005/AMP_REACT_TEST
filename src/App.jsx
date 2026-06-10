import { heroContent, interviewTasks } from "./content";
// TODO: import initialEmployees from "./data"
// TODO: import React hooks you need (useState, useEffect, useMemo, etc.)

function App() {
  // TODO: replace these placeholders with real state
  const searchText = "";
  const sortBy = "score";
  const showActiveOnly = false;
  const lastAction = "No action yet";
  const visibleEmployees = [];
  const selectedEmployee = null;
  const selectedEmployeeId = null;
  const activeCount = 0;

  function handleToggleActive(employeeId) {
    // TODO: toggle employee.active immutably
  }
  function handleSelectEmployee(employee) {
    // TODO: set selected employee and update lastAction
  }
  function handleReset() {
    // TODO: reset employees, filters, and lastAction
  }

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">{heroContent.eyebrow}</p>
        <h1>{heroContent.title}</h1>
        <p>{heroContent.description}</p>
      </section>

      <section className="panel">
        <div className="controls">
          <label>
            Search by name
            <input
              value={searchText}
              onChange={(event) => {
                // TODO: update searchText
              }}
              placeholder="Try any name"
            />
          </label>

          <label>
            Sort employees
            <select
              value={sortBy}
              onChange={(event) => {
                // TODO: update sortBy
              }}
            >
              <option value="score">Highest score</option>
              <option value="name">Name A-Z</option>
            </select>
          </label>

          <label className="checkbox">
            <input
              type="checkbox"
              checked={showActiveOnly}
              onChange={(event) => {
                // TODO: update showActiveOnly
              }}
            />
            Active only
          </label>

          <button onClick={handleReset}>Reset</button>
        </div>

        <div className="status-bar">
          <span>{lastAction}</span>
          <strong>Total active: {activeCount}</strong>
        </div>
      </section>

      <section className="layout">
        <div className="panel">
          <h2>Employees</h2>

          {visibleEmployees.length === 0 ? (
            <p className="empty">No employees match your filters.</p>
          ) : (
            <ul className="employee-list">
              {visibleEmployees.map((employee) => (
                <li
                  className={
                    employee.id === selectedEmployeeId
                      ? "employee-card selected"
                      : "employee-card"
                  }
                  key={employee.id}
                >
                  <button
                    className="employee-main"
                    onClick={() => handleSelectEmployee(employee)}
                  >
                    <span>
                      <strong>{employee.name}</strong>
                      <small>
                        {employee.role} / {employee.level}
                      </small>
                    </span>
                    <span className="score">{employee.score}</span>
                  </button>

                  <button
                    className={employee.active ? "pill active" : "pill"}
                    onClick={() => handleToggleActive(employee.id)}
                  >
                    {employee.active ? "Active" : "Inactive"}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <aside className="panel details">
          <h2>Selected Employee</h2>
          {selectedEmployee ? (
            <>
              <p className="selected-name">{selectedEmployee.name}</p>
              <p>Role: {selectedEmployee.role}</p>
              <p>Level: {selectedEmployee.level}</p>
              <p>Score: {selectedEmployee.score}</p>
              <p>Status: {selectedEmployee.active ? "Active" : "Inactive"}</p>
            </>
          ) : (
            <p className="empty">Click an employee to see details.</p>
          )}
        </aside>
      </section>

      <section className="panel prompt">
        <h2>Suggested Interview Tasks</h2>
        <ol>
          {interviewTasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}

export default App;
