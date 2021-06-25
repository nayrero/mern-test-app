import React from 'react'

export const LinkCard = ({ link }) => {
    return (
        <div>
            <h2>Link</h2>            
            <p>Yours link: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
            <p>Link from: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
            <p>Link click count: <strong>{link.clicks}</strong></p>
            <p>Create date: <strong>{new Date(link.date).toLocaleTimeString()}</strong></p>

        </div>
        
    )
}