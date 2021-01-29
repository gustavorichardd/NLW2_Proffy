import React from 'react';

import logoImg from '../../assets/images/logo.svg'
import thingsDetails from '../../assets/images/Background_Things.svg'
import ballsDetails from '../../assets/images/Background_Balls.svg'
import textDetails from '../../assets/images/Background_Text.svg'

import './styles.css'

const FrontPageLogo = () => {
  return (
    <div id="page-logo-retangle">

      <div className="box-images">
        <img src={ballsDetails} alt="Proffy" />

        <img src={thingsDetails} alt="Proffy" />
        <div className="logo">
          <img src={logoImg} alt="Proffy" />
          <img src={textDetails} alt="Proffy" />
        </div>
      </div>
    </div>

  )
}

export default FrontPageLogo