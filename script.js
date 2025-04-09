let imgArray = [
    "<img src='./img/window-7924525_640.jpg' alt='Picture: A Window '>",
    "<img src='./img/yellow_building-5630441_640.jpg' alt='Picture: A yellow Building'>",
    "<img src='./img/canal-building-6822998_640.jpg' alt='Picture: A Canal in front of a Building'>",
    "<img src='./img/castle-8153987_640.jpg' alt='Picture: a Castle'>",
    "<img src='./img/church-4964183_640.jpg' alt='Picture: A Church'>",
    "<img src='./img/city-6599328_640.jpg' alt='Picture: A Skyline of a city'>",
    "<img src='./img/glas-building-8003029_640.jpg' alt='Picture: A glas Building'>",
    "<img src='./img/harbour-ship-105596_640.jpg' alt='Picture: A Ship in a Harbour'>",
    "<img src='./img/high-buildings-217878_640.jpg' alt='Picture: A high Building'>",
    "<img src='./img/lighthouse-9183463_640.jpg' alt='Picture: a Lighthouse'>",
    "<img src='./img/lost-places-1510592_640.jpg' alt='Picture: a lost Places'>",
    "<img src='./img/old-architecture-7857833_640.jpg' alt='Picture: An old Architectur'>",
    "<img src='./img/old-building-8259184_640.jpg' alt='Picture: a old Building'>",
    "<img src='./img/old-house-3386450_640.jpg' alt='Picture: a Old House'>",
    "<img src='./img/old-tower-5801628_640.jpg' alt='Picture: A old Tower'>",
    "<img src='./img/parliament-5960363_640.jpg' alt='Picture: A Parliament'>",
    "<img src='./img/red_green_buildings-1836478_640.jpg' alt='Picture: A red and green Building'>",
    "<img src='./img/red-building-7782487_640.jpg' alt='Picture: A red Building'>",
    "<img src='./img/thomas-jefferson-memorial-1026946_640.jpg' alt='Picture: The Thomas Jefferson Memorial'>",
    "<img src='./img/university-library-4825366_640.jpg' alt='Picture: An university Library'>"
];

function renderImages(){
    let contentRenderImages = document.getElementById('main');
    contentRenderImages.innerHTML = "";

    for (let index = 0; index < imgArray.length; index++){
        contentRenderImages.innerHTML += getSmallImagesTemplate(index);
    }
}

function getSmallImagesTemplate(index){
    return `<div class="smallImage" onclick="showBigImagesOn(${index})"> ${imgArray[index]} </div>`;
}

function overlayOn(){
    document.getElementById("overlay").classList.remove("d-none");
    document.getElementById("overlay").onclick = overlayOff;
    document.getElementById("body").classList.add("overflow");
}

function bigImagesOn(){
    document.getElementById("bigImageContainer").classList.remove("d-none");

}

function bigImagesOff(){
    document.getElementById("bigImageContainer").classList.add("d-none");

}

function showBigImagesOn(index){
    overlayOn();
    bigImagesOn();

    let setBigImage = document.getElementById("bigImageContainer");     
    setBigImage.innerHTML = "";
    setBigImage.innerHTML = getBigImagesTemplate(index);
}

function showBigImagesOff(){
    overlayOff();
    document.getElementById("bigImageContainer").classList.add("d-none");
    
}

function overlayOff(){
    bigImagesOff();
    document.getElementById("overlay").classList.add("d-none");
    document.getElementById("body").classList.remove("overflow");
}

function bigImage(index){
    
    let setBigImage = document.getElementById("bigImageContainer");     
    setBigImage.innerHTML = "";
    setBigImage.innerHTML = getBigImagesTemplate(index);
}

function getBigImagesTemplate(index){
    return `<div class="big-image"> ${imgArray[index]}
                <div class="nav">
                    
                    <button class="button" onclick="prevImages(${index})">back</button>
                    <p> Images: ${index + 1} / 20 </p>
                    <button class="button" onclick="nextImages(${index})">next</button> 
                    
                </div>
            </div>`;
}

function prevImages(index){
    let newIndex = index > 0 ? index - 1 : imgArray.length - 1;   
    showBigImagesOn(newIndex);
}
function nextImages(index){
    let newIndex = index < imgArray.length - 1 ? index + 1 : 0;   
    showBigImagesOn(newIndex);
}