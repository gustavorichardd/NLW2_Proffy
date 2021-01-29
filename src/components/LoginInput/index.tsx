import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string
}

const LoginInput: React.FC<InputProps> = ({ placeholder, name, ...rest }) => {
  return (
    <div className="login-input-block">
      <input type="text" id={name} placeholder={placeholder} {...rest} />
    </div>
  )
}

export default LoginInput;
