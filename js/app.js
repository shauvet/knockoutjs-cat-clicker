
const originCats = [
  {
    clickCount: 0,
    name: 'cat1',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    nicknames: ['cata', 'catb']
  },
  {
    clickCount: 0,
    name: 'cat2',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    nicknames: ['catc', 'catd']
  },
  {
    clickCount: 0,
    name: 'cat3',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    nicknames: ['cate', 'catf']
  },
  {
    clickCount: 0,
    name: 'cat4',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    nicknames: ['catg', 'cath', 'cati']
  },
  {
    clickCount: 0,
    name: 'cat5',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    nicknames: ['catl', 'catm', 'catn']
  }
];

let Cat = function (cat) {
  this.clickCount = ko.observable(cat.clickCount);
  this.name = ko.observable(cat.name);
  this.imgSrc = ko.observable(cat.imgSrc);
  this.nicknames = ko.observableArray(cat.nicknames);

  this.title = ko.computed(() => {
    let title;
    let clicks = this.clickCount();
    if (clicks < 3) {
      title = 'haha'
    }
    else if (clicks < 6) {
      title = 'hehe'
    }
    else if (clicks < 10) {
      title = 'heihei'
    }
    return title;
  }, this);
};

let ViewModel = function() {

  this.catList = ko.observableArray([]);
  
  originCats.forEach((cat) => {
    this.catList.push(new Cat(cat));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.checkOneCat = (cat) => {
    this.currentCat(cat);
  };

  this.incrementCounter = () => {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  }
};

ko.applyBindings(new ViewModel());