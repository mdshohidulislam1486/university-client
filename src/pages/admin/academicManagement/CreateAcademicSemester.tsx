import { FieldValues, SubmitHandler } from 'react-hook-form';

import { Button, Col, Flex } from 'antd';
import PHSelect from '../../../components/form/PHSelect';

import { toast } from 'sonner';
import { useAddAcademicSemesterMutation } from '../../../redux/features/admin/AcademicManagement.api';
import { nameOptions } from '../../../components/constants/semester';
import { academicSemesterSchema } from '../../../schemas/academicManagemetnSchema';
import { monthOptions } from '../../../components/constants/global';
import { TResponse } from '../../../types/global';
import PHForm from '../../../components/form/PHForm';
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';
import { TAcademiFaculty } from '../../../types/academicManagement.type';

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Creating...');

    const name = nameOptions[Number(data?.name) - 1]?.label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log({ semesterData });

    try {
      const res = (await addAcademicSemester(
        semesterData
      )) as TResponse<TAcademiFaculty>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success('Semester created', { id: toastId });
      }
    } catch (err) {
      toast.error('Something went wrong', { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect label="Name" name="name" options={nameOptions} />
          <PHSelect label="Year" name="year" options={yearOptions} />
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <PHSelect label="End Month" name="endMonth" options={monthOptions} />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
