import React from 'react';
import { Row, Col, Card, Typography, Avatar, Timeline, Tag } from 'antd';
import { 
  TeamOutlined,
  RocketOutlined,
  SafetyOutlined,
  GlobalOutlined,
  HeartOutlined,
  TrophyOutlined,
  UserOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  GithubOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const About = () => {
  const values = [
    {
      icon: <SafetyOutlined />,
      title: 'Privacy First',
      description: 'We prioritize user privacy and never store personal data or downloaded content.'
    },
    {
      icon: <RocketOutlined />,
      title: 'Innovation',
      description: 'Constantly improving our technology to provide the fastest and most reliable service.'
    },
    {
      icon: <GlobalOutlined />,
      title: 'Accessibility',
      description: 'Making Instagram content downloading accessible to everyone, everywhere, for free.'
    },
    {
      icon: <HeartOutlined />,
      title: 'User-Centric',
      description: 'Every feature we build is designed with our users\' needs and experience in mind.'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      description: 'Passionate about creating tools that make digital life easier.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Developer',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      description: 'Full-stack developer with expertise in scalable web applications.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Mike Rodriguez',
      role: 'UI/UX Designer',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      description: 'Designing beautiful and intuitive user experiences.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Project Launch',
      description: 'Started as a simple tool to help friends download Instagram content.'
    },
    {
      year: '2023',
      title: '10K Users',
      description: 'Reached our first 10,000 users within 3 months of launch.'
    },
    {
      year: '2024',
      title: '500K Downloads',
      description: 'Processed over 500,000 downloads with 99.9% success rate.'
    },
    {
      year: '2024',
      title: 'Mobile App',
      description: 'Launched mobile-optimized version for better user experience.'
    },
    {
      year: '2025',
      title: '2.5M+ Downloads',
      description: 'Serving millions of users worldwide with continuous improvements.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <Title level={1} className="about-hero-title">
              About
              <span className="gradient-text"> InstaDownloader</span>
            </Title>
            <Paragraph className="about-hero-description">
              We're on a mission to make Instagram content downloading simple, fast, and accessible 
              to everyone. Our platform serves millions of users worldwide with the most reliable 
              Instagram downloader available.
            </Paragraph>
            <div className="hero-stats">
              <div className="stat-item">
                <Text className="stat-number">2.5M+</Text>
                <Text className="stat-label">Downloads</Text>
              </div>
              <div className="stat-item">
                <Text className="stat-number">500K+</Text>
                <Text className="stat-label">Users</Text>
              </div>
              <div className="stat-item">
                <Text className="stat-number">99.9%</Text>
                <Text className="stat-label">Success Rate</Text>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div className="mission-content">
                <Title level={2} className="mission-title">
                  Our Mission
                </Title>
                <Paragraph className="mission-description">
                  We believe that accessing and saving your favorite Instagram content should be 
                  effortless and free. Our mission is to provide the most reliable, fast, and 
                  user-friendly Instagram downloader while maintaining the highest standards of 
                  privacy and security.
                </Paragraph>
                <div className="mission-highlights">
                  <Tag color="blue" className="highlight-tag">Privacy Focused</Tag>
                  <Tag color="green" className="highlight-tag">Always Free</Tag>
                  <Tag color="purple" className="highlight-tag">No Registration</Tag>
                  <Tag color="orange" className="highlight-tag">HD Quality</Tag>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="mission-visual">
                <div className="visual-card">
                  <TrophyOutlined className="visual-icon" />
                  <Title level={3} className="visual-title">
                    Trusted by Millions
                  </Title>
                  <Paragraph className="visual-description">
                    Join over 500,000 satisfied users who rely on our platform daily
                  </Paragraph>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <Title level={2} className="section-title">
              Our Values
            </Title>
            <Paragraph className="section-subtitle">
              The principles that guide everything we do
            </Paragraph>
          </div>
          
          <Row gutter={[24, 24]} className="values-grid">
            {values.map((value, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card className="value-card" hoverable>
                  <div className="value-card-content">
                    <div className="value-card-icon">
                      {value.icon}
                    </div>
                    <Title level={4} className="value-card-title">
                      {value.title}
                    </Title>
                    <Paragraph className="value-card-description">
                      {value.description}
                    </Paragraph>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <Title level={2} className="section-title">
              Meet Our Team
            </Title>
            <Paragraph className="section-subtitle">
              The passionate people behind InstaDownloader
            </Paragraph>
          </div>
          
          <Row gutter={[24, 24]} className="team-grid">
            {team.map((member, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card className="team-card" hoverable>
                  <div className="team-card-content">
                    <Avatar 
                      size={120} 
                      src={member.avatar}
                      className="team-avatar"
                    />
                    <Title level={4} className="team-name">
                      {member.name}
                    </Title>
                    <Text className="team-role">
                      {member.role}
                    </Text>
                    <Paragraph className="team-description">
                      {member.description}
                    </Paragraph>
                    <div className="team-social">
                      <LinkedinOutlined className="social-icon" />
                      <TwitterOutlined className="social-icon" />
                      <GithubOutlined className="social-icon" />
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <Title level={2} className="section-title">
              Our Journey
            </Title>
            <Paragraph className="section-subtitle">
              Key milestones in our growth story
            </Paragraph>
          </div>
          
          <div className="timeline-container">
            <Timeline
              mode="left"
              className="custom-timeline"
              items={milestones.map((milestone, index) => ({
                label: <Text className="timeline-year">{milestone.year}</Text>,
                children: (
                  <Card className="timeline-card">
                    <Title level={4} className="timeline-title">
                      {milestone.title}
                    </Title>
                    <Paragraph className="timeline-description">
                      {milestone.description}
                    </Paragraph>
                  </Card>
                )
              }))}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <Card className="about-cta-card">
            <div className="about-cta-content">
              <TeamOutlined className="cta-icon" />
              <Title level={2} className="cta-title">
                Join Our Community
              </Title>
              <Paragraph className="cta-description">
                Be part of our growing community of content creators and Instagram enthusiasts.
              </Paragraph>
              <a href="/" className="cta-button">
                Start Using InstaDownloader
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;