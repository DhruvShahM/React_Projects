import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const data=useGlobalContext();
  return <section className='hero'>
    <div className="hero-center">
      <article className='hero-info'>
      <h1>Payment Infrastructure for the internet</h1>
      </article>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas error sint fuga, maiores aut debitis quaerat suscipit enim itaque eveniet. Dolore reprehenderit dolorum accusamus quis deserunt explicabo eligendi eius?</p>
      <button className="btn">
        Start now
      </button>
      <article className='hero-images'>
        <img src={phoneImg} className='phone-img' alt="phone" />
      </article>

    </div>
  </section>
}

export default Hero
