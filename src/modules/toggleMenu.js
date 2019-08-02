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
export default toggleMenu;