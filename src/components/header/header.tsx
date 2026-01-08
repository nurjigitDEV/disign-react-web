import style from './header.module.scss'
import phoneSvg from '@assets/svgs/header/phone.svg'

export default function Header() {
  return (
    <header className={style.header}>
      <ul className={style.list_Buttons}>
        <li>
          <a href="#">ABOUT STUDIO</a>
        </li>
        <li style={{ marginLeft: '21px' }}>
          <a href="#">PRICES</a>
        </li>
        <li style={{ marginLeft: '40px' }}>
          <a href="#">PROJECTS</a>
        </li>
        <li style={{ marginLeft: '27px' }}>
          <a href="#">CONTACTS</a>
        </li>
      </ul>
      <a href="#" className={style.title}>
        <span>FORMA STUDIO</span>
      </a>
      <a href="#" className={style.phone_Number}>
        <img src={phoneSvg} alt="svg" />
        +38 (068) 255 45 85
      </a>
    </header>
  )
}
