const toggleMenu = ()=>{
    const menu = document.querySelector('menu'),
          menuBtn = document.querySelector('.menu'),
          menuItems = menu.querySelectorAll('ul>li'),
          closeBtn = document.querySelector('.closeBtn');

    menuBtn.addEventListener('click',() => { menu.classList.toggle('active-menu');});

    menu.addEventListener('click', (event) =>{
        let target = event.target;  
        console.log(target);
        if(target == target.closest('ul >li')){
            menu.classList.toggle('active-menu');
        }
        // if(target !== menu || menu.classList.contains('active-menu') || target == closeBtn){
        //     menu.classList.toggle('active-menu');
        // }

        // if(target.classList.contains('close-btn') || target.classList.contains('menu') ){
        //     menu.classList.toggle('active-menu');
        // }else{
        //     menuItems.forEach(()=>{
        //         menu.classList.toggle('active-menu'); 
        //     }); 
        // }
        // if(!target){
        //     menu.classList.toggle('active-menu');
        // }
    });
    window.addEventListener('click', (e) => {
        let target = e.target;

        if(target !== menu && menu.classList.contains('active-menu') && target !== menuBtn) {
            menu.classList.toggle('active-menu');
        }
                        
    });




};
export default toggleMenu;

