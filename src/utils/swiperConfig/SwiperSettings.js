import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
export const SwiperSettings = {
    modules: [Navigation, Pagination, Scrollbar, A11y],
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true,
    pagination: { clickable: false },
    scrollbar: { draggable: true },

}