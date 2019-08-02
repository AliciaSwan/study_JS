const formValidator = () => {
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
};
export default formValidator;