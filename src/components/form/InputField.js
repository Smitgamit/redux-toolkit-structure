import React from 'react'

export default function InputField({ type, value, placeHolder, onChangeHandler, name, className }) {
    return (
        <div>
            <input
                type={type}
                name={name}
                value={value}
                className={className}
                id={name}
                placeholder={placeHolder}
                onChange={onChangeHandler}
            />
        </div>
    )
}
