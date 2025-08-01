import React from 'react';
import { Layout, Typography, Button } from 'antd';
import { DownloadOutlined, InstagramOutlined, GithubOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header = () => {
  return (
    <AntHeader className="app-header">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo-icon">
            <InstagramOutlined />
          </div>
          <Title level={3} className="logo-text">
            InstaDownloader
          </Title>
        </div>
        
        <nav className="nav-menu">
          <Button type="text" className="nav-item">Home</Button>
          <Button type="text" className="nav-item">Features</Button>
          <Button type="text" className="nav-item">About</Button>
          <Button 
            type="primary" 
            icon={<GithubOutlined />}
            className="cta-button"
          >
            GitHub
          </Button>
        </nav>
      </div>
    </AntHeader>
  );
};

export default Header;