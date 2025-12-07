"use client";

import { useState } from "react";
import { Play, ChevronLeft, ChevronRight, List } from "lucide-react";

// Define your video playlist here - Add more videos as needed!
const videoPlaylist = [
    {
        id: "nl0ACbWGfLo",
        title: "مظاهرات 11 ديسمبر",
        description: "الفيلم الوثائقي  عن أحداث 11 ديسمبر",
        duration: "1:40"
    },
    {
        id: "IlTAlimODd8",
        title: "شهادات المجاهدين",
        description: "شهادات حية من المشاركين في المظاهرات",
        duration: "16:50"
    },
    {
        id: "9KeGC8xDpvg",
        title: "شهادات حية",
        description: "شهادات حية من المشاركين في المظاهرات",
        duration: "17:00"
    },
    {
        id: "8q5Dnt4g-tc",
        title: "اوثائقي 2",
        description: "وثائقي 2",
        duration: "2:30"
    },
    {
        id: "LZBX3T2mb6Q",
        title: "مظاهرات 11 ديسمبر 1960",
        description: "كل ماتريد معرفته عنها",
        duration: "2:00"
    },
    {
        id: "7q22JSzf6jw",
        title: "مظاهرات 11 ديسمبر 1960",
        description: "محطة فخر واعتزاز في تاريخ الثورة الجزائرية",
        duration: "10:00"
    }
];

export default function DocumentaryPage() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlaylist, setShowPlaylist] = useState(true);
    const [autoplayNext, setAutoplayNext] = useState(true);
    const [iframeKey, setIframeKey] = useState(0); // Key to force iframe refresh

    const currentVideo = videoPlaylist[currentVideoIndex];

    // Play a specific video from the playlist
    const playVideo = (index: number) => {
        setCurrentVideoIndex(index);
        setIsPlaying(true);
        setIframeKey(prev => prev + 1); // Force iframe to reload with new video
    };

    // Play next video
    const playNextVideo = () => {
        const nextIndex = (currentVideoIndex + 1) % videoPlaylist.length;
        playVideo(nextIndex);
    };

    // Play previous video
    const playPreviousVideo = () => {
        const prevIndex = currentVideoIndex === 0 ? videoPlaylist.length - 1 : currentVideoIndex - 1;
        playVideo(prevIndex);
    };

    // Start playing from thumbnail
    const startPlaying = () => {
        setIsPlaying(true);
        setIframeKey(prev => prev + 1);
    };

    // Build YouTube embed URL with all necessary parameters
    const getEmbedUrl = (videoId: string, autoplay: boolean = true) => {
        const params = new URLSearchParams({
            autoplay: autoplay ? '1' : '0',
            rel: '0',
            modestbranding: '1',
            enablejsapi: '1',
            origin: typeof window !== 'undefined' ? window.location.origin : '',
        });
        return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
    };

    return (
        <main className="documentary-page">
            <div className="documentary-container">
                {/* Header */}
                <div className="documentary-header">
                    <h1 className="documentary-title">الأفلام الوثائقية</h1>
                    <p className="documentary-subtitle">مظاهرات 11 ديسمبر 1960 - شهادات وأرشيف تاريخي</p>
                    <div className="title-divider"></div>
                </div>

                {/* Main Content */}
                <div className="content-layout">
                    {/* Video Player Section */}
                    <div className="player-section">
                        {/* Video Container */}
                        <div className="video-container">
                            {!isPlaying ? (
                                // Thumbnail with play button
                                <div className="thumbnail-overlay" onClick={startPlaying}>
                                    <img
                                        src={`https://img.youtube.com/vi/${currentVideo.id}/maxresdefault.jpg`}
                                        alt={currentVideo.title}
                                        className="video-thumbnail"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${currentVideo.id}/hqdefault.jpg`;
                                        }}
                                    />
                                    <div className="play-button-large">
                                        <Play size={40} fill="white" color="white" />
                                    </div>
                                </div>
                            ) : (
                                // YouTube iframe - using key to force remount when video changes
                                <iframe
                                    key={iframeKey}
                                    className="youtube-player"
                                    src={getEmbedUrl(currentVideo.id, true)}
                                    title={currentVideo.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            )}
                        </div>

                        {/* Video Controls */}
                        <div className="video-controls">
                            <div className="controls-left">
                                <button className="nav-btn" onClick={playPreviousVideo} title="الفيديو السابق">
                                    <ChevronRight size={24} />
                                </button>
                                <button className="nav-btn" onClick={playNextVideo} title="الفيديو التالي">
                                    <ChevronLeft size={24} />
                                </button>
                            </div>

                            <div className="video-info">
                                <span className="video-counter">{currentVideoIndex + 1} / {videoPlaylist.length}</span>
                                <h3 className="current-video-title">{currentVideo.title}</h3>
                            </div>

                            <div className="controls-right">
                                <label className="autoplay-toggle">
                                    <input
                                        type="checkbox"
                                        checked={autoplayNext}
                                        onChange={(e) => setAutoplayNext(e.target.checked)}
                                    />
                                    <span>تشغيل تلقائي</span>
                                </label>
                                <button
                                    className="playlist-toggle-btn"
                                    onClick={() => setShowPlaylist(!showPlaylist)}
                                    title={showPlaylist ? "إخفاء القائمة" : "إظهار القائمة"}
                                >
                                    <List size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Video Description */}
                        <div className="video-description">
                            <p>{currentVideo.description}</p>
                            <p className="video-duration">المدة: {currentVideo.duration}</p>
                        </div>

                        {/* Next Video Button (Manual) */}
                        <div className="next-video-prompt">
                            <p>عند انتهاء الفيديو، انقر للمتابعة:</p>
                            <button className="next-video-btn" onClick={playNextVideo}>
                                <span>الفيديو التالي: {videoPlaylist[(currentVideoIndex + 1) % videoPlaylist.length].title}</span>
                                <ChevronLeft size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Playlist Sidebar */}
                    <div className={`playlist-sidebar ${showPlaylist ? 'show' : 'hide'}`}>
                        <div className="playlist-header">
                            <h3>قائمة التشغيل</h3>
                            <span className="playlist-count">{videoPlaylist.length} فيديو</span>
                        </div>

                        <div className="playlist-items">
                            {videoPlaylist.map((video, index) => (
                                <div
                                    key={video.id + index}
                                    className={`playlist-item ${index === currentVideoIndex ? 'active' : ''}`}
                                    onClick={() => playVideo(index)}
                                >
                                    <div className="item-number">
                                        {index === currentVideoIndex && isPlaying ? (
                                            <div className="playing-indicator">
                                                <span></span><span></span><span></span>
                                            </div>
                                        ) : (
                                            <span>{index + 1}</span>
                                        )}
                                    </div>
                                    <div className="item-thumbnail">
                                        <img
                                            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                                            alt={video.title}
                                        />
                                        <span className="item-duration">{video.duration}</span>
                                        {index === currentVideoIndex && isPlaying && (
                                            <div className="now-playing-badge">قيد التشغيل</div>
                                        )}
                                    </div>
                                    <div className="item-info">
                                        <h4>{video.title}</h4>
                                        <p>{video.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .documentary-page {
                    min-height: 100vh;
                    background-color: var(--bg-primary);
                    padding-top: 70px;
                    padding-bottom: 3rem;
                }
                
                .documentary-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 2rem 1.5rem;
                }
                
                .documentary-header {
                    text-align: center;
                    margin-bottom: 2rem;
                }
                
                .documentary-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(2rem, 5vw, 3.5rem);
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    background: var(--gradient-subtle);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .documentary-subtitle {
                    font-family: 'Roboto Slab', serif;
                    font-size: clamp(1rem, 2vw, 1.25rem);
                    color: var(--text-secondary);
                    margin: 0;
                }
                
                .title-divider {
                    width: 100px;
                    height: 3px;
                    background: var(--gradient-accent);
                    margin: 1.5rem auto 0;
                    border-radius: 2px;
                }
                
                /* Content Layout */
                .content-layout {
                    display: grid;
                    grid-template-columns: 1fr 350px;
                    gap: 1.5rem;
                    align-items: start;
                }
                
                /* Player Section */
                .player-section {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .video-container {
                    position: relative;
                    width: 100%;
                    background: #000;
                    border-radius: 12px;
                    overflow: hidden;
                    border: 2px solid var(--border-accent);
                    box-shadow: 0 10px 40px var(--shadow-lg);
                    aspect-ratio: 16/9;
                }
                
                .youtube-player {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: none;
                }
                
                .thumbnail-overlay {
                    position: absolute;
                    inset: 0;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .video-thumbnail {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .play-button-large {
                    position: relative;
                    z-index: 10;
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    background: var(--gradient-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 20px var(--shadow-lg);
                    transition: transform 0.3s ease;
                }
                
                .thumbnail-overlay:hover .play-button-large {
                    transform: scale(1.1);
                }
                
                /* Video Controls */
                .video-controls {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    padding: 1rem;
                    background: var(--bg-secondary);
                    border-radius: 8px;
                    border: 1px solid var(--border-subtle);
                }
                
                .controls-left,
                .controls-right {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .nav-btn {
                    background: var(--bg-elevated);
                    border: 1px solid var(--border-subtle);
                    color: var(--text-primary);
                    padding: 0.5rem;
                    border-radius: 6px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s ease;
                }
                
                .nav-btn:hover {
                    background: var(--accent-primary);
                    border-color: var(--accent-primary);
                }
                
                .video-info {
                    text-align: center;
                    flex: 1;
                }
                
                .video-counter {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    font-family: 'Roboto Slab', serif;
                }
                
                .current-video-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.125rem;
                    color: var(--accent-light);
                    margin: 0.25rem 0 0;
                }
                
                .autoplay-toggle {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                    cursor: pointer;
                }
                
                .autoplay-toggle input {
                    accent-color: var(--accent-primary);
                    width: 16px;
                    height: 16px;
                }
                
                .playlist-toggle-btn {
                    background: var(--bg-elevated);
                    border: 1px solid var(--border-subtle);
                    color: var(--text-primary);
                    padding: 0.5rem;
                    border-radius: 6px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    transition: all 0.2s ease;
                }
                
                .playlist-toggle-btn:hover {
                    background: var(--accent-primary);
                }
                
                .video-description {
                    padding: 1rem;
                    background: var(--bg-secondary);
                    border-radius: 8px;
                    border: 1px solid var(--border-subtle);
                    text-align: right;
                }
                
                .video-description p {
                    margin: 0;
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    line-height: 1.7;
                }
                
                .video-duration {
                    margin-top: 0.5rem !important;
                    font-size: 0.85rem !important;
                    color: var(--accent-light) !important;
                }
                
                /* Next Video Prompt */
                .next-video-prompt {
                    padding: 1rem;
                    background: var(--bg-elevated);
                    border-radius: 8px;
                    border: 1px solid var(--border-accent);
                    text-align: center;
                }
                
                .next-video-prompt p {
                    margin: 0 0 0.75rem;
                    font-size: 0.875rem;
                    color: var(--text-muted);
                }
                
                .next-video-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1.5rem;
                    background: var(--gradient-primary);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-family: 'Roboto Slab', serif;
                    font-size: 0.95rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .next-video-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 15px var(--shadow-md);
                }
                
                /* Playlist Sidebar */
                .playlist-sidebar {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-subtle);
                    border-radius: 12px;
                    overflow: hidden;
                    max-height: 700px;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.3s ease;
                }
                
                .playlist-sidebar.hide {
                    display: none;
                }
                
                .playlist-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    background: var(--bg-elevated);
                    border-bottom: 1px solid var(--border-subtle);
                }
                
                .playlist-header h3 {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.125rem;
                    color: var(--accent-light);
                    margin: 0;
                }
                
                .playlist-count {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    background: var(--bg-tertiary);
                    padding: 0.25rem 0.75rem;
                    border-radius: 12px;
                }
                
                .playlist-items {
                    flex: 1;
                    overflow-y: auto;
                }
                
                .playlist-item {
                    display: flex;
                    gap: 0.75rem;
                    padding: 0.75rem;
                    cursor: pointer;
                    border-bottom: 1px solid var(--border-subtle);
                    transition: background 0.2s ease;
                }
                
                .playlist-item:hover {
                    background: var(--bg-elevated);
                }
                
                .playlist-item.active {
                    background: rgba(139, 38, 53, 0.2);
                    border-right: 3px solid var(--accent-primary);
                }
                
                .item-number {
                    width: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.875rem;
                    color: var(--text-muted);
                }
                
                .playing-indicator {
                    display: flex;
                    gap: 2px;
                    align-items: flex-end;
                    height: 14px;
                }
                
                .playing-indicator span {
                    width: 3px;
                    background: var(--accent-light);
                    animation: equalizer 0.5s ease infinite;
                }
                
                .playing-indicator span:nth-child(1) { animation-delay: 0s; height: 60%; }
                .playing-indicator span:nth-child(2) { animation-delay: 0.1s; height: 100%; }
                .playing-indicator span:nth-child(3) { animation-delay: 0.2s; height: 40%; }
                
                @keyframes equalizer {
                    0%, 100% { transform: scaleY(1); }
                    50% { transform: scaleY(0.5); }
                }
                
                .item-thumbnail {
                    position: relative;
                    width: 100px;
                    aspect-ratio: 16/9;
                    border-radius: 4px;
                    overflow: hidden;
                    flex-shrink: 0;
                }
                
                .item-thumbnail img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .item-duration {
                    position: absolute;
                    bottom: 4px;
                    right: 4px;
                    background: rgba(0, 0, 0, 0.8);
                    color: white;
                    font-size: 0.7rem;
                    padding: 0.125rem 0.375rem;
                    border-radius: 2px;
                }
                
                .now-playing-badge {
                    position: absolute;
                    top: 4px;
                    right: 4px;
                    background: var(--accent-primary);
                    color: white;
                    font-size: 0.6rem;
                    padding: 0.125rem 0.375rem;
                    border-radius: 2px;
                }
                
                .item-info {
                    flex: 1;
                    min-width: 0;
                    text-align: right;
                }
                
                .item-info h4 {
                    font-family: 'Playfair Display', serif;
                    font-size: 0.875rem;
                    color: var(--text-primary);
                    margin: 0 0 0.25rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                .item-info p {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    margin: 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                /* Tablet */
                @media (max-width: 1024px) {
                    .content-layout {
                        grid-template-columns: 1fr;
                    }
                    
                    .playlist-sidebar {
                        max-height: 400px;
                    }
                }
                
                /* Mobile */
                @media (max-width: 768px) {
                    .documentary-container {
                        padding: 1.5rem 1rem;
                    }
                    
                    .video-container {
                        border-radius: 8px;
                    }
                    
                    .play-button-large {
                        width: 60px;
                        height: 60px;
                    }
                    
                    .video-controls {
                        flex-wrap: wrap;
                        padding: 0.75rem;
                    }
                    
                    .video-info {
                        order: -1;
                        width: 100%;
                        margin-bottom: 0.5rem;
                    }
                    
                    .current-video-title {
                        font-size: 1rem;
                    }
                    
                    .autoplay-toggle span {
                        display: none;
                    }
                    
                    .playlist-sidebar {
                        max-height: 350px;
                    }
                    
                    .item-thumbnail {
                        width: 80px;
                    }
                    
                    .next-video-btn {
                        font-size: 0.85rem;
                        padding: 0.625rem 1rem;
                    }
                }
                
                /* Small Mobile */
                @media (max-width: 480px) {
                    .documentary-container {
                        padding: 1rem 0.75rem;
                    }
                    
                    .video-container {
                        border-radius: 6px;
                        border-width: 1px;
                    }
                    
                    .play-button-large {
                        width: 50px;
                        height: 50px;
                    }
                    
                    .playlist-item {
                        padding: 0.5rem;
                    }
                    
                    .item-thumbnail {
                        width: 70px;
                    }
                    
                    .item-info h4 {
                        font-size: 0.8rem;
                    }
                }
            `}</style>
        </main>
    );
}
