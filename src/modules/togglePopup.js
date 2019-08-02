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
export default togglePopUp;