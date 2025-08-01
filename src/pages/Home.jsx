import React, { useState } from 'react';
import Hero from '../components/Hero';
import VideoInputForm from '../components/VideoInputForm';
import Features from '../components/Features';

const Home = () => {
  const [videoData, setVideoData] = useState(null);

  return (
    <>
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
    </>
  );
};

export default Home;