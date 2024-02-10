import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { useGetAllAcademicFacultyQuery } from '../../../redux/features/admin/AcademicManagement.api';
import { TAcademiFaculty } from '../../../types/academicManagement.type';

export type TTableData = Pick<TAcademiFaculty, '_id' | 'name'>;
const AcademicFaculty = () => {
  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      dataIndex: 'name',

      // specify the condition of filtering result
      // here is that finding the name started with `value`
    },
  ];

  const { data: acdSemesterData, isFetching } =
    useGetAllAcademicFacultyQuery(undefined);
  const academicFacultyData = acdSemesterData?.data?.map(({ _id, name }) => ({
    _id,
    name,
  }));

  return (
    <Table
      loading={isFetching}
      rowKey="_id"
      columns={columns}
      dataSource={academicFacultyData}
    />
  );
};

export default AcademicFaculty;
