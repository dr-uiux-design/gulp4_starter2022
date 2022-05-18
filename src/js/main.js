// Импортируем функции
import * as flsFunctions from "./module/functions.js";
flsFunctions.isWebp();

import $ from "jquery";

// подключение стороних плагинов и библиотек Libs
// require('./vendor/test.js')

// Компоненты
import '../components/Preloader/_preloader.js';
import '../components/Btn-top/_btn-top.js';
// import '../components/Modal/_modal.js';
// import '../components/Accordion/_accordion.js';
// import '../components/Slick-slider/_slick-slider.js';
// import '../components/Tabs/_tabs.js';
// import '../components/Form/_inputMask.js';

// Пользовательские скрипты

// Burger Menu
// $('.burger').click(function(event){
//   $('.burger, .header__nav').toggleClass('active');
//   $('body').toggleClass('fixed-block');
// });

// Burger Menu
const button = document.querySelector('.burger') // находим кнопку для открытия/закрытия окна навигации
  const nav = document.querySelector('.header__nav') // находим окно навигации

  button.addEventListener('click', () => { // при клике на кнопку
    nav.classList.toggle('active')
    button.classList.toggle('active')
    // открываем/закрываем окно навигации, добаляя/удаляя класс active навигпции и кнопке бургера
    document.body.classList.toggle('dis-scroll'); // при открытом меню блокируем вертикальную прокрутку страницы
  })

  window.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target // находим элемент, на котором был клик
    if (!target.closest('.header__nav') && !target.closest('.burger')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
      nav.classList.remove('active') // то закрываем окно навигации, удаляя класс active
      button.classList.remove('active') // крестик превращаем в бургер
    }
  })

// Запрет перетаскивания ссылок и картинок
$("img, a").on("dragstart", function(event) { event.preventDefault(); });

// Отправка заявки на почту
//E-mail Ajax Send
// $("form").submit(function () { //Change
//   var th = $(this);
//   $.ajax({
//     type: "POST",
//     url: "mail.php", //Change
//     data: th.serialize()
//   }).done(function () {
//     window.location = "./thank-you.html";
//   });
//   return false;
// });
