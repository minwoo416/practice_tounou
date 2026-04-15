const cate = document.querySelectorAll('.all_product_container .all_cate_wrap li button');
const allProduct = document.querySelectorAll('.all_product_list_wrap .swiper');
console.log(cate, allProduct);
cate.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
        cate.forEach((b)=>{
            b.classList.remove('active');
        })
        btn.classList.add('active');
        allProduct.forEach((s,index)=>{
            if(i == index){
                s.style.display = 'block';
                const swiperInstance = s.swiper;
                swiperInstance.slideTo(0);
                swiperInstance.update();
            }else {
                s.style.display = 'none';
            }
        })
    })
})





const bannerSwiper = new Swiper('.banner_container .banner_wrap', {

})
const tasteSwiper = new Swiper('.taste_list_wrap',{
    slidesPerView:3.4,
    loop:true,
    slidesPerGroup: 1,
})
const reviewSwiper = new Swiper('.review_list_wrap',{
    slidesPerView:2,
    spaceBetween:30,
    navigation: {
        nextEl: '.review_container .swiper-button-next',
        prevEl: '.review_container .swiper-button-prev',
    },
})
const allSwiper = new Swiper('.all_product_list_wrap .swiper',{
    slidesPerView:4,
    spaceBetween:73.33,
    navigation: {
        nextEl: '.all_product_list_wrap .swiper-button-next',
        prevEl: '.all_product_list_wrap .swiper-button-prev',
    },
})
