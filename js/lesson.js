const output = document.getElementById('output'),
    cat = document.getElementById('cat'),
    dog = document.getElementById('dog'),
    fox = document.getElementById('fox'),
    buttons = document.querySelectorAll('button');
    const url = "";

const urlCat = 'https://aws.random.cat/meow',
    urlDog = 'https://random.dog/woof.json',
    urlFox = 'https://randomfox.ca/floof/';

const getUrl = (url) => {
    buttons.forEach((item) =>{
        item.addEventListener('click', (e) => {
            const target = e.target;
            if(target === cat){
                getData(urlCat)
                .then((response) => {
                    console.log(response.status);
                    if(response.status !== 200){
                        throw new Error('status networj not 200');
                    }
                    return (response.json());
                })
                .then((data) =>{
                    console.log(data);
                    if (data.file.search("mp4") > -1){
                        output.innerHTML = `<iframe id="inlineFrameExample"
                        title=""
                        width="400"
                        height="300"
                        src="${data.file}"></iframe>`;
                    } else { 
                        output.innerHTML = `<img src="${data.file}" />`; //cat  jpeg ou mpeg4'
                    } 
                })
                .catch((error) => {
                    console.error(error);
                });
            } else if (target === dog){
                getData(urlDog)
                .then((response) => {
                    console.log(response.status);
                    if(response.status !== 200){
                        throw new Error('status networj not 200');
                    }
                    return (response.json());
                })
                .then((data) =>{
                    console.log(data);
                    if (data.url.search("mp4") > -1){
                        output.innerHTML = `<iframe id="inlineFrameExample"
                        title=""
                        width="400"
                        height="300"
                        src="${data.url}"></iframe>`;  //dog mp4
                    } else { 
                        output.innerHTML = `<img src="${data.url}" />`; //cat  jpeg ou mpeg4'
                    } 
                })
                .catch((error) => {
                    console.error(error);
                });
            } else if (target === fox){
                getData('server.php')
                .then((response) => {
                    console.log(response.status);
                    if(response.status !== 200){
                        throw new Error('status networj not 200');
                    }
                    return (response.json());
                })
                .then((data) =>{
                    console.log(data);
                    if (data.image.search("mp4") > -1){
                        output.innerHTML = `<iframe id="inlineFrameExample"
                        title=""
                        width="400"
                        height="300"
                        src="${data.image}"></iframe>`;  
                    } else { 
                        output.innerHTML = `<img src="${data.image}" />`; 
                    } 
                })
                .catch((error) => {
                    console.error(error);
                });
            }

        });
    });
};
getUrl();


const getData = (url /*, outputData*/) => {
    return fetch(url, {
        method: "GET",
        mode: "cors",
    });
    // const request = new XMLHttpRequest();
    // request.open('GET' , url);
    // request.addEventListener('readystatechange', () => {
    //     if(request.readyState !== 4) return;
    //     if(request.status === 200) {
    //         const response = JSON.parse(request.responseText);
    //         outputData(response);
    //     }else {
    //         console.error(request.statusText);
    //     }
    // });
    // request.send();
};
//call back func
const outputUrl = (data) => {
    console.log(data);
    if ((/\.mp[eg]*4/g).test(data)){
        output.innerHTML = `<video><source src="${data.url}" type="video/mp4">
        Ваш браузер не поддерживает HTML5 видео.
        </video>`;
       // <img src="${data.url}" />;  //dog mp4
    } else if ((/\.jp[e]*g/gi).test(data)){
        output.innerHTML = `<img src="${data.file}" />`; //cat  jpeg ou mpeg4'
    }
    
};



getData(url /*, outputUrl*/);