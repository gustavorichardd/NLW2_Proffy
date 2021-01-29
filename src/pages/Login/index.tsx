import React from 'react';

import FrontPageLogo from '../../components/FrontPage'
import LoginInput from '../../components/LoginInput'

import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css'

const Login = () => {
  return (
    <div id="login-page">
      <FrontPageLogo />
      <div className="login-page-right">
        <div className="login-form">
          <p>Fazer login</p>
          <div className="inputs-block">
            <LoginInput name='email' placeholder='E-mail' />
            <LoginInput name='password' placeholder='Senha' />
          </div>

          <div className="bottom-input">
            <div className="remember-user">
              <input type='checkbox' />
              <p>Lembrar-me</p>
            </div>
            <a href=''>Esqueci minha senha</a>
          </div>
          <button>
            Entrar
          </button>
        </div>
        <footer>
          <div className="register-form">
            <div className="to-register-page">
              <p>Não tem conta?</p>
              <a href="">Cadastre-se</a>
            </div>
            <p>É de graça <img src={purpleHeartIcon} alt="Coração Roxo" /></p>
          </div>
        </footer>
      </div>

    </div>

  )
}

export default Login;
