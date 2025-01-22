document.querySelector('.change-background-button').addEventListener('click', ()=>{
    document.querySelector('.projects-container').classList.add('hide');
    document.querySelector('.change-background').classList.remove('hide');
});

// const backgrounds = [
//     ['./images/backgrounds/background1.jpg']
// ]

document.querySelectorAll('.change-background-buttons-container button').forEach((btn)=>{
btn.addEventListener('click', ()=>{
    if(btn.innerText === 'Back'){
        document.querySelector('.projects-container').classList.remove('hide');
        document.querySelector('.change-background').classList.add('hide');
    } else {
        document.querySelector('main').style.backgroundImage = `url(./images/backgrounds/background${btn.innerText}.jpg)`;
    }
})
})