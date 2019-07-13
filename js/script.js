"use strict";

function DomElement( height, width, bg){
    this.height = height;
    this.background = bg;
    this.width = width;
}

function Shape( height, width, bg, position){
    DomElement.apply(this, arguments); 
    this.position = position;
}


DomElement.prototype.shape = function(){
    let newItem = document.createElement('div'),
        left = 0,
        top = 0;
    newItem.style.cssText = 'height:'+ this.height +'; width:' + this.width +'; background:'+ this.background +'; position:'+ this.position;
    document.addEventListener("DOMContentLoaded", () => {
        document.body.appendChild(newItem);
        document.addEventListener('keydown', function(e){

           if(e.keyCode == 37){
                left -= 10;
                newItem.style.left = left +'px';
            }else if(e.keyCode == 39){
                left += 10;
                newItem.style.left = left +'px';
            }else if(e.keyCode == 38){
                top -= 10;
                newItem.style.top = top +'px';
            }else if(e.keyCode == 40){
                top += 10;
                newItem.style.top = top +'px';
            }
        });
    });   
}
Shape.prototype = Object.create(DomElement.prototype);
Shape.prototype.constructor = Shape;

let square = new Shape('100px','100px','green', 'absolute');
square.shape();









 