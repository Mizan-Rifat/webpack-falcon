/* -------------------------------------------------------------------------- */
/*                           Navbar vertical config                           */
/* -------------------------------------------------------------------------- */
const urlParams = new URLSearchParams(window.location.search);
const CONFIG = {
  isNavbarVerticalCollapsed: urlParams.get('isNavbarVerticalCollapsed') || false,
  theme: urlParams.get('theme') || 'light', // window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
  isRTL: urlParams.get('isRTL') || false,
  isFluid: urlParams.get('isFluid') || false,
  navbarStyle: urlParams.get('navbarStyle') || 'transparent',
  navbarPosition: urlParams.get('navbarPosition') || 'vertical'
};

Object.keys(CONFIG).forEach(key => {
  if (urlParams.get(key) || localStorage.getItem(key) === null) {
    localStorage.setItem(key, CONFIG[key]);
  }
});

if (!!JSON.parse(localStorage.getItem('isNavbarVerticalCollapsed'))) {
  document.documentElement.classList.add('navbar-vertical-collapsed');
}

if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}

const isRTL = JSON.parse(localStorage.getItem('isRTL'));

if (isRTL) {
  let linkDefault = document.getElementById('style-default');
  let userLinkDefault = document.getElementById('user-style-default');
  linkDefault.setAttribute('disabled', true);
  userLinkDefault.setAttribute('disabled', true);
  document.querySelector('html').setAttribute('dir', 'rtl');
} else {
  let linkRTL = document.getElementById('style-rtl');
  let userLinkRTL = document.getElementById('user-style-rtl');
  linkRTL.setAttribute('disabled', true);
  userLinkRTL.setAttribute('disabled', true);
}
