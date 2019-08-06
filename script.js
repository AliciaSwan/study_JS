document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const cards = document.getElementById('cards');

     const getCars = () => {
        fetch('cars.json', {
            method: 'GET',
        })
        .then((response)=>{
            if(response.status !== 200){
                console.error('Error: status network is not a 200');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data.cars[0]);
            data.cars.forEach(elem => {
                console.log(elem.name );
                const card = document.createElement('div'),
                    img = document.createElement('div'),
                    title = document.createElement('h1'),
                    desc = document.createElement('p'),
                    price = document.createElement('p'),
                    country = document.createElement('p'),
                    category = document.createElement('div');

                //img.innerHTML = `<img src="${elem.img}" />`;
                title.innerText = elem.name;
                desc.innerText = elem.description;
                price.innerText = elem.price + "€";
                country.innerText = "Страна производитель : " + elem.category;

                card.classList.add('card');
                img.classList.add('img');
                category.classList.add(elem.category);
                desc.classList.add('desc');
                img.style.cssText = "background-color:#eee; background-image:url('"+ elem.img +"'); background-size:cover;";
                price.classList.add('price');

                cards.appendChild(card);
                card.appendChild(category);
                category.appendChild(img);
                category.appendChild(title);
                category.appendChild(desc);
                desc.appendChild(country);
                category.appendChild(price);
            });

            
            
        })
        .then((data) => {
            const getCategory = (data) => {
                console.log(data);
                const buttons = document.querySelectorAll('button'),
                    italy = document.getElementById('italy');
                buttons.forEach((item) => {
                    item.addEventListener('click', (e)=> {
                        const target = e.target;
                        console.log(target);
                        if (target === italy){
                            data.cars.forEach((item) => {
                                if(item.search('italian')){
                                    return item;
                                }
                                let italyData = item.search('italian');
                                console.log(italyData);
                                return italy;
                            });
                        

                        }
                    });
                });


            };
            getCategory(data);
        })
    };
    getCars();

});


const toggle = document.querySelector('[name="category"]');

toggle.addEventListener('change', function() { 
    let chosenCategory = this[this.selectedIndex].value;
    let cards = document.querySelectorAll('.card');

    Array.prototype.forEach.call(cards, (item) => {
        let child = item.children[0];
        let childCategory = child.className.split(' ');

        if (childCategory.indexOf(chosenCategory) === -1) {
            item.style.display='none';
        } else {
            item.style.display='block';
        }
    });
});