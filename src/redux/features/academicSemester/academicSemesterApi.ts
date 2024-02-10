import { baseApi } from '../../api/baseapi';

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: () => ({
        url: '/academic-semesters',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllSemesterQuery } = academicSemesterApi;
