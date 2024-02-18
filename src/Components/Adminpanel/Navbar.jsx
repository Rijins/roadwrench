import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  FileOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import Registration from './Registration';
import Home from './Home';
import ViewWorkshops from './ViewWorkshops';

const { Header, Content, Sider } = Layout;

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState('home');

  const renderPage = () => {
    switch (selectedPage) {
      case 'profile':
        return <Registration />;

        case 'view':
        return <ViewWorkshops/>;
      
        
      default:
        return <Home />;
    }
  };

  return (
    <Layout>
      <Sider width={80} theme="dark">
        <div className="logo" />
        <Menu theme="dark" mode="vertical" selectedKeys={[selectedPage]}>
          <Menu.Item key="home" icon={<HomeOutlined />} onClick={() => setSelectedPage('home')}>
            Home
          </Menu.Item>
          <Menu.Item key="profile" icon={<UserOutlined />} onClick={() => setSelectedPage('profile')}>
            ADD
          </Menu.Item>
          {/* Uncomment and customize the following menu items as needed */}
          <Menu.Item key="view" icon={<FileOutlined />} >
            VIEW
          </Menu.Item>
          {/* <Menu.Item key="settings" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="logout" icon={<LogoutOutlined />} >
            Logout
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 80 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {renderPage()}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Navbar;
