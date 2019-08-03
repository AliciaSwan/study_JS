const toggleMenu = ()=>{
    const menu = document.querySelector('menu'),
          menuBtn = document.querySelector('.menu'),
          burgerBtn = document.querySelector('.menu > img'),
          burgerText = document.querySelector('.menu > small'),
          closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener('click', ()=> menu.classList.toggle('active-menu'));
        
    document.addEventListener('click', (e) => {
        let target = e.target;

        console.log(target);
        if(target !== menu && 
            menu.classList.contains('active-menu') &&
            target !== burgerBtn &&
            target !== burgerText ) {
                menu.classList.toggle('active-menu');
            }
        menu.addEventListener('click', (e) => {
            let target = e.target;
    
            if(target.closest('ul > li')) {
                menu.classList.toggle('active-menu');
            }
            if(target == closeBtn){
                menu.classList.toggle('active-menu');
            }
        
        });
              
    });

};
export default toggleMenu;

