(() => {

  let elem = document.querySelector('.products__list');
  let iso = new Isotope( elem, {
    itemSelector: '.products__item',
    filter: '.popular'
  });

  const filterList = document.querySelector('.filter');
  const filterListItems = document.querySelectorAll('.filter__item');
  const activeClass = 'filter__item--active';

  filterList.onclick = e => {
    e.preventDefault();
    let target = e.target.closest('.filter__item');
    const filterName = e.target.getAttribute('data-filter');
    getActiveClass(target);
    iso.arrange({
      filter: `.${filterName}`
    })
  };

  function getActiveClass(target) {
    filterListItems.forEach(item => {
      item.classList.remove(activeClass);
    });
    target.classList.add(activeClass);
  };
})();