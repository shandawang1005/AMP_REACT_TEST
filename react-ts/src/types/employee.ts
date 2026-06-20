export interface Employee {
  id: number;
  name: string;
  role: string;
  level: string;
  score: number;
  active: boolean;
}

export type EmployeeId = Employee["id"];
