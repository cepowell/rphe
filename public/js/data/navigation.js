var english_nav = {
  choose: 'Choose Your Language',
  languages: [
    { name: 'English',
      url: '/',
    },
    { name: 'Spanish',
      url: '/sp',
    },
  ],
  controls: [
    { name: 'Home',
      url: '/',
    },
    { name: 'What We Do',
      url: '/what-we-do',
    },
    { name: 'Who We Are',
      url: '/who-we-are',
    },
    { name: 'Gallery',
      url: '/gallery',
    },
    //{ name: 'Stories',
      //url: '/stories',
    //}
  ],
};

var spanish_nav = {
  choose: 'Elija Su Idioma',
  languages: [
    { name: 'Inglés',
      url: '/',
    },
    { name: 'Español',
      url: '/sp',
    },
  ],
  controls: [
    { name: 'Inicio',
      url: '/sp',
    },
    { name: 'Sobre Nosotros',
      url: '/sp/what-we-do',
    },
    { name: 'Nuestro Equipo',
      url: '/sp/who-we-are',
    },
    { name: 'Galería',
      url: '/sp/gallery',
    },
    //{ name: 'Historias',
      //url: '/sp/stories',
    //}
  ],
};

exports.english_nav = english_nav;
exports.spanish_nav = spanish_nav;
