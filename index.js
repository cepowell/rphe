var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/gallery', function(req, res) {
  var images = [
    { url: 'img/carousel/carousel1.png', index: 1 },
    { url: 'img/carousel/carousel2.jpg', index: 2 },
    { url: 'img/carousel/carousel3.jpg', index: 3 },
    { url: 'img/carousel/carousel4.jpg', index: 4 },
    { url: 'img/carousel/carousel5.jpg', index: 5 },
    { url: 'img/carousel/carousel6.jpg', index: 6 },
    { url: 'img/carousel/carousel7.jpg', index: 7 },
    { url: 'img/carousel/carousel8.jpg', index: 8 },
    { url: 'img/carousel/carousel9.jpg', index: 9 },
    { url: 'img/carousel/carousel10.jpg', index: 10 },
    { url: 'img/carousel/carousel11.jpg', index: 11 },
    { url: 'img/carousel/carousel12.jpg', index: 12 },
    { url: 'img/carousel/carousel13.jpg', index: 13 },
    { url: 'img/carousel/carousel14.jpg', index: 14 },
    { url: 'img/carousel/carousel15.jpg', index: 15 },
    { url: 'img/carousel/carousel16.jpg', index: 16 },
    { url: 'img/carousel/carousel17.jpg', index: 17 },
    { url: 'img/carousel/carousel18.jpg', index: 18 },
    { url: 'img/carousel/carousel19.jpg', index: 19 },
    { url: 'img/carousel/carousel20.jpg', index: 20 },
    { url: 'img/carousel/carousel21.jpg', index: 21 },
    { url: 'img/carousel/carousel22.jpg', index: 22 },
    { url: 'img/carousel/carousel23.jpg', index: 23 },
    { url: 'img/carousel/carousel24.jpg', index: 24 },
    { url: 'img/carousel/carousel25.jpg', index: 25 },
    { url: 'img/carousel/carousel26.jpg', index: 26 },
    { url: 'img/carousel/carousel27.jpg', index: 27 },
    { url: 'img/carousel/carousel28.jpg', index: 28 },
    { url: 'img/carousel/carousel29.jpg', index: 29 },
    { url: 'img/carousel/carousel30.jpg', index: 30 }
  ];
  res.render('gallery', {
    images: images,
  });
});

app.get('/what-we-do', function(req, res) {
  res.render('what-we-do');
});

app.get('/who-we-are', function(req, res) {
  var bios = [
    { name: 'Trudy Hilton',
      title: 'Co-Founder & Co-Director',
      bio: 'Trudy Hilton is a community activist and assistant Director to Familias Saludables, the only HIV clinic in Roatán, Honduras. Trudy completed her academic training in international relations in Colorado and has worked in the field of youth education.',
      picture: 'img/team/trudy.jpeg',
    },
    { name: 'Daniela Brissett',
      title: 'Co-Founder & Co-Director',
      bio: 'Daniela Brissett is a medical student at the University of California, San Francisco. Daniela has worked in the field of maternal, adolescent, and child health in Honduras and as a researcher and teacher in the San Francisco Bay Area.',
      picture: 'img/team/daniela.jpeg',
    },
    { name: 'Kristiana Lehn',
      title: 'Honduran Assistant Director',
      picture: 'img/team/kristiana.jpeg',
    },
    { name: 'Ana Murillo',
      title: 'Assistant Social Media Director',
      picture: 'img/team/ana.jpeg',
    },
    { name: 'Brittany Morgan',
      title: 'U.S.A Community Liason',
      picture: 'img/team/brittany.jpg',
    },
  ];
  var partners = [
    { name: 'Esbir Roatán',
      picture: 'img/team/partner1.png',
    },
    { name: 'Escuela Juan Brooks',
      picture: 'img/team/partner2.jpg',
    },
    { name: 'Familias Saludables',
      picture: 'img/team/partner3.jpg',
    },
    { name: 'Sol International',
      picture: 'img/team/partner4.jpg',
    },
  ];
  res.render('who-we-are', {
    bios: bios,
    partners: partners
  });
});

app.get('/stories', function(req, res) {
  var stories = [
    { name: 'Frida Kahlo',
      summary: 'Painter',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      picture: 'img/team/trudy.jpeg',
      index: 1,
    },
    { name: 'Sonia Sotomayor',
      summary: 'Supreme Court Justice',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      picture: 'img/team/trudy.jpeg',
      index: 2,
    }
  ];
  res.render('stories', {
    stories: stories
  });
});

app.listen(port, function () {
  console.log('Application is running on http://localhost:' + port);
});
