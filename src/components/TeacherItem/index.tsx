import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars.githubusercontent.com/u/55417049?s=400&u=28246714f76df122ca24c2e64483e7f9dcb190d4&v=4" alt="WikiPedia" />
        <div>
          <strong>Wikipedia</strong>
          <span>Tudão</span>
        </div>
      </header>

      <p>Aqui eu vou botar um texto bem aleatório.</p>

      <footer>
        <p>
          Preço/hora
        <strong>R$ 100,00</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
      </footer>
    </article>
  )
}

export default TeacherItem;