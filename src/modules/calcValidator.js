const calcValidator = () => {
    const inputNumber = document.querySelectorAll('.calc-item');

    inputNumber.forEach((item) => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/g, '');
        });
    });
};
export default calcValidator;