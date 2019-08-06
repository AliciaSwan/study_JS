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
            const filterCountry = (data) => {
                const toggle = document.querySelector('[name="category"]'), 
                    allCards = [];  
                
                toggle.addEventListener('change', function() { 
                    let chosenCategory = this[this.selectedIndex].value;
                    let cards = document.querySelectorAll('.card');
                
                    allCards.forEach.call(cards, (item) => {   // или можно написать Array.prototype.forEach.call(cards, (item) => {
                        let child = item.children[0];
                        let childCategory = child.className.split(' ');
                
                        if (childCategory.indexOf(chosenCategory) === -1) {
                            item.style.display='none';
                        } else {
                            item.style.display='block';
                        }
                        if(chosenCategory === 'all') {
                
                            item.style.display = 'block';
                
                        }
                    });
                });


            };
            filterCountry(data);
        });
    };
    getCars();

});