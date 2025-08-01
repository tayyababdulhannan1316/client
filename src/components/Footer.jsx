import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Typography, Space, Divider } from 'antd';
import { 
  InstagramOutlined, 
  TwitterOutlined, 
  GithubOutlined,
  HeartFilled 
} from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Text, Link } = Typography;

const Footer = () => {
  return (
    <AntFooter className="app-footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-section">
            <div className="footer-logo">
              <InstagramOutlined className="footer-logo-icon" />
              <Text strong className="footer-logo-text">InstaDownloader</Text>
            </div>
            <Text className="footer-description">
              Download Instagram reels, posts, and stories with ease. 
              Fast, secure, and completely free.
            </Text>
          </div>
          
          <div className="footer-section">
            <Text strong className="footer-title">Quick Links</Text>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/features" className="footer-link">Features</Link>
              <Link to="/about" className="footer-link">About</Link>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
            </div>
          </div>
          
          <div className="footer-section">
            <Text strong className="footer-title">Support</Text>
            <div className="footer-links">
              <a href="#" className="footer-link">Help Center</a>
              <a href="#" className="footer-link">Contact Us</a>
              <a href="#" className="footer-link">FAQ</a>
              <a href="#" className="footer-link">Report Issue</a>
            </div>
          </div>
          
          <div className="footer-section">
            <Text strong className="footer-title">Follow Us</Text>
            <Space size="large" className="social-links">
              <InstagramOutlined 
                className="social-icon" 
                onClick={() => window.open('https://instagram.com', '_blank')}
              />
              <TwitterOutlined 
                className="social-icon" 
                onClick={() => window.open('https://twitter.com', '_blank')}
              />
              <GithubOutlined 
                className="social-icon" 
                onClick={() => window.open('https://github.com', '_blank')}
              />
            </Space>
          </div>
        </div>
        
        <Divider className="footer-divider" />
        
        <div className="footer-bottom">
          <Text className="copyright">
            © 2025 InstaDownloader. All rights reserved.
          </Text>
          <Text className="made-with-love">
            Made with <HeartFilled className="heart-icon" /> for the community
          </Text>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;