import { Button, Col, Flex } from 'antd';
import PHForm from '../../../components/form/PHForm';
import PHSelect from '../../../components/form/PHSelect';
import { toast } from 'sonner';
import { AcademicDepartmentOptions } from '../../../components/constants/semester';

import { FieldValues, SubmitHandler } from 'react-hook-form';
import {
  useAddAcademicDepartmentMutation,
  useGetAllAcademicFacultyQuery,
} from '../../../redux/features/admin/AcademicManagement.api';
import { TResponse } from '../../../types/global';
import { TAcademiFaculty } from '../../../types/academicManagement.type';
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';
import { academicDepartmentSchema } from '../../../schemas/academicManagemetnSchema';

const CreateAdepartment = () => {
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation(undefined);
  const { data: facultyData } = useGetAllAcademicFacultyQuery(undefined);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Creating...');
    const academicDepartmentData = {
      name: data.name,
      academicFaculty: data.academicFaculty,
    };
    console.log({ academicDepartmentData });
    try {
      const res = (await addAcademicDepartment(
        academicDepartmentData
      )) as TResponse<TAcademiFaculty>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success('Academic Department created', { id: toastId });
      }
    } catch (err) {
      toast.error('Something went wrong', { id: toastId });
    }
  };
  const facultyOptions = facultyData?.data?.map(({ _id, name }) => ({
    label: name,
    value: _id,
  }));

  if (!facultyOptions) return <p>Add Academic Faculty First</p>;

  console.log({ facultyOptions });
  return (
    <Flex justify="center" align="center">
      <Col span={12}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicDepartmentSchema)}
        >
          <PHSelect
            label="Name"
            name="name"
            options={AcademicDepartmentOptions}
          />
          <PHSelect
            label="Academic Faculty"
            name="academicFaculty"
            options={facultyOptions}
          />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAdepartment;
