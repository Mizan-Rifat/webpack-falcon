import { getData, getOffset } from '../utils';

/* -------------------------------------------------------------------------- */
/*                                Scroll To Top                               */
/* -------------------------------------------------------------------------- */

const scrollToTop = () => {
  document
    .querySelectorAll('[data-anchor] > a, [data-scroll-to]')
    .forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        const el = e.target;
        const id = getData(el, 'scroll-to') || el.getAttribute('href');
        window.scroll({
          top:
            getData(el, 'offset-top') ??
            getOffset(document.querySelector(id)).top - 100,
          left: 0,
          behavior: 'smooth',
        });
        window.location.hash = id;
      });
    });
};

export default scrollToTop;
