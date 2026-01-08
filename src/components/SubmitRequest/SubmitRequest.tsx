import style from './SubmitRequest.module.scss'
import backImg from '@/assets/images/SubmitRequest/zero-take-WvHrrR1C5Po-unsplash 2.jpg'

export default function SubmitRequest() {
  return (
    <div className={style.background}>
      <div
        className={style.background_Image}
        style={{ backgroundImage: `url(${backImg}) ` }}
      >
        <div className={style.block}>
          <div className="block_Email">
            <h3>Submit a request and we will assist you with your project</h3>
            <div className={style.input_button}>
              <input className={style.input} type="text" placeholder="Enter your email" />
              <button className={style.button}>
                <p>SUBMIN A REQUEST</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
