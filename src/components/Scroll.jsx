import React from "react";

// type CardList when log children out on web
const Scroll = ({ children }) => {
    return (
        <div style={{
            overflowY: 'scroll',
            border: `5px solid black`,
            height: '800px' }}>
            {children}
        </div>
    )
}

export default Scroll