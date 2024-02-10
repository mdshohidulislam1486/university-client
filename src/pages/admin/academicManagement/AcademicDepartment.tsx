import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { useGetAllAcademicDepartmentQuery } from '../../../redux/features/admin/AcademicManagement.api';
import { TAcademiDepartment } from '../../../types/academicManagement.type';

export type TTableData = Pick<TAcademiDepartment, '_id' | 'name'>;
const AcademicDepartment = () => {
  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      dataIndex: 'name',

      // specify the condition of filtering result
      // here is that finding the name started with `value`
    },
    {
      title: 'Academic Faculty Id',
      dataIndex: 'academicFaculty',
    },
  ];

  const { data: academicDepartmentData, isFetching } =
    useGetAllAcademicDepartmentQuery(undefined);
  const academicFacultyData = academicDepartmentData?.data?.map((item) => ({
    _id: item._id,
    name: item.name,
    academicFaculty: item.academicFaculty.name as string,
  }));
  console.log({ academicFacultyData });
  return (
    <Table
      loading={isFetching}
      rowKey="_id"
      columns={columns}
      dataSource={academicFacultyData}
    />
  );
};

export default AcademicDepartment;
