var mongoose = require('mongoose');
var Porsche = require('./models/porscheModel');

var data = [
  {
    name: 'PORSCHE 356',
    nameExt: 'PORSCHE 356 PRÉ-A 1600 SPEEDSTER',
    year: '1954',
    images: [
    'http://www.hessclassic.com/app/uploads/2016/03/hessclassic-PORSCHE_356.png?82f50c',
    'http://www.hessclassic.com/app/uploads/2016/04/tmp-porsche-bg-3.jpg',
    'http://www.hessclassic.com/app/uploads/2016/04/tmp-porsche-6.jpg?82f50c',
    'http://www.hessclassic.com/app/uploads/2016/04/tmp-porsche-bg-4.jpg',
    'http://www.hessclassic.com/app/uploads/2016/04/tmp-porsche-5.jpg?82f50c'
   ],
    info: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.',
      'Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.',
      'James Dean rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ipsum dolor sit amet rem ipsum dolor sit amet.'
    ],
    histImage: ['http://1.bp.blogspot.com/-dP7fOD9ZDXg/UJuamwLA1KI/AAAAAAAAS3I/Ir7c2pAnV8A/s1600/James-Dean-Porsche-356-Speedster.jpg'],
  },
  {
    name: 'PORSCHE 911',
    nameExt: 'PORSCHE 911 Coupe',
    year: '1965',
    images: [
    '/imgs/p911White-1.png',
    '/imgs/p911White-2.jpg',
    '/imgs/p911White-3.jpg',
    '/imgs/p911White-4.jpg',
    '/imgs/p911White-5.jpg'
   ],
    info: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.',
      'Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.',
      'Reese Lindel rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ipsum dolor sit amet rem ipsum dolor sit amet.'
    ],
    histImage: ['/imgs/p911White-hist.jpg'],
  }
]

function seedDB(){
  Porsche.remove({}, function(err, items){
    if(err){
      console.log(err);
    } else {
      console.log('Items Removed');
      data.forEach(function(item){
        Porsche.create(item, function(err, carItem){
          if(err) {
            console.log(err);
          } else {
            console.log('Created');
            carItem.save();
          }
        })
      })
    }
  })
}

module.exports = seedDB;
