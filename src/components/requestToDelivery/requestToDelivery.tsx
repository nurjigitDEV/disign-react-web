import image from '@assets/images/RequestToDelivery/Rectangle 189.jpg'
import style from './RequestToDelivery.module.scss'
import { data } from '@/data/DataRequestToDelivery'

export default function RequestToDelivery() {
  const text = data

  return (
    <div className={style.background}>
      <div>
        <h3 className={style.title}>from request to turnkey delivery</h3>
        <div className={style.blocks}>
          {text.map((el, index) => (
            <div key={index} className={style.block}>
              <div>
                <div className={style.number}>{index + 1}</div>
                {index == 7 ? <div></div> : <div className={style.line}></div>}
              </div>
              <div className={style.text}>
                <h6>{el.title}</h6>
                <p>{el.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img src={image} alt="img" />
      </div>
    </div>
  )
}
