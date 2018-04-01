var homeData = require('./public/js/data/home');
var navData = require('./public/js/data/navigation');
var footerData = require('./public/js/data/footer');
var whatWeDo = require('./public/js/data/what-we-do');
var whoWeAre = require('./public/js/data/who-we-are');
var gallery = require('./public/js/data/gallery');
var stories = require('./public/js/data/stories');
var images = require('./public/js/data/images');

module.exports = function(app) {

  // ENGLISH HOME PAGE ROUTE
  app.get('/', function(req, res) {
    res.render('index', {
      data: homeData.english_home,
      nav: navData.english_nav,
      footer: footerData.english_footer,
      languages: [
        { name: 'English',
          url: '/',
        },
        { name: 'Spanish',
          url: '/sp',
        },
      ],
    });
  });

  // SPANISH HOME PAGE ROUTE
  app.get('/sp', function(req, res) {
    res.render('index', {
      data: homeData.spanish_home,
      nav: navData.spanish_nav,
      footer: footerData.spanish_footer,
      languages: [
        { name: 'Inglés',
          url: '/',
        },
        { name: 'Español',
          url: '/sp',
        },
      ],
    });
  });

  // ENGLISH WHAT WE DO ROUTE
  app.get('/what-we-do', function(req, res) {
    res.render('what-we-do', {
      data: whatWeDo.english_whatwedo,
      nav: navData.english_nav,
      footer: footerData.english_footer,
      languages: [
        { name: 'English',
          url: '/what-we-do',
        },
        { name: 'Spanish',
          url: '/sobre-nosotros',
        },
      ],
    });
  });

  // SPANISH WHAT WE DO ROUTE
  app.get('/sobre-nosotros', function(req, res) {
    res.render('what-we-do', {
      data: whatWeDo.spanish_whatwedo,
      nav: navData.spanish_nav,
      footer: footerData.spanish_footer,
      languages: [
        { name: 'Inglés',
          url: '/what-we-do',
        },
        { name: 'Español',
          url: '/sobre-nosotros',
        },
      ],
    });
  });

  // ENGLISH WHO WE ARE ROUTE
  app.get('/who-we-are', function(req, res) {
    res.render('who-we-are', {
      data: whoWeAre.english_whoweare,
      nav: navData.english_nav,
      footer: footerData.english_footer,
      languages: [
        { name: 'English',
          url: '/who-we-are',
        },
        { name: 'Spanish',
          url: '/nuestro-equipo',
        },
      ],
    });
  });

  // SPANISH WHO WE ARE ROUTE
  app.get('/nuestro-equipo', function(req, res) {
    res.render('who-we-are', {
      data: whoWeAre.spanish_whoweare,
      nav: navData.spanish_nav,
      footer: footerData.spanish_footer,
      languages: [
        { name: 'Inglés',
          url: '/who-we-are',
        },
        { name: 'Español',
          url: '/nuestro-equipo',
        },
      ],
    });
  });

  // ENGLISH GALLERY ROUTE
  app.get('/gallery', function(req, res) {
    res.render('gallery', {
      images: images.images,
      data: gallery.english_gallery,
      nav: navData.english_nav,
      footer: footerData.english_footer,
      languages: [
        { name: 'English',
          url: '/gallery',
        },
        { name: 'Spanish',
          url: '/galeria',
        },
      ],
    });
  });

  // SPANISH GALLERY ROUTE
  app.get('/galeria', function(req, res) {
    res.render('gallery', {
      images: images.images,
      data: gallery.spanish_gallery,
      nav: navData.spanish_nav,
      footer: footerData.spanish_footer,
      languages: [
        { name: 'Inglés',
          url: '/gallery',
        },
        { name: 'Español',
          url: '/galeria',
        },
      ],
    });
  });

  // ENGLISH STORIES ROUTE
  app.get('/stories', function(req, res) {
    res.render('stories', {
      data: stories.english_stories,
      nav: navData.english_nav,
      footer: footerData.english_footer,
      languages: [
        { name: 'English',
          url: '/stories',
        },
        { name: 'Spanish',
          url: '/historias',
        },
      ],
    });
  });

  // SPANISH STORIES ROUTE
  app.get('/historias', function(req, res) {
    res.render('stories', {
      data: stories.spanish_stories,
      nav: navData.spanish_nav,
      footer: footerData.spanish_footer,
      languages: [
        { name: 'Inglés',
          url: '/stories',
        },
        { name: 'Español',
          url: '/historias',
        },
      ],
    });
  });
}
