// Type 1 Wallpaper Changer 
var WallpaperArea1 = document.getElementById('wallpaper-type-1');
var WallpaperDownloadBtn1 = document.getElementById('download-type-1');
var TryNextWallpaperBtn1 = document.getElementById('try-next-type-1');

(function(){
    let randomWallpaper = Math.round(Math.random()*100);
    if(randomWallpaper==0){
        randomWallpaper=99;
    }
    WallpaperArea1.setAttribute("src", `images/wallpapers/type-1/wallpaper%20(${randomWallpaper}).jpg`)
    WallpaperDownloadBtn1.setAttribute("href",  `images/wallpapers/type-1/wallpaper%20(${randomWallpaper}).jpg`)
})();
TryNextWallpaperBtn1.addEventListener('click',function(){
    let randomWallpaper = Math.round(Math.random()*100);
    if(randomWallpaper==0){
        randomWallpaper=99;
    }
    WallpaperArea1.setAttribute("src", `images/wallpapers/type-1/wallpaper%20(${randomWallpaper}).jpg`)
    WallpaperDownloadBtn1.setAttribute("href",  `images/wallpapers/type-1/wallpaper%20(${randomWallpaper}).jpg`)
})

// Type 2 Wallpaper Changer
var WallpaperArea2 = document.getElementById('wallpaper-type-2');
var WallpaperDownloadBtn2 = document.getElementById('download-type-2');
var TryNextWallpaperBtn2 = document.getElementById('try-next-type-2');

(function(){
    let randomWallpaper = Math.round((Math.random()*100)+100);
    if(randomWallpaper==100){
        randomWallpaper=199;
    }
    WallpaperArea2.setAttribute("src", `images/wallpapers/type-2/wallpaper%20(${randomWallpaper}).jpg`)
    WallpaperDownloadBtn2.setAttribute("href",  `images/wallpapers/type-2/wallpaper%20(${randomWallpaper}).jpg`)
})();
TryNextWallpaperBtn2.addEventListener('click',function(){
    let randomWallpaper = Math.round((Math.random()*100)+100);
    if(randomWallpaper==100){
        randomWallpaper=199;
    }
    WallpaperArea2.setAttribute("src", `images/wallpapers/type-2/wallpaper%20(${randomWallpaper}).jpg`);
    WallpaperDownloadBtn2.setAttribute("href",`images/wallpapers/type-2/wallpaper%20(${randomWallpaper}).jpg`);
})

// Type 3 Wallpaper Changer

var WallpaperArea3 = document.getElementById('wallpaper-type-3');
var WallpaperDownloadBtn3 = document.getElementById('download-type-3');
var TryNextWallpaperBtn3 = document.getElementById('try-next-type-3');

(function(){
    let randomWallpaper = Math.round((Math.random()*100)+200);
    if(randomWallpaper==200){
        randomWallpaper=299;
    }
    WallpaperArea3.setAttribute("src", `images/wallpapers/type-3/wallpaper%20(${randomWallpaper}).jpg`)
    WallpaperDownloadBtn3.setAttribute("href",  `images/wallpapers/type-3/wallpaper%20(${randomWallpaper}).jpg`)
})();

TryNextWallpaperBtn3.addEventListener('click',function(){
    let randomWallpaper = Math.round((Math.random()*100)+200);
    if(randomWallpaper==200){
        randomWallpaper=299;
    }
    WallpaperArea3.setAttribute("src", `images/wallpapers/type-3/wallpaper%20(${randomWallpaper}).jpg`)
    WallpaperDownloadBtn3.setAttribute("href",  `images/wallpapers/type-3/wallpaper%20(${randomWallpaper}).jpg`)
})

// Type 4 Wallpaper Changer


var WallpaperArea4 = document.getElementById('wallpaper-type-4');
var WallpaperDownloadBtn4 = document.getElementById('download-type-4');
var TryNextWallpaperBtn4 = document.getElementById('try-next-type-4');

(function(){
    let randomWallpaper = Math.round((Math.random()*100)+300);
    if(randomWallpaper==300){
        randomWallpaper=399;
    }
    WallpaperArea4.setAttribute("src", `images/wallpapers/type-4/wallpaper%20(${randomWallpaper}).jpg`)
    WallpaperDownloadBtn4.setAttribute("href",  `images/wallpapers/type-4/wallpaper%20(${randomWallpaper}).jpg`)
})();

TryNextWallpaperBtn4.addEventListener('click',function(){
let randomWallpaper = Math.round((Math.random()*100)+300);
    if(randomWallpaper==300){
        randomWallpaper=399;
    }
    WallpaperArea4.setAttribute("src", `images/wallpapers/type-4/wallpaper%20(${randomWallpaper}).jpg`)
    WallpaperDownloadBtn4.setAttribute("href",  `images/wallpapers/type-4/wallpaper%20(${randomWallpaper}).jpg`)
})