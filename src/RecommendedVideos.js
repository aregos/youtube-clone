import React from 'react';
import './RecommendedVideos.css';
import VideoCard from "./VideoCard";
import VideoRow from "./VideoRow";

const RecommendedVideos = () => {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    title="Become a Web Developer in 10 minutes"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJy5xCV9uU9I5fWNih0v43nwyved5bm9x2a-o8j95oc=s100-c-k-c0xffffffff-no-rj-mo"
                    image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAk4vDJdxYSGCF9Bw0fhMLut7k5lA"
                    channel="Sonny Sangha"
                />
                <VideoCard
                    title="Become a Web Developer in 10 minutes"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJy5xCV9uU9I5fWNih0v43nwyved5bm9x2a-o8j95oc=s100-c-k-c0xffffffff-no-rj-mo"
                    image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAk4vDJdxYSGCF9Bw0fhMLut7k5lA"
                    channel="Sonny Sangha"
                />
                <VideoCard
                    title="Become a Web Developer in 10 minutes"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJy5xCV9uU9I5fWNih0v43nwyved5bm9x2a-o8j95oc=s100-c-k-c0xffffffff-no-rj-mo"
                    image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAk4vDJdxYSGCF9Bw0fhMLut7k5lA"
                    channel="Sonny Sangha"
                />
                <VideoCard
                    title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                    views="67K views"
                    timestamp="Streamed 2 weeks ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s100-c-k-c0xffffffff-no-rj-mo"
                    image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBaOzBVVqEKF-03ghz5YaunELWCGQ"
                    channel="Clever Programmer"
                />
                <VideoCard
                    title="Become a Web Developer in 10 minutes"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJy5xCV9uU9I5fWNih0v43nwyved5bm9x2a-o8j95oc=s100-c-k-c0xffffffff-no-rj-mo"
                    image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAk4vDJdxYSGCF9Bw0fhMLut7k5lA"
                    channel="Sonny Sangha"
                />
                <VideoCard
                    title="Become a Web Developer in 10 minutes"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJy5xCV9uU9I5fWNih0v43nwyved5bm9x2a-o8j95oc=s100-c-k-c0xffffffff-no-rj-mo"
                    image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAk4vDJdxYSGCF9Bw0fhMLut7k5lA"
                    channel="Sonny Sangha"
                />
                <VideoCard
                    title="Become a Web Developer in 10 minutes"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJy5xCV9uU9I5fWNih0v43nwyved5bm9x2a-o8j95oc=s100-c-k-c0xffffffff-no-rj-mo"
                    image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAk4vDJdxYSGCF9Bw0fhMLut7k5lA"
                    channel="Sonny Sangha"
                />
                <VideoCard
                    title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                    views="67K views"
                    timestamp="Streamed 2 weeks ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s100-c-k-c0xffffffff-no-rj-mo"
                    image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBaOzBVVqEKF-03ghz5YaunELWCGQ"
                    channel="Clever Programmer"
                />
            </div>
        </div>
    );
};

export default RecommendedVideos;
