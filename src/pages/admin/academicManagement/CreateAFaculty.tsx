import { Button, Col, Flex } from 'antd';
import React from 'react';
import PHForm from '../../../components/form/PHForm';
import PHSelect from '../../../components/form/PHSelect';
import { toast } from 'sonner';
import { AcademicFacultiesOptions } from '../../../components/constants/semester';

import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useAddAcademicFacultyMutation } from '../../../redux/features/admin/AcademicManagement.api';
import { TResponse } from '../../../types/global';
import { TAcademiFaculty } from '../../../types/academicManagement.type';
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';
import { academicFacultySchema } from '../../../schemas/academicManagemetnSchema';

const CreateAFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation(undefined);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Creating...');

    const academicFacultyData = {
      name: data.name,
    };
    try {
      const res = (await addAcademicFaculty(
        academicFacultyData
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
          resolver={zodResolver(academicFacultySchema)}
        >
          <PHSelect
            label="Name"
            name="name"
            options={AcademicFacultiesOptions}
          />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAFaculty;
