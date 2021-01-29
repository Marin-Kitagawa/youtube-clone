import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow  
                image="https://yt3.ggpht.com/ytc/AAUvwnhaCfWYKZA5TAF_WjTA7NoLehvFZG2jxPdA8FD_BOI=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="National Geographic"
                verified
                subs="16.5M"
                noOfVideos={9524}
                description="Inspiring people to care about the planet! National Geographic is the world's premium destination for science, exploration, and ..."
            />
            <hr />
            <VideoRow 
                title="Feathers in Flight: The Bird Genoscape Project | National Geographic"
                views="57K"
                timestamp="3 days ago"
                channel="National Geographic"
                image="https://i.ytimg.com/an_webp/_p43ksRgIlk/mqdefault_6s.webp?du=3000&sqp=CKP50IAG&rs=AOn4CLA9WxjTpdfGFm4uFk8UDHjL4qL58A"
                subs="16.5M"
                description="Billions of birds migrate annually across the Western Hemisphere… but if we don't know where they go when they leave their ..."
            />
            <VideoRow 
                title="Bonus Episode: Bicycles, Better Angels and Biden | Podcast | Overheard at National Geographic"
                views="47K"
                timestamp="1 week ago"
                channel="National Geographic"
                image="https://i.ytimg.com/an_webp/FyYrExZn5h0/mqdefault_6s.webp?du=3000&sqp=CN_b0IAG&rs=AOn4CLCnazbTTtFkgEYC6I1Rt30NoNKHKQ"
                subs="16.5M"
                description="Since George Washington took the first presidential oath of office in 1789, inaugurations have been held during times of war and ..."
            />
            <VideoRow 
                title="Lost World of the Maya (Full Episode) | National Geographic"
                views="7.1M"
                timestamp="4 weeks ago"
                channel="National Geographic"
                image="https://i.ytimg.com/an_webp/7MFKy7DJsCY/mqdefault_6s.webp?du=3000&sqp=CMyc0YAG&rs=AOn4CLDKc_0l-mr1jNTXwOWMOFJt-9ZCpQ"
                subs="16.5M"
                description="The Maya - their soaring pyramids, monumental cities and mythical mastery of astronomy and mathematics have captured our ..."
            />
            <VideoRow 
                title="Tigers 101 | National Geographic"
                views="2.6M"
                timestamp="1 year ago"
                channel="National Geographic"
                image="https://i.ytimg.com/an_webp/FK3dav4bA4s/mqdefault_6s.webp?du=3000&sqp=CK-Y0YAG&rs=AOn4CLD9uNp2Bu3zF7hLD_ZIu8welONyVA"
                subs="16.5M"
                description="Tigers are icons of beauty, power, and the importance of conservation. Learn five surprising facts about these striped felines, ..."
            />
        </div>
        
    )
}

export default SearchPage
