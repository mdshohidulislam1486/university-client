import React from 'react';
import { Layout, Menu } from 'antd';
import { sideBarItemsGenerator } from '../../utils/sidebarItemGenerators';
import { adminPaths } from '../../routes/admin.routes';
import { facultyPath } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentUser } from '../../redux/features/auth/authSlice';
const { Sider } = Layout;
const userRole = {
  ADMIN: 'admin',
  STUDENT: 'student',
  FACULTY: 'faculty',
};

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);

  let sideBarItems;
  switch (user!.role) {
    case userRole.ADMIN:
      sideBarItems = sideBarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sideBarItems = sideBarItemsGenerator(facultyPath, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sideBarItems = sideBarItemsGenerator(studentPaths, userRole.STUDENT);
      break;
    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '4rem',
        }}
      >
        <h1 style={{ color: 'white' }}>Ph Uni</h1>
      </div>
      <Menu theme="dark" mode="inline" items={sideBarItems} />
    </Sider>
  );
};

export default Sidebar;
