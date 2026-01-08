import { data } from '@/data/DataOurServices'
import style from './Our Services.module.scss'
import { useEffect } from 'react'
import AOS from 'aos'

export default function OurServices() {
  const text = data

  useEffect(() => {
    AOS.init({
      offset: 120, // отступ перед началом анимации
      duration: 1000, // длительность
      easing: 'ease-in-cubic', // тип анимации
      delay: 300, // задержка
      mirror: false, // повторяет анимацию при обратном скролле
    })
  }, [])

  return (
    <div className={style.background}>
      <h3 className={style.title}>Our Services</h3>
      <div className={style.table}>
        {text.map((el, index) => (
          <div data-aos="fade-up" key={index} className={style.block}>
            <p className={style.blocktitle}>{el.title}</p>
            <p className={style.blockDescription}>{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
