// Burger Menu
const button = document.querySelector('.burger') // находим кнопку для открытия/закрытия окна навигации
  const nav = document.querySelector('.header__nav') // находим окно навигации

  button.addEventListener('click', () => { // при клике на кнопку
    nav.classList.toggle('active')
    button.classList.toggle('active')
    // открываем/закрываем окно навигации, добаляя/удаляя класс active навигпции и кнопке бургера
  })

  window.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target // находим элемент, на котором был клик
    if (!target.closest('.header__nav') && !target.closest('.burger')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
      nav.classList.remove('active') // то закрываем окно навигации, удаляя класс active
    }
  })
