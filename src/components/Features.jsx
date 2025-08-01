import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { 
  SafetyOutlined,
  ThunderboltOutlined,
  MobileOutlined,
  DownloadOutlined,
  EyeInvisibleOutlined,
  GlobalOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Features = () => {
  const features = [
    {
      icon: <ThunderboltOutlined />,
      title: 'Lightning Fast',
      description: 'Download Instagram content in seconds with our optimized servers and advanced processing.'
    },
    {
      icon: <SafetyOutlined />,
      title: '100% Secure',
      description: 'Your privacy is our priority. We don\'t store your data or downloaded content.'
    },
    {
      icon: <DownloadOutlined />,
      title: 'HD Quality',
      description: 'Get the highest quality available - from 720p to 4K resolution downloads.'
    },
    {
      icon: <MobileOutlined />,
      title: 'Mobile Friendly',
      description: 'Works perfectly on all devices - desktop, tablet, and mobile browsers.'
    },
    {
      icon: <EyeInvisibleOutlined />,
      title: 'No Watermarks',
      description: 'Download clean content without any watermarks or branding overlays.'
    },
    {
      icon: <GlobalOutlined />,
      title: 'Always Free',
      description: 'Completely free to use with no hidden charges, registration, or premium plans.'
    }
  ];

  return (
    <section className="features-section">
      <div className="features-header">
        <Title level={2} className="features-title">
          Why Choose Our Downloader?
        </Title>
        <Paragraph className="features-subtitle">
          Experience the best Instagram downloader with these amazing features
        </Paragraph>
      </div>
      
      <Row gutter={[24, 24]} className="features-grid">
        {features.map((feature, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card className="feature-card" hoverable>
              <div className="feature-card-content">
                <div className="feature-card-icon">
                  {feature.icon}
                </div>
                <Title level={4} className="feature-card-title">
                  {feature.title}
                </Title>
                <Paragraph className="feature-card-description">
                  {feature.description}
                </Paragraph>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Features;