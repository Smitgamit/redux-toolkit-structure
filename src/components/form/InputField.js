import React from 'react'

export default function InputField({ type, value, placeHolder, onChangeHandler, name, className }) {
    return (
        <div className='form-floating mb-3'>
            <input
                type={type}
                name={name}
                value={value}
                className={className}
                id={name + 'Floating'}
                placeholder={placeHolder}
                onChange={onChangeHandler}
            />
            <label htmlFor={name + 'Floating'}>{placeHolder}</label>
            {/* <input
                type={type}
                name={name}
                value={value}
                className={className}
                id={name}
                placeholder={placeHolder}
                onChange={onChangeHandler}
            /> */}
        </div>
    )
}
