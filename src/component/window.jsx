import React from 'react';
import './window.css';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';

class Window extends React.Component {
    render() {
        return(
            <Bounce left>
                <div className="window">
                    <Slide left>
                        <div className="window__header">
                            <span className="dot__1"></span>
                            <span className="dot__2"></span>
                            <span className="dot__3"></span>
                        </div>
                    </Slide>
                    <div className="window__body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, similique velit dolor ut facere magnam quaerat laboriosam veniam quae deserunt?</p>
                    </div>
                </div>
            </Bounce>
        );
    }
}
export default Window;