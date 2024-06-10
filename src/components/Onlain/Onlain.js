import React from 'react'
import man2 from "../img/man2.png"

function Onlain() {
  return (
    <div className='Onlain'>
      <div className='container Onlain__container'>
        <div className='Onlain__block'>
          <div>
            <h3 className='Onlain__title'>NANO.IT ОНЛАЙН</h3>
            <p className='Onlain__sentence'>Откройте для себя мир <br /> возможностей в области <br /> программирования вместе с <br /> Nano.IT!</p>
          </div>
          <img className='Onlain__img' src={man2} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Onlain
