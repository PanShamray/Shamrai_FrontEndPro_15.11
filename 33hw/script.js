function randomImg () {
    const imageContainer = document.getElementById('imageContainer');
    
    const rand = Math.floor(Math.random() * 9) + 1;

    const image = '<img src=".\\img\\'+rand+'.jpg" />';


    imageContainer.innerHTML = '<button onclick="randomImg()">Get random img</button><br>' + image;
    
}

