import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Typography, Button } from 'antd';
import { DownloadOutlined, InstagramOutlined, GithubOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header = () => {
  const location = useLocation();

  return (
    <AntHeader className="app-header">
      <div className="header-content">
        <div className="logo-section">
          <Link to="/" className="logo-link">
          <div className="logo-icon">
            <InstagramOutlined />
          </div>
          <Title level={3} className="logo-text">
            InstaDownloader
          </Title>
          </Link>
        </div>
        
        <nav className="nav-menu">
          <Link to="/">
            <Button 
              type="text" 
              className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Button>
          </Link>
          <Link to="/features">
            <Button 
              type="text" 
              className={`nav-item ${location.pathname === '/features' ? 'active' : ''}`}
            >
              Features
            </Button>
          </Link>
          <Link to="/about">
            <Button 
              type="text" 
              className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Button>
          </Link>
          <Button 
            type="primary" 
            icon={<GithubOutlined />}
            className="cta-button"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            GitHub
          </Button>
        </nav>
      </div>
    </AntHeader>
  );
};

export default Header;