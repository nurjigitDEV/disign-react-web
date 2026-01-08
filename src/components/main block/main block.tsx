import Header from '../header/header'
import style from './main block.module.scss'

export default function MainBlock() {
  return (
    <div className={style.main}>
      <Header />
      <div className={style.blockText}>
        <h1 >Architecture that shapes space</h1>
        <p className={style.text}>
          We create innovative and aesthetically refined spaces where comfort and
          functionality merge with contemporary design.
        </p>

        <button className={style.button}>
          <span className={style.buttonText}>Submit a request</span>
        </button>
      </div>
    </div>
  )
}
