import { z } from 'zod';

export const academicSemesterSchema = z.object({
  name: z.string({ required_error: 'Name filed is Required' }),
  code: z.string({ required_error: 'Code filed is Required' }),
  year: z.string({ required_error: 'Year filed is Required' }),
  endMonth: z.string({ required_error: 'Start Month filed is Required' }),
  startMonth: z.string({ required_error: 'End Month filed is Required' }),
});

export const academicFacultySchema = z.object({
  name: z.string({ required_error: 'Name filed is Required' }),
});
