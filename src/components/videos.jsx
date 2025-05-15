import React, { useState } from 'react';
import '../styles/Videos.css';

const Videos = () => {
    const [selectedYear, setSelectedYear] = useState('2024');
    
    const years = ['2024', '2023', '2022', '2021']; // Add more years as videos become available
    
    return (
        <div className="videos">
            <div className="video-container">
                <h2>Videos</h2>
                <div className="year-selector">
                    {years.map(year => (
                        <button
                            key={year}
                            className={`year-button ${selectedYear === year ? 'active' : ''}`}
                            onClick={() => setSelectedYear(year)}
                        >
                            {year}
                        </button>
                    ))}
                </div>
                <div className="video-player">
                    <video 
                        controls 
                        width="100%" 
                        height="auto"
                        src={`/videos/${selectedYear}.mp4`}
                        poster={`/videos/thumbnails/${selectedYear}.jpeg`}
                        type="video/mp4"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Videos;