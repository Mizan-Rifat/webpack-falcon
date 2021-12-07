import Swiper from 'swiper';

/*-----------------------------------------------
|  Swiper
-----------------------------------------------*/
const swiperInit = () => {
  const swipers = document.querySelectorAll('[data-swiper]');
  console.log({ swipers });
  const navbarVerticalToggle = document.querySelector('.navbar-vertical-toggle');
  swipers.forEach(swiper => {
    // const options = utils.getData(swiper, 'swiper');
    const thumbsOptions = false;
    let thumbsInit;
    if (thumbsOptions) {
      const thumbImages = swiper.querySelectorAll('img');
      let slides = '';
      thumbImages.forEach(img => {
        slides += `
          <div class='swiper-slide '>
            <img class='img-fluid rounded mt-1' src=${img.src} alt=''/>
          </div>
        `;
      });

      const thumbs = document.createElement('div');
      thumbs.setAttribute('class', 'swiper-container thumb');
      thumbs.innerHTML = `<div class='swiper-wrapper'>${slides}</div>`;

      if (thumbsOptions.parent) {
        const parent = document.querySelector(thumbsOptions.parent);
        parent.parentNode.appendChild(thumbs);
      } else {
        swiper.parentNode.appendChild(thumbs);
      }

      thumbsInit = new Swiper(thumbs, thumbsOptions);
    }

    const swiperNav = swiper.querySelector('.swiper-nav');
    const newSwiper = new Swiper(swiper, {
      // ...options,
      navigation: {
        nextEl: swiperNav?.querySelector('.swiper-button-next'),
        prevEl: swiperNav?.querySelector('.swiper-button-prev')
      }
      // thumbs: {
      //   swiper: thumbsInit
      // }
    });
    if (navbarVerticalToggle) {
      navbarVerticalToggle.addEventListener('navbar.vertical.toggle', () => {
        newSwiper.update();
      });
    }
  });
};

// swiperInit();

console.log('asdfsad');

const docReady = fn => {
  // see if DOM is already available
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    setTimeout(fn, 1);
  }
};

docReady(swiperInit);

// export default swiperInit;
