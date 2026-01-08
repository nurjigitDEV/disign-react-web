import style from './footer.module.scss'

import Csvg from '@assets/svgs/footer/C.svg'
import GPSsvg from '@assets/svgs/footer/GPS.svg'
import Phonesvg from '@assets/svgs/footer/phone.svg'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.title}>
        <h1>
          <p>Forma</p>
          <p>Studio</p>
        </h1>
        <div className={style.title_year}>
          <img src={Csvg} alt="img" />
          <p className="">2010-2025 Bureau</p>
        </div>
      </div>

      <div className={style.blocks}>
        <div className={style.flex_block}>
          <a href="#">About studio</a>
          <a href="#">PRICES</a>
          <a href="#">PROJECTS</a>
          <a href="#">CONTACTS</a>
        </div>

        <div className={style.flex_block}>
          <a href="#">Interior Design</a>
          <a href="#">Architectural Design</a>
          <a href="#">Author’s Supervision</a>
          <a href="#">Turnkey Projects</a>
        </div>
        <div className={style.flex_block}>
          <a href="#">formastudio@gmail.com</a>
          <a href="#">formastudio</a>
          <a href="#">forma.studio</a>
          <a href="#">@forma.studio</a>
          <a href="#">forma.studio</a>
        </div>

        <div>
          <div className={style.svg_text}>
            <div className={style.image}>
              <img src={GPSsvg} alt="img" />
            </div>
            <a href="#">
              <p>Bishkek,</p>
              <p>Chyi 4565</p>
            </a>
          </div>
          <div className={style.svg_text_2}>
            <div className={style.image}>
              <img src={Phonesvg} alt="img" />
            </div>
            <div>
              <a href="#">
                <p>+38 (068) 255 45 85</p>
              </a>
              <div className={style.text_block}>
                <p>Working hours:</p>
                <p>Mon–Fri</p>
                <p>from 9:00 до 17:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
