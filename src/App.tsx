import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";

function App() {
  return (
    <div className="sample-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true, el: ".dot" }}
        autoplay={{ delay: 4000 }}
        speed={500}
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
        breakpoints={{
          // ウィンドウの幅が 480px 以上の場合
          480: { slidesPerView: 1.5 },
        }}
        // スライドが表示された最初の1回に実行されます。
        onSwiper={() => console.log("スライドが生成されました")}
        // スライドが切り替わるたび実行される。
        onSlideChange={() => console.log("スライドが変更されました。")}
      >
        <SwiperSlide>
          <img src="./img/mainvisual1.jpg" alt="" width={1000} height={600} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/mainvisual2.jpg" alt="" width={1000} height={600} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/mainvisual3.jpg" alt="" width={1000} height={600} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/mainvisual4.jpg" alt="" width={1000} height={600} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/mainvisual5.jpg" alt="" width={1000} height={600} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/mainvisual6.jpg" alt="" width={1000} height={600} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/mainvisual7.jpg" alt="" width={1000} height={600} />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="./img/mainvisual2.jpg" alt="" />
        </SwiperSlide> */}
      </Swiper>

      <div className="swiper-pagination dot"></div>
    </div>
  );
}

export default App;
