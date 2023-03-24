const theme =document.querySelector(':root');
const btns = document.querySelectorAll('.btn');
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const color =e.currentTarget.classList;
        if(color.contains('btn1')){
            theme.style.setProperty('--theme-color',
            '#3498db');
        }
        if(color.contains('btn2')){
            theme.style.setProperty('--theme-color',
            '#ff1756');
        }
        if(color.contains('btn3')){
            theme.style.setProperty('--theme-color',
            '#1cb65d');
        }
        if(color.contains('btn4')){
            theme.style.setProperty('--theme-color',
            '#8e44ad');
        }
        if(color.contains('btn5')){
            theme.style.setProperty('--theme-color',
            '#f4b932');
        }

    })
})