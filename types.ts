
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  status?: string;
  location?: string;
  categoryIcon: string;
  link: string;
  fullWidth?: boolean;
}

export interface TransparencyReport {
  year: number;
  label: string;
  fileUrl: string;
}

export interface ClassSchedule {
  day: string;
  time: string;
  level: string;
}
