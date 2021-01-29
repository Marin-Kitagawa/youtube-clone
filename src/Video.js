import React from 'react'
import './Video.css'
import Avatar from '@material-ui/core/Avatar'


function Video({ link, title, channel, views, timestamp, channelImage }) {
    return (
        <div className="video">
            <iframe className="video__iframe" src={link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="video__info">
                <Avatar className="video__avatar" alt={channel} src={channelImage} />
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p> {views} • {timestamp} </p>
                </div>
            </div>
        </div>
    )
}

export default Video
