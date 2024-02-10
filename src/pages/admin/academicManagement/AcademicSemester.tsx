import { Spin, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { useGetAllSemesterQuery } from '../../../redux/features/admin/AcademicManagement.api';
import { TAcademicSemester } from '../../../types/academicManagement.type';
import { useState } from 'react';
import { TQueryParam } from '../../../types/global';

export type TTableData = Pick<
  TAcademicSemester,
  '_id' | 'name' | 'year' | 'startMonth' | 'endMonth'
>;
const AcademicSemester = () => {
  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Autumn',
          value: 'Autumn',
        },
        {
          text: 'Fall',
          value: 'Fall',
        },
        {
          text: 'Summer',
          value: 'Summer',
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Year',
      dataIndex: 'year',
      defaultSortOrder: 'descend',
    },
    {
      title: 'Start Month',
      dataIndex: 'startMonth',
    },
    {
      title: 'End Month',
      dataIndex: 'endMonth',
    },
  ];

  const [params, setparams] = useState<TQueryParam[] | undefined>(undefined);

  /*  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ]; */

  const onChange: TableProps<TTableData>['onChange'] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === 'filter') {
      const queryParams: TQueryParam[] = [];
      filters.name?.forEach((item) =>
        queryParams.push({ name: 'name', value: item })
      );
      setparams(queryParams);
    }
  };
  const { data: acdSemesterData, isFetching } = useGetAllSemesterQuery(params);
  const semesterData = acdSemesterData?.data?.map(
    ({ _id, name, year, startMonth, endMonth }) => ({
      _id,
      name,
      year,
      startMonth,
      endMonth,
    })
  );
  // if (isLoading) return <Spin></Spin>;

  return (
    <Table
      loading={isFetching}
      rowKey="_id"
      columns={columns}
      dataSource={semesterData}
      onChange={onChange}
    />
  );
};

export default AcademicSemester;
