import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
                Channel="Clever programmer"
                verified
                subs="719K"
                noOfVideos={397}
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
            />

            <hr />

            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one..."
                timestamp="1 day ago"
                channel="Clever Programmer"
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBaOzBVVqEKF-03ghz5YaunELWCGQ"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one..."
                timestamp="1 day ago"
                channel="Clever Programmer"
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBaOzBVVqEKF-03ghz5YaunELWCGQ"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one..."
                timestamp="1 day ago"
                channel="Clever Programmer"
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBaOzBVVqEKF-03ghz5YaunELWCGQ"
            />
        </div>
    );
};

export default SearchPage;
