import React from 'react';
import { useGetAllSemesterQuery } from '../../../redux/features/academicSemester/academicSemesterApi';

const AcademicSemester = () => {
  const { data } = useGetAllSemesterQuery(undefined);
  console.log({ data });
  return <div>get the data of academi semeter</div>;
};

export default AcademicSemester;
