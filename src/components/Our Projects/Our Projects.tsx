import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { useRef } from 'react'
import style from './Our Projects.module.scss'
import { DataOurProjects } from '@/data/DataOurProjects'

import leftSvg from '@assets/svgs/OurProject/left.svg'
import rightSvg from '@assets/svgs/OurProject/right.svg'

export default function OurProjects() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const data = DataOurProjects
  return (
    <div className={style.background}>
      <h3 className={style.title}>Our Projects</h3>

      <div className={style.swiper}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={3.5}
          // slidesPerView="auto"
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          centeredSlides={false}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }
          }}
          // breakpoints={{
          //   768: { slidesPerView: 2 },
          //   1024: { slidesPerView: 3 },
          //   1440: { slidesPerView: 4 },
          // }}
        >
          {data.map((e) => (
            <SwiperSlide>
              <div className={style.block}>
                <div>
                  <img src={e.img} alt="img" className={style.block_img} />
                  <h6 className={style.block_title}>{e.title}</h6>
                  <p className={style.block_title_text}>{e.title_text}</p>
                  <p className={style.block_text}>{e.text}</p>
                </div>
                <div className={style.div_block_button}>
                  <button className={style.block_button}>
                    <p>More</p>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className={style.arrows}>
            <button ref={prevRef} className={style.button}>
              <img src={leftSvg} alt="svg" />
            </button>
            <button ref={nextRef} className={style.button}>
              <img src={rightSvg} alt="svg" />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  )
}
