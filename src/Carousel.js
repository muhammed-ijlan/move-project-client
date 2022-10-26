import { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, EffectFade } from "swiper"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import style from "./App.module.css"

function Carousel() {
    return (
        <div>
            <Swiper
                modules={[Navigation, EffectFade]}
                navigation
                effect={"fade"}
                speed={800}
                slidesPerView={1}
                loop
                className={style.mySwiper}
            >
                <SwiperSlide>

                    <img className={style.swiperImage} src='https://cdn.wallpapersafari.com/96/89/4ymkze.jpg' />
                </SwiperSlide>

                <SwiperSlide>

                    <img className={style.swiperImage} src='https://goggler.my/wp-content/uploads/2019/12/JM2_INTL_30Sht_BRIDGE_03-e1575889045252.jpg' />
                </SwiperSlide>
                <SwiperSlide>

                    <img className={style.swiperImage} src='https://wallpapercave.com/wp/wp6157135.jpg' />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Carousel