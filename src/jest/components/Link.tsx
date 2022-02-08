

import React from 'react';

export class Link extends React.Component{

    handleMouseEnter = ()=>{
        console.log("mouse enter");
    }
    handleMouseLeave = ()=>{
        console.log("mouse leave");
    }

    render(): React.ReactNode {
        return <div>
            <a  className="aLink" href='https://www.baidu.com/'  onMouseEnter={this.handleMouseEnter}  onMouseLeave={this.handleMouseLeave}  >百度</a>
        </div>;
    }
}





// <a
//   className="normal"
//   href="http://www.facebook.com"
//   onMouseEnter={[Function]}
//   onMouseLeave={[Function]}
// >
//   Facebook
// </a>
