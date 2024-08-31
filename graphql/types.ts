export interface Experience {
  id: number;
  title: string;
  startDate: string;
  endDate?: string;
  technologies?: string[];
}

export interface Project {
  id: number;
  name: string;
  link?: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
}
