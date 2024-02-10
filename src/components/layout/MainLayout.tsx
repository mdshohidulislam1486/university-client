import { Button, Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/features/auth/authSlice';
const { Header, Content, Footer } = Layout;
const MainLayout = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button onClick={handleLogout}>Logout</Button>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

/* const items: MenuProps['items'] = [
    {
      key: 'Dashboard',
      label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
    },
    {
      key: 'User Management',
      label: 'User Management',
      children: [
        {
          key: 'Create Admin',
          label: <NavLink to="/admin/create-admin">Create admin</NavLink>,
        },
        {
          key: 'Create Faculty',
          label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
        },
        {
          key: 'Create Student',
          label: <NavLink to="/admin/create-student">Create Student</NavLink>,
        },
      ],
    },
  ]; */