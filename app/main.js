


const setUIProps = () => {
    ui.innerHeight = window.innerHeight;
    ui.innerWidth = window.innerWidth;
    ui.sidebarWidth = document.querySelector('.aside').clientWidth;
};

//
const renderFirstMenu = () => {
    const menuHolder = document.querySelector('.aside_links_01');
    let htmlString = "";

    // filtro
    const menuLevel0 = [];
    for (let i = 0; i < menu.length; i++) {
        if (
            menu[i].menuLevel == 0 &&
            menu[i].menu.hidden == false
        ) {
            menuLevel0.push(menu[i]);
        }
    }

    // reduccion
    for (let i = 0; i < menuLevel0.length; i++) {
        htmlString += `
            <li class="aside_item ${menuLevel0[i].active ? "active" : ""}">
                <a href="${menuLevel0[i].href}">
                    <div class="aside_item_icon">
                        <span class="material-icons">${menuLevel0[i].icon}</span>
                    </div>
                    <div class="aside_item_label">
                        <h3>${menuLevel0[i].title}</h3>
                    </div>
                </a>
            </li>
        `;
    }

    menuHolder.innerHTML = htmlString;
};


//
const renderSecondMenu = () => {
    const menuHolder = document.querySelector('.aside_links_02');
    let htmlString = "";

    // filtro
    const menuLevel1 = [];
    for (let i = 0; i < menu.length; i++) {
        if (
            menu[i].menuLevel == 1 &&
            menu[i].menu.hidden == false
        ) {
            menuLevel1.push(menu[i]);
        }
    }

    // reduccion
    for (let i = 0; i < menuLevel1.length; i++) {
        htmlString += `
            <li class="aside_item ${menuLevel1[i].active ? "active" : ""}">
                <a href="${menuLevel1[i].href}">
                    <div class="aside_item_icon">
                        <span class="material-icons">${menuLevel1[i].icon}</span>
                    </div>
                    <div class="aside_item_label">
                        <h3>${menuLevel1[i].title}</h3>
                    </div>
                </a>
            </li>
        `;
    }

    menuHolder.innerHTML = htmlString;
};


const renderVideos = () => {
    // seleccionar DOM donde inycto

    // init vars

    // operaciones de array (mapeo, filtrado, reduccion)

    // innerHTML
};



setUIProps();
renderFirstMenu();
renderSecondMenu();