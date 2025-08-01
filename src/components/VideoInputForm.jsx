import React, { useState } from "react";
import { Input, Button, Spin, Alert, Typography, Card, Image, Space, Tag } from "antd";
import { 
  DownloadOutlined, 
  LinkOutlined, 
  PlayCircleOutlined,
  UserOutlined,
  EyeOutlined,
  HeartOutlined
} from '@ant-design/icons';
import axios from "axios";

const { Paragraph, Text } = Typography;

export default function VideoInputForm({ videoData, setVideoData }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    if (!url) return;

    setLoading(true);
    setError("");
    setVideoData(null);

    try {
      const response = await axios.get("http://localhost:5000/api/instagram", {
        params: { url: "https://www.instagram.com/reels/DK9ga1DvwqT/" },
        headers: {
          "x-rapidapi-host": "instagram-reels-downloader-api.p.rapidapi.com",
          "x-rapidapi-key": "ecc5850a81msh5ff21464e4b3876p107e91jsn8e6df4366e9",
        },
      });

      if (response.data?.medias?.length > 0) {
        setVideoData({
          url: response.data.medias[0].url,
          thumbnail: response.data.thumbnail,
          title: response.data.title,
          author: response.data.author,
          views: "1.2M",
          likes: "45.3K"
        });
      } else {
        setError("Media not found or URL is private.");
      }
    } catch (err) {
      setError("Something went wrong. Check your API key or URL.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="video-input-section">
      <Card className="input-card">
        <div className="input-form">
          <div className="input-group">
            <Input
              size="large"
              placeholder="Paste Instagram Reel, Post, or Story URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              prefix={<LinkOutlined className="input-icon" />}
              className="url-input"
            />
            <Button 
              type="primary" 
              size="large"
              icon={<DownloadOutlined />}
              onClick={handleDownload} 
              disabled={!url}
              loading={loading}
              className="download-button"
            >
              {loading ? 'Processing...' : 'Download'}
            </Button>
          </div>
          
          <div className="input-help">
            <Text type="secondary">
              💡 Tip: Works with Instagram Reels, Posts, Stories, and IGTV
            </Text>
          </div>
        </div>

        {loading && (
          <div className="loading-section">
            <Spin size="large" />
            <Text className="loading-text">Fetching your content...</Text>
          </div>
        )}

        {error && (
          <Alert
            className="error-alert"
            message="Oops! Something went wrong"
            description={error}
            type="error"
            showIcon
            closable
          />
        )}
      </Card>

      {videoData && (
        <Card className="result-card">
          <div className="result-content">
            <div className="result-media">
              <div className="thumbnail-container">
                <Image 
                  src={videoData.thumbnail} 
                  alt="Content Thumbnail" 
                  className="result-thumbnail"
                  preview={false}
                />
                <div className="play-overlay">
                  <PlayCircleOutlined className="play-icon" />
                </div>
              </div>
            </div>
            
            <div className="result-details">
              <div className="result-header">
                <Text strong className="result-title">
                  {videoData.title || 'Instagram Content'}
                </Text>
                <div className="result-meta">
                  <Space size="middle">
                    <span className="meta-item">
                      <UserOutlined /> @{videoData.author}
                    </span>
                    <span className="meta-item">
                      <EyeOutlined /> {videoData.views}
                    </span>
                    <span className="meta-item">
                      <HeartOutlined /> {videoData.likes}
                    </span>
                  </Space>
                </div>
              </div>
              
              <div className="result-tags">
                <Tag color="blue">HD Quality</Tag>
                <Tag color="green">No Watermark</Tag>
                <Tag color="purple">Fast Download</Tag>
              </div>
              
              <div className="result-actions">
                <Button
                  type="primary"
                  size="large"
                  icon={<DownloadOutlined />}
                  href={videoData.url}
                  target="_blank"
                  className="final-download-button"
                  block
                >
                  Download Now
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}