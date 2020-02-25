"use strict";

import React from 'react';
import Reversi from './../Reversi';
import './index.css';

export default function () {
    const intro = "Welcome to my new page! there is not much for now but I plan to start working on my hobbies and " +
      "share them online. I have always been fascinated by web development since 2000 when the ISP pre-paid cards " +
      "became famous here. Since then I have tried HTML 4 and CSS but was never a fan of javascript. The only use I " +
      "found it useful then was putting rainbow trails when you hover on my page or convert emoticons to images on " +
      "table declarations for my forums. Since then I worked on desktop enterprise projects and kinda abandoned the " +
      "web technologies until 2014 when NodeJS got my attention as a solid technology for the web. I started playing " +
      "with NodeJS and Javascript (ES6) and other related web technologies. This site aims to become a repository of " +
      "all my creations! ~Adonis Lee Villamor";
    return (
        <div>
            <div id="main-page-header">{intro}</div>
            <div id="main-page-body">
                <Reversi />
            </div>
            <div>The source code for this site and its contents are freely available at <a href="https://github.com/adonisv79/bytecommander.com">my Github page</a></div>
        </div>
    );
}