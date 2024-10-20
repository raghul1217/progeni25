import React, { useState } from 'react';
import '../styles/registetbtn.css'; // Import the CSS file

const RegisterBtn = () => {
    const [state, setState] = useState(0);

    const handleClick = () => {
        setState((prev) => (prev === 2 ? 0 : prev + 1));
    };

    return (
        <div className="bg" onClick={handleClick}>
            <div className="wrap">
                <svg className="path" viewBox="0 0 120 120">
                    <path
                        fill="none"
                        stroke="var(--purple-500)"
                        strokeWidth="2"
                        d="M 10,60 A 50,50 0 0,1 110,60 A 50,50 0 0,1 10,60"
                    />
                </svg>
                <div className="outline" />
                <div className="content">
                    <div className={`char state-${state}`}>
                        <span>Click Me</span>
                        <div className={`icon state-${state}`}>
                            <div />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterBtn;
