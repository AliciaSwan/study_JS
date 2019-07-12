"use strict";

function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.background = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.tag = function(){
     let firstLettre = this.selector[0],
         className = this.selector.slice(1),
         newElement;
    if(typeof(this.selector) === 'string' && firstLettre === '.'){
         newElement = document.createElement('div');
         newElement.className = className;
         newElement.style.cssText = 'height:'+ this.height +'; width:'+ this.width +'; background:'+ this.background+'; font-size:'+ this.fontSize;
      // newElement.style.height = this.height;
      // newElement.setAttribute('style', 'height:'+ this.height); 
    }else if(typeof(this.selector) === 'string' && firstLettre === '#'){
         newElement = document.createElement('p');
     }

    newElement.innerText='Новый элемент';
    document.body.appendChild(newElement);
};

let cssText = new DomElement('#box','50px','250px','red','12px');
cssText.tag();





 