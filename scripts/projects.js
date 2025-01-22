
//Custom guild sites
allProjectLinks[0].addEventListener('click', ()=>{
    setAppear(0, allProjectContentContainers);
    addActive(0, allProjectLinks);
})


// setting up the gamer logos

const gamerLogoSrcs = [
    new Project('dragonHero', './images/logos/logo1.png'),
    new Project('VenomAsync', './images/logos/logo2.png'),
    new Project('GokuAsync2', './images/logos/logo3.png'),
    new Project('VenomAsync2','./images/logos/logo4.png'),
    new Project('GokuAsyncNoBG','./images/logos/logo5.png'),
    new Project('DragonHeroNoBG','./images/logos/logo6.png'),
    new Project('GokuAsyncNoBG','./images/logos/logo7.png'),
    new Project('GokuAsyncNoBG','./images/logos/logo8.jpg'),
    new Project('GokuAsyncNoBG','./images/logos/logo9.jpg'),
    new Project('GokuAsyncNoBG','./images/logos/logo10.jpg'),
    new Project('GokuAsyncNoBG','./images/logos/logo11.jpg'),
    new Project('GokuAsyncNoBG','./images/logos/logo12.jpg'),
    new Project('GokuAsyncNoBG','./images/logos/logo13.jpg'),
    new Project('GokuAsyncNoBG','./images/logos/logo14.jpg'),
    new Project('GokuAsyncNoBG','./images/logos/logo15.jpg'),
    new Project('GokuAsyncNoBG','./images/logos/logo16.jpg'),
    new Project('GokuAsyncNoBG','./images/logos/logo17.jpg'),
    new Project('GokuAsyncNoBG','./images/logos/logo18.jpg'),
    new Project('GokuAsyncNoBG','./images/logos/logo19.jpg'),
    new Project('GokuAsyncNoBG','./images/logos/logo20.jpg')
];

// inserting the images into the frontend when the gamer logos tab is clicked
const gamerLogoInsertionContainer = document.querySelector('.custom-gamer-logo-insertion');


    const gamerLogoInsertionContainerImages = document.querySelectorAll('.custom-gamer-logo-insertion img');

    gamerLogoSrcs.forEach((img)=>{
        const imgElement = document.createElement('img');
        imgElement.classList.add('gamer-logo');
        imgElement.src = img.src;
        imgElement.alt = img.name;
        gamerLogoInsertionContainer.appendChild(imgElement);
    })
