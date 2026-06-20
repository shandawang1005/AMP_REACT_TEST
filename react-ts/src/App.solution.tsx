// Interviewer reference only.
// Preview with: import App from "./App.solution.tsx" in main.tsx
import { useEffect, useMemo, useState } from "react";
import { EmployeeCard } from "./components/EmployeeCard.solution";
import { heroContent } from "./content";
import { initialEmployees } from "./data";
import type { SortBy } from "./types/dashboard";
import type { Employee, EmployeeId } from "./types/employee";

function App() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<EmployeeId | null>(null);
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState<SortBy>("score");
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const [lastAction, setLastAction] = useState("No action yet");

  const visibleEmployees = useMemo(() => {
    return [...employees]
      .filter((employee) => {
        const matchesActiveFilter = !showActiveOnly || employee.active;
        const matchesSearch = employee.name
          .toLowerCase()
          .includes(searchText.toLowerCase());

        return matchesActiveFilter && matchesSearch;
      })
      .sort((employeeA, employeeB) => {
        if (sortBy === "name") {
          return employeeA.name.localeCompare(employeeB.name);
        }

        return employeeB.score - employeeA.score;
      });
  }, [employees, searchText, showActiveOnly, sortBy]);

  const selectedEmployee = employees.find(
    (employee) => employee.id === selectedEmployeeId,
  );

  useEffect(() => {
    setLastAction(`Showing ${visibleEmployees.length} employee(s)`);
  }, [visibleEmployees.length]);

  function handleToggleActive(employeeId: EmployeeId): void {
    setEmployees((currentEmployees) =>
      currentEmployees.map((employee) =>
        employee.id === employeeId
          ? { ...employee, active: !employee.active }
          : employee,
      ),
    );
  }

  function handleSelectEmployee(employee: Employee): void {
    setSelectedEmployeeId(employee.id);
    setLastAction(`Selected ${employee.name}`);
  }

  function handleReset(): void {
    setEmployees(initialEmployees);
    setSelectedEmployeeId(null);
    setSearchText("");
    setSortBy("score");
    setShowActiveOnly(false);
    setLastAction("Reset all filters and employees");
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
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Try Ava or Sofia"
            />
          </label>

          <label>
            Sort employees
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as SortBy)}
            >
              <option value="score">Highest score</option>
              <option value="name">Name A-Z</option>
            </select>
          </label>

          <label className="checkbox">
            <input
              type="checkbox"
              checked={showActiveOnly}
              onChange={(event) => setShowActiveOnly(event.target.checked)}
            />
            Active only
          </label>

          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>

        <div className="status-bar">
          <span>{lastAction}</span>
          <strong>Total active: {employees.filter((employee) => employee.active).length}</strong>
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
                <EmployeeCard
                  key={employee.id}
                  employee={employee}
                  isSelected={employee.id === selectedEmployeeId}
                  onSelect={handleSelectEmployee}
                  onToggleActive={handleToggleActive}
                />
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
    </main>
  );
}

export default App;
