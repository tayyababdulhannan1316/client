import React from 'react';
import { Typography, Space } from 'antd';
import { 
  DownloadOutlined, 
  SafetyOutlined, 
  ThunderboltOutlined,
  MobileOutlined 
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <Title level={1} className="hero-title">
            Download Instagram Content
            <span className="gradient-text"> Instantly</span>
          </Title>
          <Paragraph className="hero-description">
            Save your favorite Instagram reels, posts, and stories in high quality. 
            No watermarks, no registration required. Just paste the URL and download!
          </Paragraph>
        </div>
        
        <div className="hero-features">
          <div className="feature-item">
            <ThunderboltOutlined className="feature-icon" />
            <span>Lightning Fast</span>
          </div>
          <div className="feature-item">
            <SafetyOutlined className="feature-icon" />
            <span>100% Safe</span>
          </div>
          <div className="feature-item">
            <MobileOutlined className="feature-icon" />
            <span>Mobile Friendly</span>
          </div>
          <div className="feature-item">
            <DownloadOutlined className="feature-icon" />
            <span>HD Quality</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;