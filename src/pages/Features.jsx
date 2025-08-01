import React from 'react';
import { Row, Col, Card, Typography, Timeline, Statistic } from 'antd';
import { 
  SafetyOutlined,
  ThunderboltOutlined,
  MobileOutlined,
  DownloadOutlined,
  EyeInvisibleOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
  StarOutlined,
  UserOutlined,
  CloudDownloadOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Features = () => {
  const features = [
    {
      icon: <ThunderboltOutlined />,
      title: 'Lightning Fast',
      description: 'Download Instagram content in seconds with our optimized servers and advanced processing technology.',
      stats: '< 5 seconds'
    },
    {
      icon: <SafetyOutlined />,
      title: '100% Secure',
      description: 'Your privacy is our priority. We don\'t store your data or downloaded content on our servers.',
      stats: 'SSL Encrypted'
    },
    {
      icon: <DownloadOutlined />,
      title: 'HD Quality',
      description: 'Get the highest quality available - from 720p to 4K resolution downloads without compression.',
      stats: 'Up to 4K'
    },
    {
      icon: <MobileOutlined />,
      title: 'Mobile Friendly',
      description: 'Works perfectly on all devices - desktop, tablet, and mobile browsers with responsive design.',
      stats: 'All Devices'
    },
    {
      icon: <EyeInvisibleOutlined />,
      title: 'No Watermarks',
      description: 'Download clean content without any watermarks, logos, or branding overlays.',
      stats: 'Clean Files'
    },
    {
      icon: <GlobalOutlined />,
      title: 'Always Free',
      description: 'Completely free to use with no hidden charges, registration, or premium plans required.',
      stats: '100% Free'
    }
  ];

  const steps = [
    {
      title: 'Copy Instagram URL',
      description: 'Copy the link of any Instagram Reel, Post, or Story you want to download.'
    },
    {
      title: 'Paste URL',
      description: 'Paste the copied URL into our download input field on the homepage.'
    },
    {
      title: 'Click Download',
      description: 'Hit the download button and wait for our system to process your request.'
    },
    {
      title: 'Save Content',
      description: 'Download the high-quality content directly to your device instantly.'
    }
  ];

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="features-hero">
        <div className="container">
          <div className="features-hero-content">
            <Title level={1} className="features-hero-title">
              Powerful Features for
              <span className="gradient-text"> Instagram Downloads</span>
            </Title>
            <Paragraph className="features-hero-description">
              Discover why millions of users trust our Instagram downloader for their content needs. 
              Fast, secure, and feature-rich downloading experience.
            </Paragraph>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <Row gutter={[32, 32]} className="stats-grid">
            <Col xs={12} sm={6}>
              <Card className="stat-card">
                <Statistic
                  title="Downloads"
                  value={2.5}
                  suffix="M+"
                  valueStyle={{ color: '#e1306c', fontSize: '2rem', fontWeight: 'bold' }}
                />
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className="stat-card">
                <Statistic
                  title="Happy Users"
                  value={500}
                  suffix="K+"
                  valueStyle={{ color: '#405de6', fontSize: '2rem', fontWeight: 'bold' }}
                />
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className="stat-card">
                <Statistic
                  title="Success Rate"
                  value={99.9}
                  suffix="%"
                  valueStyle={{ color: '#00d4aa', fontSize: '2rem', fontWeight: 'bold' }}
                />
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className="stat-card">
                <Statistic
                  title="Uptime"
                  value={99.99}
                  suffix="%"
                  valueStyle={{ color: '#fd5949', fontSize: '2rem', fontWeight: 'bold' }}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid-section">
        <div className="container">
          <div className="section-header">
            <Title level={2} className="section-title">
              Why Choose Our Downloader?
            </Title>
            <Paragraph className="section-subtitle">
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
                    <div className="feature-stat">
                      <StarOutlined className="stat-icon" />
                      <span className="stat-text">{feature.stats}</span>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <Title level={2} className="section-title">
              How It Works
            </Title>
            <Paragraph className="section-subtitle">
              Download Instagram content in just 4 simple steps
            </Paragraph>
          </div>
          
          <div className="timeline-container">
            <Timeline
              mode="alternate"
              className="custom-timeline"
              items={steps.map((step, index) => ({
                dot: <CheckCircleOutlined className="timeline-icon" />,
                children: (
                  <Card className="timeline-card">
                    <Title level={4} className="timeline-title">
                      Step {index + 1}: {step.title}
                    </Title>
                    <Paragraph className="timeline-description">
                      {step.description}
                    </Paragraph>
                  </Card>
                )
              }))}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <Card className="cta-card">
            <div className="cta-content">
              <CloudDownloadOutlined className="cta-icon" />
              <Title level={2} className="cta-title">
                Ready to Start Downloading?
              </Title>
              <Paragraph className="cta-description">
                Join millions of users who trust our Instagram downloader for their content needs.
              </Paragraph>
              <a href="/" className="cta-button">
                Start Downloading Now
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Features;