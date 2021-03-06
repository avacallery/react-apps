import React from 'react'

const Bulletpoints = ({bulletpoints}) => {
    const bulletpointList = bulletpoints.length ? (
        bulletpoints.map(bulletpoint => {
            return (
                <div className="collection-item">
                    <span>
                        <p>* {bulletpoint.content} </p>
                    </span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no bulletpoints on your list.</p>
    )
    return (
        <div className="bulletpoints collection">
            {bulletpointList}
        </div>
    )
}

export default Bulletpoints