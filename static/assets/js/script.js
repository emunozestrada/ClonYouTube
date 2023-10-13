const searchBar = document.getElementById("searchBar");
const numberViews = document.getElementById("numberViews");
const trending = document.getElementById("trending");
const sideBar = document.getElementById("sideBar");
const blockVideo = document.getElementsByClassName("blockVideo");

var sideBarHidden = true

const burgerButton = () => {
    if(sideBarHidden){
        sideBar.style.left = "-28rem"
        sideBarHidden = false;
        trending.style.marginLeft = ".5vw"
        blockVideo.style.marginLeft = "0"
        blockVideo.style.width = "100vw"
        blockVideo.style.padding = "8rem 0 0 0"
    } else if(sideBarHidden === false){
        sideBar.style.left = "0"
        trending.style.marginLeft = "13vw"
        blockVideo.style.marginLeft = "13vw"
        blockVideo.style.width = "83vw"
        blockVideo.style.padding = "8rem 0 0 5rem"
        sideBarHidden = true;
    };
};

const findItem = () => {
    console.log(searchBar.value)
    numberViews.innerHTML = searchBar.value
};



numberViews.innerHTML = "575"