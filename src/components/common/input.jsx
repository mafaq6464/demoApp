import React from 'react';

const FormInput = ({name, label, value, onChange, type, error}) => {
    return ( 
        <div className="form-group">
            <label>{label}</label>
            <input 
                autoComplete="true"
                value={value}
                onChange={onChange}
                id={name} 
                name={name} 
                type={type} 
            />
            <span style={{ display: 'block', fontSize: '18px', lineHeight: '1', color: 'red' }}>{error}</span>
        </div>
    );
}
 
export default FormInput;