import React from 'react';
import './window.css';
import TypeWriterEffect from 'react-typewriter-effect';

class Window extends React.Component {
    render() {
        return(
                <div className="window">
                        <div className="window__header">
                            <span className="dot__1"></span>
                            <span className="dot__2"></span>
                            <span className="dot__3"></span>
                        </div>
                    <div className="window__body">
                        <TypeWriterEffect
                            textStyle={{
                            fontFamily: 'Inconsolata',
                            fontSize: '1rem'
                            }}
                            startDelay={2000}
                            cursorColor="#3F3D56"
                            multiText={[
                            'Hey there, This is me. I do Design, and Develop Websites.',
                            'Have something great in mind? Feel free to contact me. I will help you to make it happen.'
                            ]}
                            multiTextDelay={1000}
                            typeSpeed={30}
                        />
                        
                    </div>
                </div>
        );
    }
}
export default Window;