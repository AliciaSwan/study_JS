const changePhoto = () => {
    const img = document.querySelectorAll('.command__photo');
    img.forEach((elem, index) => { 

        elem.addEventListener('mouseenter', (e) => {
            e.target.src = e.target.dataset.img;

        });
        
    });
};
export default changePhoto;