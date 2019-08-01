const buttonCat = document.getElementById('cat'),
     buttonDog = document.getElementById('dog'),
     buttonFox = document.getElementById('fox'),
     buttons = document.querySelectorAll('button'),
     cat = 'https://aws.random.cat/meow',
     dog = 'https://random.dog/woof.json',
     fox = 'https://randomfox.ca/floof/',
     output = document.getElementById('output');


const getUrl = (url) => {
    return fetch('url',{
    method : 'GET',
    mode: "cors"
    });
};
const getCat = getUrl('https://aws.random.cat/meow');


const getOutputData = (url) => {
    buttons.forEach((item) => {
        console.log(item);
        item.addEventListener('click', (e) =>{
            const target = e.target;
            console.log(target);
            if(target === buttonCat){
                getUrl('https://aws.random.cat/meow')
                    .then((response)=>{
                        console.log(status);
                        console.log(response.status);
                        
                        if(response.status !== 200){
                            throw new Error('status network not 200');
                        }
                        console.log(response.json());
                        return response.json();
                        console.log(url);
                        console.log(item);
                        output.innerHTML = `<img src="${item.url}" > `;
                    })
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }else if (target === buttonDog){
                getUrl('https://random.dog/woof.json')
                .then((response) => {
                    console.log(response.status);
                    if(response.status !== 200){
                        throw new Error('status network not 200');
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.error(error);
                });
            }
            
        });
    });

    // url.forEach((item) => {
    //     output.innerHTML = `<h4>${item.title}</h4>
    //                       <img src="${item.thumbnailUrl}" alt="${item.title}">`;
    
    //   });


};
getOutputData(/*[cat, dog, fox]*/);