import React, { useState } from 'react';
import { Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import VideoInputForm from './components/VideoInputForm';
import Features from './components/Features';
import './styles/global.scss';

const { Content } = Layout;

function App() {
  const [videoData, setVideoData] = useState(null);

  return (
    <Layout className="app-layout">
      <Header />
      <Content className="main-content">
        <Hero />
        <div className="container">
          <div className="downloader-section">
            <VideoInputForm 
              videoData={videoData} 
              setVideoData={setVideoData} 
            />
          </div>
          <Features />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;