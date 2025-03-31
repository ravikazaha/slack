const Namespace = require('../models/namespace.model');
const Room = require('../models/room.model');

const wikipedia = new Namespace(
  0,
  'wikipedia',
  'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png',
  '/wikipedia',
);

const mozilla = new Namespace(
  1,
  'mozilla',
  'https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png',
  '/mozilla',
);

const linux = new Namespace(
  2,
  'linux',
  'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png',
  '/linux',
);

const room = new Room(0, 'New Articles', 0);
const room1 = new Room(1, 'Editors', 0);
const room2 = new Room(2, 'Other', 0);

wikipedia.addRoom(room);
wikipedia.addRoom(room1);
wikipedia.addRoom(room2);

const room3 = new Room(3, 'Firefox', 1);
const room4 = new Room(4, 'SeaMonkey', 1);
const room5 = new Room(5, 'SpiderMonkey', 1);
const room6 = new Room(6, 'Rust', 1);

mozilla.addRoom(room3);
mozilla.addRoom(room4);
mozilla.addRoom(room5);
mozilla.addRoom(room6);

const room7 = new Room(7, 'Debian', 2);
const room8 = new Room(8, 'Ubuntu', 2);
const room9 = new Room(9, 'Arch Linux', 2);

linux.addRoom(room7);
linux.addRoom(room8);
linux.addRoom(room8);
linux.addRoom(room9);

const namespaces = [wikipedia, mozilla, linux];

module.exports = namespaces;
