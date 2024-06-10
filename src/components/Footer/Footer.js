import React from 'react'
import footerLogo from '../img/logo (1).png'

import whatsapp from '../img/whatsapp.png'
import youtube from '../img/yoytube.png'
import insta from '../img/insta.png'
import telegram from '../img/telegram.png'

function Footer() {
  return (
    <div className='Footer'>
      <div className="container Footer__container">
        <img className='Footer__logo' src={footerLogo} alt="" />
        <div className='Footer__bigBlock'>
          <div className='Footer__bigHome'>
            <h6 className='Footer__home'>Главная</h6>
            <p className='Footer__aboutUs'>О нас</p>
            <p className='Footer__advantages'>Преимущества</p>
            <p className='Footer__cours'>Все курсы</p>
            <p className='Footer__study'>Обучение</p>
          </div>
          <div className='Footer__block'>
            <h6 className='Footer__AllCours'>Все курсы</h6>
            <p className='Footer__fullstack'> Fullstack разработчик</p>
            <p className='Footer__backend'>Backend разработчик</p>
            <p className='Footer__frontend'>Frontend разработчик</p>
            <p className='Footer__mobile'> Мобильная разработка</p>
            <p className='Footer__CMM'>CMM Курсы</p>
          </div>
          <div className='Footer__crown'>
            <h6 className='Footer__adres'>Адрес</h6>
            <p className='Footer__kelechek'>Келечек, ТЦ <br /> Корона - 1 этаж</p>
          </div>
          <div className='Footer__allContacts'>
            <h6 className='Footer__contact'>Контакты</h6>
            <p className='Footer__brotherNum'>+ 996 771 830 438</p>
            <p className='Footer__sisterNum'>+ 996 708 914 481</p>
          </div>
        </div>
        <div className='Footer__smallBlock'>
          <img className='Footer__whatsapp' src={whatsapp} alt="" />
          <img className='Footer__youtube' src={youtube} alt="" />
          <img className='Footer__insta' src={insta} alt="" />
          <img className='Footer__telegram' src={telegram} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
