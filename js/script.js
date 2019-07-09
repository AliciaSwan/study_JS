"use strict";

let books = document.querySelectorAll('.books'),
    blockOfBooks  = document.querySelectorAll('.book');
    

console.log(books, blockOfBooks);
books[0].insertBefore(blockOfBooks[1],blockOfBooks[0]);
books[0].insertBefore(blockOfBooks[4],blockOfBooks[3]);
books[0].insertBefore(blockOfBooks[2],null);

let changeImage = document.querySelector('body');
console.log(changeImage);
changeImage.setAttribute('style', "background-image:url('image/you-dont-know-js.jpg')");
blockOfBooks[2].h2 = 'Книга 3. this и Прототипы Объектов';
let title = document.getElementsByTagName('a');
console.log(title);
title[2].textContent = 'Книга 3. this и Прототипы Объектов';
let ad = document.querySelector('.adv').remove();

let listUl = document.querySelectorAll('ul'),
    listLi = document.querySelectorAll('li');

    console.log(listUl, listLi);

    listUl[1].insertBefore(listLi[8],listLi[16]);
    listUl[1].insertBefore(listLi[14],listLi[10]);
    listUl[1].insertBefore(listLi[12],listLi[14]);
    listUl[4].insertBefore(listLi[45],listLi[38]);
    listUl[4].insertBefore(listLi[38],listLi[42]);
    listUl[4].insertBefore(listLi[41],listLi[44]);
    let newList = document.createElement('li');
    newList.textContent ='Глава 8: За пределами ES6';
    listUl[5].appendChild(newList);
    listUl[5].insertBefore(listLi[56],null);



