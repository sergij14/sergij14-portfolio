import "regenerator-runtime/runtime";
import "core-js/stable";

const client = contentful.createClient({
  space: "5errz0iwjsls",
  accessToken: "M2fbKbJSZ1-Rk56Nd84fPGjuWNgqfIwXPhuQXCDAjb4",
});

const itemsContainer = document.querySelector(".portfolio__row");

const getItems = async function () {
  try {
    const contentful = await client.getEntries({ content_type: "portfolio" });
    let items = contentful.items;
    renderItems(items);
  } catch (err) {
    console.log(err);
  }
};

const renderItems = function (items) {
  items.forEach((item) => {
    const img = item.fields.img.fields.file.url;
    const { title, description, fonts, files, icons, api, link } = item.fields;

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
