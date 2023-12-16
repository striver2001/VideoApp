import React, { useEffect, useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import './videoPlayer.css'
const VideoPlayer = ({ videoId, apiKey }) => {
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,contentDetails,statistics,status`
        );
        const videoDetails = response.data.items[0].snippet;
        setVideoDetails(videoDetails);
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };

    fetchVideoDetails();
  }, [videoId, apiKey]);

  return (
    <div>
      {videoDetails && (
        <div>
          <YouTube videoId={videoId} />
          <h2>{videoDetails.title}</h2>
          <p>{videoDetails.description}</p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
