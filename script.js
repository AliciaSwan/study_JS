document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    const getSelectCar = () =>{
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', './cars.json');
            request.setRequestHeader('Content-type', 'application/json');
            request.send();
            request.addEventListener('readystatechange', () => {
                console.log(request.readyState);
                console.log(request.status);

                if (request.readyState === 4 && request.status === 200) {
                    const data = JSON.parse(request.responseText);
                    
                    resolve(data);
                        // data.cars.forEach(item => {
                        //     if (item.brand === select.value) {
                        //         const {brand, model, price} = item;
                        //         output.innerHTML = `Тачка ${brand} ${model} <br>
                        //         Цена: ${price}$`;
                        //     }
                        // });
                } else {
                    reject(Error('Произошла ошибка'));
                    // output.innerHTML = 'Произошла ошибка';
                }
            });
        });
    };

    const outputCars = (data) => {
        console.log(data);
        data.cars.forEach(item => {
            console.log(item);
                if (item.brand === select.value) {
                    const {brand, model, price} = item;
                    output.innerHTML = `Тачка ${brand} ${model} <br>
                    Цена: ${price}$`;
                }
            });
    };

    select.addEventListener('change', () => {
        getSelectCar()
            .then(outputCars)
            .catch(error => output.innerHTML = error);
        
    });

});