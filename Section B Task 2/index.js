str = '';
const n = Math.floor((Math.random() * 100) + 1);
const deafultImg = "https://picsum.photos/372/600/?image=50";
for (let i = 1; i <= 150; i++) {
    img = '<img src="https://picsum.photos/372/600/?image=' + (n + i) + '" loading="lazy"/>'
    str += "<div class='img'> " + img + " </div>";
}
hero.innerHTML = str;