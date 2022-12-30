import React from 'react'

export default function Button({ name, handleSubmit, className, style }) {
    return (
        <div>
            <button
                name={name}
                onClick={handleSubmit}
                className={className}
                style={{ style }}
            >
                {children}
            </button>
        </div>
    )
}
