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
        form.forEach((item, index) => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();
                item.appendChild(statusMessage);

                spinner[index].style.display = "block";
                
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
export default sendForm;