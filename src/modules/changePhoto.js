const changePhoto = () => {
    const img = document.querySelectorAll('.command__photo');
    img.forEach((elem, index) => { 

    //     elem.addEventListener('mouseenter', (e) => {
    //         e.target.src = e.target.dataset.img;
    //     });
    // });

        elem.addEventListener('mouseleave', (e)=> {
            let dataImg = elem.getAttribute('data-img');
            let imgSrc = elem.getAttribute('src');

            img[index].setAttribute('src', dataImg);
            img[index].setAttribute('data-img', imgSrc);
            console.log(img[index]);
        });
        elem.addEventListener('mouseenter', (e)=> {
            let dataImg = elem.getAttribute('data-img');
            let imgSrc = elem.getAttribute('src');
            
            img[index].setAttribute('src', dataImg);
            img[index].setAttribute('data-img', imgSrc);
            console.log(img[index]);
        });

    });

};
export default changePhoto;