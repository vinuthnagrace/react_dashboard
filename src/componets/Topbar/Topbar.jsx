import React from 'react'
import "./topbar.scss"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
        <div className="topbarWrapper">
        <div className="topleft">
        <span className="logo">React Dashboard</span>
        </div>
        <div className="topRight">
        <div className="topbarIconsContainer">
        <NotificationsNone />
        <span className="topIconsBadge">2</span>
        </div>
        <div className="topbarIconsContainer">
        <Language />
        <span className="topIconsBadge">2</span>
        </div>
        <div className="topbarIconsContainer">
        <Settings />
        </div>
        <img src="./profile.jpg" alt="" className="topAvatar" />
        </div>
        </div>
        </div>
    )
}
