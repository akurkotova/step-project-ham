const createGridItem = (itemData) => {
    return `<div class="grid-item" data-tag="${itemData.tag}">
    <img src="${itemData.location}"  alt="${itemData.tag}">
    <div class="grid-item-description">
        <div class="description-links">
            <a class="description-icon" href="${itemData.location}" target="_blank"><i class="fas fa-link"></i></a>
            <a class="description-icon" href="${itemData.location}" target="_blank"><i class="fas fa-search"></i></a>
        </div>
        <h3>creative design</h3>
        <p>${itemData.tag}</p>
    </div>
</div>`;
}

const listOfAmazingItems = [
    { tag: "graphic design", location: "./images/amazing work/graphic design/graphic-design1.jpg" },
    { tag: "graphic design", location: "./images/amazing work/graphic design/graphic-design2.jpg" },
    { tag: "graphic design", location: "./images/amazing work/graphic design/graphic-design3.jpg" },
    { tag: "graphic design", location: "./images/amazing work/graphic design/graphic-design4.jpg" },
    { tag: "graphic design", location: "./images/amazing work/graphic design/graphic-design5.jpg" },
    { tag: "graphic design", location: "./images/amazing work/graphic design/graphic-design6.jpg" },
    { tag: "graphic design", location: "./images/amazing work/graphic design/graphic-design7.jpg" },
    { tag: "graphic design", location: "./images/amazing work/graphic design/graphic-design8.jpg" },
    { tag: "graphic design", location: "./images/amazing work/graphic design/graphic-design9.jpg" },
    { tag: "graphic design", location: "./images/amazing work/graphic design/graphic-design10.jpg" },
    { tag: "graphic design", location: "./images/amazing work/graphic design/graphic-design11.jpg" },
    { tag: "graphic design", location: "./images/amazing work/graphic design/graphic-design12.jpg" },

    { tag: "web design", location: "./images/amazing work/web design/web-design1.jpg" },
    { tag: "web design", location: "./images/amazing work/web design/web-design2.jpg" },
    { tag: "web design", location: "./images/amazing work/web design/web-design3.jpg" },
    { tag: "web design", location: "./images/amazing work/web design/web-design4.jpg" },
    { tag: "web design", location: "./images/amazing work/web design/web-design5.jpg" },
    { tag: "web design", location: "./images/amazing work/web design/web-design6.jpg" },
    { tag: "web design", location: "./images/amazing work/web design/web-design7.jpg" },

    { tag: "landing page", location: "./images/amazing work/landing page/landing-page1.jpg" },
    { tag: "landing page", location: "./images/amazing work/landing page/landing-page2.jpg" },
    { tag: "landing page", location: "./images/amazing work/landing page/landing-page3.jpg" },
    { tag: "landing page", location: "./images/amazing work/landing page/landing-page4.jpg" },
    { tag: "landing page", location: "./images/amazing work/landing page/landing-page5.jpg" },
    { tag: "landing page", location: "./images/amazing work/landing page/landing-page6.jpg" },
    { tag: "landing page", location: "./images/amazing work/landing page/landing-page7.jpg" },

    { tag: "wordpress", location: "./images/amazing work/wordpress/wordpress1.jpg" },
    { tag: "wordpress", location: "./images/amazing work/wordpress/wordpress2.jpg" },
    { tag: "wordpress", location: "./images/amazing work/wordpress/wordpress3.jpg" },
    { tag: "wordpress", location: "./images/amazing work/wordpress/wordpress4.jpg" },
    { tag: "wordpress", location: "./images/amazing work/wordpress/wordpress5.jpg" },
    { tag: "wordpress", location: "./images/amazing work/wordpress/wordpress6.jpg" },
    { tag: "wordpress", location: "./images/amazing work/wordpress/wordpress7.jpg" },
    { tag: "wordpress", location: "./images/amazing work/wordpress/wordpress8.jpg" },
    { tag: "wordpress", location: "./images/amazing work/wordpress/wordpress9.jpg" },
    { tag: "wordpress", location: "./images/amazing work/wordpress/wordpress10.jpg" }
].sort(() => Math.random() - 0.5);

let currentItemsLoaded = 0;
const itemsPerLoad = 12;

const loadItems = () => {
    for (let i = currentItemsLoaded, j = 0; i < listOfAmazingItems.length && j < itemsPerLoad; i++, j++) {
        const itemData = listOfAmazingItems[i];
        const itemHtml = createGridItem(itemData);
        $(".grid").append(itemHtml);
        currentItemsLoaded++;
    }

    if (currentItemsLoaded >= listOfAmazingItems.length) {
        $(".amazing-work-content .button-load-more").hide();
    }
}

const filterPictures = (eventObject) => {
    eventObject.preventDefault();

    const tag = eventObject.target.getAttribute("data-tag");

    if (!tag) {
        $(".grid div.grid-item").show();
    } else {
        $(".grid div.grid-item").hide();
        $(`.grid div.grid-item[data-tag="${tag}"]`).show();
    }

    $(".pictures-filter li").removeClass();
    $(eventObject.target.parentNode).addClass("pictures-filter-selected");
}