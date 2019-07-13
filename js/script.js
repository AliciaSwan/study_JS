"use strict";

function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.background = bg;
    this.fontSize = fontSize;
}

// ----hard

function Shape(height, width, bg, position){
    DomElement.apply(this, arguments); 
    // this.width = width;
    // this.background = bg;
    this.position = position;
}


DomElement.prototype.shape = function(){
    let newItem = document.createElement('div');
    newItem.style.cssText = 'height:'+ this.height +'; width:' + this.width +'; background:'+ this.background +'; position:'+ this.position;
    document.addEventListener("DOMContentLoaded", () => {
        document.body.appendChild(newItem);
        document.addEventListener('keydown', function(e){
           // if(e.keyCode == 39){
                newItem.style.left = newItem.offsetLeft + (e.keyCode == 37 ? -10 : 10) + 'px';
           // }else if(e.keyCode == 40){
                newItem.style.top = newItem.offsetTop + (e.keyCode == 38 ? -10 : 10) + 'px';
          //  }/*else if(e.keyCode == 37){
                newItem.style.right = newItem.offsetRight + (e.keyCode == 39 ? 10 : -10) + 'px';
          //  }else if(e.keyCode == 38){
                newItem.style.bottom = newItem.offsetBottom + (e.keyCode == 40 ? 10 : -10) + 'px';
         //   }*/
 //           if(e.keyCode == 37){
            //     newItem.style.left = '10px';
            // }else if(e.keyCode == 39){
            //     newItem.style.right = '10px';
            // }else if(e.keyCode == 38){
            //     newItem.style.top = '10px';
            // }else if(e.keyCode == 40){
            //     newItem.style.bottom = '10px';
            // }
        });
    });   
}
Shape.prototype = Object.create(DomElement.prototype);
Shape.prototype.constructor = Shape;

let square = new Shape('100px', '100px', 'green', 'absolute');
square.shape();

window.onkeydown = function (event) {
    var code = event.keyCode || event.charCode;
    if (code != 37 && code != 39)
        return;
    var prop = document.getElementById('kvadr');
    prop.style.left = prop.offsetLeft+ (code == 37 ? -10 : 10) + 'px';
};





 