
const ui = {
  menuOpened: true,
  sidebarWidth: 0, // 
  innerWidth: 0, // 
  innerHeight: 0, // 
  isOnline: true
};




const menu = [{
  title: "habitasse",
  icon: "video",
  href: "/feugiat/et.png",
  active: true,
  menuLevel: 1,
  menu: {
    mustHide: false,
    hidden: false
  }
}, {
  title: "sagittis",
  icon: "home",
  href: "/id/turpis/integer/aliquet.aspx",
  active: false,
  menuLevel: 1,
  menu: {
    mustHide: true,
    hidden: true
  }
}, {
  title: "Tendencias",
  icon: "fire",
  href: "/justo/maecenas/rhoncus.aspx",
  active: true,
  menuLevel: 0,
  menu: {
    mustHide: false,
    hidden: false
  }
}, {
  title: "vestibulum",
  icon: "home",
  href: "/cubilia/curae/mauris/viverra/diam/vitae/quam.html",
  active: false,
  menuLevel: 1,
  menu: {
    mustHide: true,
    hidden: false
  }
}, {
  title: "dui",
  icon: "home",
  href: "/turpis/enim/blandit/mi/in/porttitor.png",
  active: false,
  menuLevel: 1,
  menu: {
    mustHide: true,
    hidden: false
  }
}, {
  title: "sapien",
  icon: "fire",
  href: "/venenatis.jsp",
  active: false,
  menuLevel: 1,
  menu: {
    mustHide: true,
    hidden: true
  }
}, {
  title: "fusce",
  icon: "video",
  href: "/sed/interdum/venenatis.js",
  active: false,
  menuLevel: 0,
  menu: {
    mustHide: false,
    hidden: false
  }
}, {
  title: "nisi",
  icon: "video",
  href: "/amet/justo.html",
  active: true,
  menuLevel: 0,
  menu: {
    mustHide: false,
    hidden: false
  }
}, {
  title: "nulla",
  icon: "fire",
  href: "/tempus/vivamus/in/felis/eu.aspx",
  active: true,
  menuLevel: 0,
  menu: {
    mustHide: true,
    hidden: true
  }
}, {
  title: "luctus",
  icon: "home",
  href: "/lectus.jsp",
  active: false,
  menuLevel: 1,
  menu: {
    mustHide: true,
    hidden: true
  }
}, {
  title: "nec",
  icon: "video",
  href: "/aliquam/lacus.png",
  active: true,
  menuLevel: 1,
  menu: {
    mustHide: false,
    hidden: true
  }
}, {
  title: "posuere",
  icon: "fire",
  href: "/montes/nascetur/ridiculus/mus/vivamus.jpg",
  active: true,
  menuLevel: 0,
  menu: {
    mustHide: false,
    hidden: true
  }
}, {
  title: "aenean",
  icon: "home",
  href: "/phasellus/sit/amet/erat/nulla.jsp",
  active: true,
  menuLevel: 0,
  menu: {
    mustHide: true,
    hidden: true
  }
}, {
  title: "eros",
  icon: "fire",
  href: "/ac/consequat/metus.jsp",
  active: true,
  menuLevel: 1,
  menu: {
    mustHide: true,
    hidden: false
  }
}, {
  title: "suspendisse",
  icon: "home",
  href: "/dui/vel/nisl.js",
  active: true,
  menuLevel: 0,
  menu: {
    mustHide: false,
    hidden: true
  }
}];

// const menuOk = JSON.parse(menu_raw)


const videos = [
  {
    title: "título",
    visualizations: 5402,
    publishDate: new Date(2018, 10, 24, 14, 30),
    hasBeenSeen: true,
    percentageSeen: 30,
    imgVideo: "/path_to_image.png",
    time: 1232,

    isPlayList: false,
    author: {
      name: "author",
      isVerified: true,
      imgUrl: "/path_to_image.png",
      link: "user/to_author.html"
    },
    isBeenHovered: false,
    isMenuOpened: false
  },
  {
    title: "título",
    visualizations: 5402,
    publishDate: new Date(2018, 10, 24, 14, 30),
    hasBeenSeen: true,
    percentageSeen: 30,
    imgVideo: "/path_to_image.png",
    time: 1232,

    isPlayList: true,
    playListInfo: {
      authors: "author 1, author 2",
      amount: 50
    },
    isBeenHovered: false,
    isMenuOpened: false
  }
];


