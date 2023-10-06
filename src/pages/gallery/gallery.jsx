import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import pic from '../../Assets/10.jpg'
import pic2 from '../../Assets/23.jpg'
import alien from '../../Assets/alien.jpg'
import me from '../../Assets/me.jpg'
import jor from '../../Assets/jordan.jpg'
import { Autoplay, EffectCube, Pagination, Navigation } from 'swiper/modules'

import './gallery.scss'

function Gallery() {
  let imgs = [alien, pic2, pic, me, jor]

  return (
    <div className="pages">
      <h1>Gallery Page</h1>
      <div>
        <Swiper
          effect={'cube'}
          loop={true}
          navigation={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500
          }}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 50,
            shadowScale: 0.94
          }}
          modules={[Autoplay, EffectCube, Navigation, Pagination]}
          className="mySwiper"
        >
          {imgs.map((img) => (
            <SwiperSlide className="slide" key={img}>
              <img src={img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Gallery
