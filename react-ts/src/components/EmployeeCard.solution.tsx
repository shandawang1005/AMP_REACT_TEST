import type { Employee, EmployeeId } from "../types/employee";

export interface EmployeeCardProps {
  employee: Employee;
  isSelected: boolean;
  onSelect: (employee: Employee) => void;
  onToggleActive: (employeeId: EmployeeId) => void;
}

export function EmployeeCard({
  employee,
  isSelected,
  onSelect,
  onToggleActive,
}: EmployeeCardProps) {
  return (
    <li className={isSelected ? "employee-card selected" : "employee-card"}>
      <button className="employee-main" type="button" onClick={() => onSelect(employee)}>
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
        type="button"
        onClick={() => onToggleActive(employee.id)}
      >
        {employee.active ? "Active" : "Inactive"}
      </button>
    </li>
  );
}
