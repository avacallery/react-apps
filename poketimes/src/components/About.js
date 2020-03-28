//functional component

import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>A paragraph of text. A paragraph of text. A paragraph of text. A paragraph of text. A paragraph of text. A paragraph of text.</p>
        </div>
    )
}

export default Rainbow(About)