import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateStudent from '../pages/admin/CreateStudent';
import CreateAdmin from '../pages/admin/CreateAdmin';
import CreateFaculty from '../pages/admin/CreateFaculty';
import AcademicSemester from '../pages/admin/academicManagement/AcademicSemester';
import CreateAcademicSemester from '../pages/admin/academicManagement/CreateAcademicSemester';
import CreateAFaculty from '../pages/admin/academicManagement/CreateAFaculty';
import AcademicFaculty from '../pages/admin/academicManagement/AcademicFaculty';
import CreateAdepartment from '../pages/admin/academicManagement/CreateAdepartment';
import AcademicDepartment from '../pages/admin/academicManagement/AcademicDepartment';

export const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <AdminDashboard />,
  },
  {
    name: 'Academic Management',
    children: [
      {
        name: 'Create A. Semester',
        path: 'create-academic-semester',
        element: <CreateAcademicSemester />,
      },
      {
        name: 'Academic Semester',
        path: 'academic-semester',
        element: <AcademicSemester />,
      },

      {
        name: 'Create A. Faculty',
        path: 'create-academic-faculty',
        element: <CreateAFaculty />,
      },
      {
        name: 'Academic Faculty',
        path: 'academic-Faculty',
        element: <AcademicFaculty />,
      },
      {
        name: 'Create A. Department',
        path: 'create-academic-department',
        element: <CreateAdepartment />,
      },
      {
        name: 'Academic Department',
        path: 'academic-department',
        element: <AcademicDepartment />,
      },
      /*  {
        name: 'Create Semester',
        path: 'create-semester',
        element: <CreateAdmin />,
      }, */
    ],
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: <CreateAdmin />,
      },
      {
        name: 'Create Student',
        path: 'create-student',
        element: <CreateStudent />,
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: <CreateFaculty />,
      },
    ],
  },
];

/* export const adminSidebar = adminPaths.reduce((acc: TSidebarItem[], item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
      })),
    });
  }
  return acc;
}, []); */

// hard coded
// export const adminPaths = [
//   {
//     index: true,
//     element: <AdminDashboard />,
//   },
//   {
//     path: 'dashboard',
//     element: <AdminDashboard />,
//   },
//   {
//     path: 'create-student',
//     element: <CreateStudent />,
//   },
//   {
//     path: 'create-admin',
//     element: <CreateAdmin />,
//   },
//   {
//     path: 'create-faculty',
//     element: <CreateFaculty />,
//   },
// ];
