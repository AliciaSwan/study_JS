
window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    // Timer

    let timer = setInterval(function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds'),
            timerClock = document.querySelector('#timer');

        function getTimeRemainig(){
            let date = new Date();

            function returnEndDate(){
                date.setDate(date.getDate()+1);
                date.setHours(0, 0, 0, 0);
                return date;
            }
            let dateStop = returnEndDate(deadline),
            //let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) /1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor((timeRemaining / 60 / 60) % 24);

            if(seconds < 10){
                seconds = '0' + seconds;
            }
            if (minutes < 10){
                minutes = '0' + minutes;
            }
            if (hours < 10){
                hours = '0' + hours;
            }
            if(timeRemaining <= 0){
                hours = '00'; minutes = '00'; seconds = '00';
                timerClock.style.color = 'red';
            }

            return {timeRemaining, hours, minutes, seconds};
        }

        function updateClock(){
            let timer = getTimeRemainig();

            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            if(timer.timeRemaining > 0){
              setTimeout(updateClock, 1000);
            } else if (timer.timeRemaining <= 0){
                clearInterval(timer);
               // setTimeout(updateClock, 86400);
            }
            

        }
        updateClock();
  
    }, 1000, 'deadline');

    //  menu
    const toggleMenu = ()=>{
        const menu = document.querySelector('menu'),
              menuBtn = document.querySelector('.menu'),
              menuItems = menu.querySelectorAll('ul>li');

        menuBtn.addEventListener('click',() =>{
            menu.classList.toggle('active-menu'); 
        });

        menu.addEventListener('click', (event) =>{
            let target = event.target;  
            console.log(target);
            if(target.classList.contains('close-btn') || target.classList.contains('menu')){
                menu.classList.toggle('active-menu');
            }else{
                menuItems.forEach(()=>{
                    menu.classList.toggle('active-menu'); 
                }); 
            }
            if(!target){
                menu.classList.toggle('active-menu');
            }
        });

    };
    toggleMenu();

    //  Pop-up
    const togglePopUp = ()=>{
        const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content');
    
    // const handlerPopup = () => {
    //     popup.style.display = 'block';
    // };
        popupBtn.forEach((elem)=> elem.addEventListener('click', () =>{ 

            if(screen.width > 480){
                popup.style.display = 'block'; 
                let count = 0,
                    popupDown;

                let popupAnimate = ()=>{
                    popupDown = requestAnimationFrame(popupAnimate);
                    count++;
                    if(count < 150){
                        popupContent.style.top = count + 'px';
                        count +=10;
                    }else{
                        cancelAnimationFrame(popupAnimate);
                    }
                };
            popupDown = requestAnimationFrame(popupAnimate);
            }else{
                popup.style.display = 'block';
            }
        }));

        popup.addEventListener('click', (event)=>{
            let target = event.target;

            if(target.classList.contains('popup-close')){
                popup.style.display ='none';
            }else{
                target = target.closest('.popup-content');

                if(!target){
                    popup.style.display = 'none';
                }
            }

        });
    };

    togglePopUp();

    // scroll
    const scroll = () => {
        // собираем все якоря; устанавливаем время анимации и количество кадров
        const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
        //anchors = document.anchors(),
            animationTime = 300,
        
            framesCount = 20;
            
        anchors.forEach(function(item) {
            // каждому якорю присваиваем обработчик события
            item.addEventListener('click', function(e) {
            
                e.preventDefault();  // убираем стандартное поведение

                // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
                let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;

                // запускаем интервал, в котором
                let scroller = setInterval(function() {
                // считаем на сколько скроллить за 1 такт
                    let scrollBy = coordY / framesCount;

                    // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
                    // и дно страницы не достигнуто
                    if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                    // то скроллим на к-во пикселей, которое соответствует одному такту
                        window.scrollBy(0, scrollBy);
                    } else {
                    // иначе добираемся до элемента и выходим из интервала
                        window.scrollTo(0, coordY);
                        clearInterval(scroller);
                    }
                // время интервала равняется частному от времени анимации и к-ва кадров
                }, animationTime / framesCount);
            });
        });
    };
    scroll();

    // Tabs
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for( let i = 0; i < tabContent.length; i++){
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                }else{
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('.service-header-tab'); // поднимается вверх, возвращает null если не нашел
                if(target){
                // console.log(target);
                    tab.forEach((item, i) => {
                        if(item === target){
                            toggleTabContent(i);
                            // console.log(tabContent[i]);
                        }
                    });
                }
        });
    };
    tabs();

    const addDots = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            dots = document.querySelector('.portfolio-dots');

        slide.forEach(() => {
            let newDot = document.createElement('li');
            newDot.className = "dot";
            dots.appendChild(newDot);
        });
    };
    addDots();

    //  slider
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
           // btn = document.querySelectorAll('.portfolio-btn'),
            dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-content');
            

        let currentSlide = 0,
            interval;

       
        const prevSlide = (elem, index, strClass) =>{
            elem[index].classList.remove(strClass);
        };
        const nextSlide = (elem, index, strClass) =>{
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };
        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);

        };
        const stopSlide = () => {
             clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if(!target.matches('.portfolio-btn, .dot')){
                return;
            }
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if(target.matches('#arrow-right')){
                currentSlide++;
            }else if(target.matches('#arrow-left')){
                currentSlide--;
            } else if(target.matches('.dot')){
                dot.forEach((elem, index) => {
                    if(elem === target){
                        currentSlide = index;
                    }
                });
            }

            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            if(currentSlide < 0){
                currentSlide = slide.length-1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', (event)=>{
            if(event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')){
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', (event)=>{
            if(event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')){
                startSlide();
            }
        });
        
        startSlide(1500);
        

    };
    slider();

    const img = document.querySelectorAll('.command__photo');
    img.forEach((elem) => { 
        elem.addEventListener('mouseenter', (e) => {
            e.target.src = e.target.dataset.img;
        });
    });

    // calculator 
    const inputNumber = document.querySelectorAll('.calc-item');

	inputNumber.forEach((item) => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\D/g, '');
		});
    });
    
    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcDay = document.querySelector('.calc-day'),
            calcSquare = document.querySelector('.calc-square'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');
        
        const countSum = () => {
            let total = 0,
            countValue = 1,
            dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if(calcCount.value > 1){
                countValue += (calcCount.value - 1) / 10;
            }
            if( calcDay.value && calcDay.value < 5){
                dayValue *= 2;
            }else if (calcDay.value && calcDay.value < 10){
                dayValue *= 1.5;
            }

            if(typeValue && squareValue){
                total = price * typeValue * squareValue * countValue * dayValue;
            }
            //totalValue.textContent = total;
            
            // бегущие цифры
            let number = 0,
            interval = null;
        
            let runNumber = () => {
                number ++;
                if (number < total){
                    totalValue.textContent = number;
                } else{
                    clearInterval(interval);
                    totalValue.textContent = total;
                }
            };
            interval = setInterval (runNumber, 1);

        };


        calcBlock.addEventListener('change', (event) => {
            const target = event.target;

            if(target.matches('select') || target.matches('input')){
                countSum(price); 
            }
        });

    };
    calc();

    // form validator
    const textInput = document.querySelectorAll('input[type="text"]'),
        mess = document.querySelector('.mess'),
        phoneInput = document.querySelectorAll('input[type ="tel"]');

        textInput.forEach((item) => {
            item.addEventListener('input', ()=>{
                item.value = item.value.replace(/[^а-я ]/gi, '');
            });
        });
            
        mess.addEventListener('input', ()=>{
            mess.value = mess.value.replace(/[^а-я ]/gi, '');
        });

        phoneInput.forEach((item) => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^0-9\+]/g, ''); //^\+?[78]([()-]*\d){10}$
            });
        });


    // send-ajax-form
    const sendForm = () => {
        const errorMessage = 'Что-то пошло не так ...',
            // loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся';

        const form = document.querySelectorAll('form'),
            spinner = document.querySelectorAll('.floatingCircles');
    
            // const form = document.getElementById('form1');

            const statusMessage = document.createElement('div');
           // statusMessage.textContent = 'Тут будет сообщение';
            statusMessage.style.cssText = 'font-size: 2rem; color:white;';
            //
            form.forEach((item) => {
                item.addEventListener('submit', (e) => {
                    e.preventDefault();
                    item.appendChild(statusMessage);

                    spinner.forEach((item)=> {
                        item.style.display = "block";
                    });
                    const formData = new FormData(item);  

                    let body = {};

                    formData.forEach((val, key) => {
                        body[key] = val;
                    });

                    // c промисами 
                    postData(body)
                        .then((response) => {
                            if(response.status !== 200){
                                throw new Error('status network not 200');
                            }
                            spinner.forEach((item)=> {
                                item.style.display = "none";
                            });
                            statusMessage.textContent = successMessage;
                            item.reset();

                        })
                        .catch((error) => {
                            spinner.forEach((item)=> {
                                item.style.display = "none";
                            });
                            statusMessage.textContent = errorMessage;
                            console.error(error);
                        });

                });
            });

            const postData = (body) => {
                return fetch('./server.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body) //formData 
                 });
                
            };
    };
    sendForm();

}); 