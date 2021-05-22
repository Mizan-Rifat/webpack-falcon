import { Popover } from 'bootstrap';

var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new Popover(popoverTriggerEl);
});

console.log('asddsfsdfdsfdsfdsdsfa');
