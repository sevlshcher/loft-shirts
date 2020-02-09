(() => {

  let elem = document.querySelector('.products__list');
  let iso = new Isotope( elem, {
    itemSelector: '.products__item',
    filter: '.green'
  });

  let infoElem = document.querySelector('.info__section');
  let infoIso = new Isotope( infoElem, {
    itemSelector: '.info__section--item',
    filter: '.desc'
  });

  const circlesList = document.querySelector('.desc__list--circles');
  const circleItemsList = document.querySelectorAll('.desc__item--circle');
  const activeCircle = 'desc__item--circle-active';

  const sizesList = document.querySelector('.desc__list--sizes');
  const sizeItemsList = document.querySelectorAll('.desc__item--sizes');
  const activeSize = 'desc__item--sizes-active';

  const tabsList = document.querySelector('.tabs');
  const tabItemsList = document.querySelectorAll('.tab__item');
  const activeTab = 'tab__item--active';

  const buyBtn = document.querySelector('.btn');
  buyBtn.onclick = e => e.preventDefault();

  circlesList.onclick = e => {
    e.preventDefault();
    const target = e.target.closest('.desc__item--circle');
    const filterName = e.target.dataset.color;
    getActiveClass(circleItemsList, target, activeCircle);
    iso.arrange({
      filter: `.${filterName}`
    })
  };

  sizesList.onclick = e => {
    e.preventDefault();
    const target = e.target.closest('.desc__item--sizes');
    if (e.target.closest('.desc__item--sizes-nosize')) return false;
    getActiveClass(sizeItemsList, target, activeSize);
  };

  tabsList.onclick = e => {
    e.preventDefault();
    const target = e.target.closest('.tab__item');
    const tabFilter = e.target.dataset.info;
    getActiveClass(tabItemsList, target, activeTab);
    infoIso.arrange({
      filter: `.${tabFilter}`
    })
  };

  function getActiveClass(itemsList, target, activeClass) {
    itemsList.forEach(item => {
      item.classList.remove(activeClass);
    });
    target.classList.add(activeClass);
  };
})();