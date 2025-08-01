import React from 'react';
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
              <Link href="#" className="footer-link">Home</Link>
              <Link href="#" className="footer-link">Features</Link>
              <Link href="#" className="footer-link">Privacy Policy</Link>
              <Link href="#" className="footer-link">Terms of Service</Link>
            </div>
          </div>
          
          <div className="footer-section">
            <Text strong className="footer-title">Support</Text>
            <div className="footer-links">
              <Link href="#" className="footer-link">Help Center</Link>
              <Link href="#" className="footer-link">Contact Us</Link>
              <Link href="#" className="footer-link">FAQ</Link>
              <Link href="#" className="footer-link">Report Issue</Link>
            </div>
          </div>
          
          <div className="footer-section">
            <Text strong className="footer-title">Follow Us</Text>
            <Space size="large" className="social-links">
              <InstagramOutlined className="social-icon" />
              <TwitterOutlined className="social-icon" />
              <GithubOutlined className="social-icon" />
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