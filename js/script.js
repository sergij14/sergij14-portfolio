const itemsContainer = document.querySelector(".portfolio__row");

const getItems = async function () {
  const resp = await fetch("./items.json");
  const data = await resp.json();
  const items = data.items;
  renderItems(items);
};

const renderItems = function (items) {
  items.forEach((item) => {
    const { title, description, img, fonts, files, icons, api, link } = item;
    itemsContainer.insertAdjacentHTML(
      "beforeend",
      ` 
    <div class="portfolio__item mar-b-2">
    <div class="portfolio__item__img">
    <a target="_blank" href="${link}">
     <img src="${img}" alt="${title}">
     </a>
      <a class="btn" target="_blank" target="_blank" href="${link}">View Demo</a>
    </div>
    <div class="portfolio__item__info pad-1">
    <p>${description}</p>
    <span>Files: ${files}</span>
    <span>Fonts: ${fonts}</span>
    <span>Icons: ${icons ? icons : "No Icons"}</span>
    <span>API: ${api ? api : "No API"}</span>
    </div>
    <h4><a target="_blank" href="${link}">${title}</a></h4>
    </div>
    `
    );
  });
};

getItems();
