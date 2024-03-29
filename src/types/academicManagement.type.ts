export type TAcademicSemester = {
  name: string;
  year: string;
  code: string;
  startMonth: string;
  endMonth: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TAcademiFaculty = {
  name: string;
  _id: string;
};
export type TAcademiDepartment = {
  name: string;
  _id: string;
  academicFaculty: { name: string };
};
