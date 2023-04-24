// Type 1 Wallpaper Changer 
function HashCodeGen(){
    let PassChar = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz',"12345678901234567890567890",'!@#$%^&*!@#$%^&*!@#$%^&*#@'];
    let HashCode = "";
    for(i=0;i<32;i++){
        let RandIndex = Math.round(Math.random()*3);
        let RandCharAt= Math.round(Math.random()*26);
        HashCode += PassChar[RandIndex].charAt(RandCharAt)
    }
    return HashCode;
}
HashCodeGen()

var WallpaperArea1 = document.getElementById('wallpaper-type-1');
var WallpaperDownloadBtn1 = document.getElementById('download-type-1');
var TryNextWallpaperBtn1 = document.getElementById('try-next-type-1');
var HashCode1 = document.getElementById('hashcode-type-1');

(function () {
    let randomWallpaper = Math.round(Math.random() * 100);
    if (randomWallpaper == 0) {
        randomWallpaper = 99;
    }
    WallpaperArea1.setAttribute("src", `images/wallpapers/type-1/wallpaper%20(${randomWallpaper}).jpg`)
    WallpaperDownloadBtn1.setAttribute("href", `images/wallpapers/type-1/wallpaper%20(${randomWallpaper}).jpg`)
    HashCode1.value=HashCodeGen();
})();

TryNextWallpaperBtn1.addEventListener('click', function () {
    let randomWallpaper = Math.round(Math.random() * 100);
    if (randomWallpaper == 0) {
        randomWallpaper = 99;
    }
    TryNextWallpaperBtn1.innerHTML = "Loading...";
    setTimeout(function () {
        TryNextWallpaperBtn1.innerHTML = "Generating img";
        setTimeout(function () {
            TryNextWallpaperBtn1.innerHTML = "Generating Hash";
            setTimeout(function () {
                WallpaperArea1.setAttribute("src", `images/wallpapers/type-1/wallpaper%20(${randomWallpaper}).jpg`)
                WallpaperDownloadBtn1.setAttribute("href", `images/wallpapers/type-1/wallpaper%20(${randomWallpaper}).jpg`)
                HashCode1.value=HashCodeGen();
                TryNextWallpaperBtn1.innerHTML = "Succesfull ✅";
                setTimeout(function () {
                    TryNextWallpaperBtn1.innerHTML = "Try Next";
                }, 1000)
            }, 1000)
        }, 2000)
    }, 2000)



})

// Type 2 Wallpaper Changer
var WallpaperArea2 = document.getElementById('wallpaper-type-2');
var WallpaperDownloadBtn2 = document.getElementById('download-type-2');
var TryNextWallpaperBtn2 = document.getElementById('try-next-type-2');
var HashCode2 = document.getElementById('hashcode-type-2');

(function () {
    let randomWallpaper = Math.round((Math.random() * 100) + 100);
    if (randomWallpaper == 100) {
        randomWallpaper = 199;
    }
    WallpaperArea2.setAttribute("src", `images/wallpapers/type-2/wallpaper%20(${randomWallpaper}).jpg`)
    WallpaperDownloadBtn2.setAttribute("href", `images/wallpapers/type-2/wallpaper%20(${randomWallpaper}).jpg`)
    HashCode2.value=HashCodeGen();
})();
TryNextWallpaperBtn2.addEventListener('click', function () {
    let randomWallpaper = Math.round((Math.random() * 100) + 100);
    if (randomWallpaper == 100) {
        randomWallpaper = 199;
    }
    TryNextWallpaperBtn2.innerHTML = "Loading...";
    setTimeout(function () {
        TryNextWallpaperBtn2.innerHTML = "Generating img";
        setTimeout(function () {
            TryNextWallpaperBtn2.innerHTML = "Generating Hash";
            setTimeout(function () {
                WallpaperArea2.setAttribute("src", `images/wallpapers/type-2/wallpaper%20(${randomWallpaper}).jpg`);
                WallpaperDownloadBtn2.setAttribute("href", `images/wallpapers/type-2/wallpaper%20(${randomWallpaper}).jpg`);
                HashCode2.value=HashCodeGen();
                TryNextWallpaperBtn2.innerHTML = "Succesfull ✅";
                setTimeout(function () {
                    TryNextWallpaperBtn2.innerHTML = "Try Next";
                }, 1000)
            }, 1000)
        }, 2000)
    }, 2000)

})

// Type 3 Wallpaper Changer

var WallpaperArea3 = document.getElementById('wallpaper-type-3');
var WallpaperDownloadBtn3 = document.getElementById('download-type-3');
var TryNextWallpaperBtn3 = document.getElementById('try-next-type-3');
var HashCode3 = document.getElementById('hashcode-type-3');

(function () {
    let randomWallpaper = Math.round((Math.random() * 100) + 200);
    if (randomWallpaper == 200) {
        randomWallpaper = 299;
    }
    WallpaperArea3.setAttribute("src", `images/wallpapers/type-3/wallpaper%20(${randomWallpaper}).jpg`)
    WallpaperDownloadBtn3.setAttribute("href", `images/wallpapers/type-3/wallpaper%20(${randomWallpaper}).jpg`)
    HashCode3.value=HashCodeGen();
})();

TryNextWallpaperBtn3.addEventListener('click', function () {
    let randomWallpaper = Math.round((Math.random() * 100) + 200);
    if (randomWallpaper == 200) {
        randomWallpaper = 299;
    }
    TryNextWallpaperBtn3.innerHTML = "Loading..";
    setTimeout(function () {
        TryNextWallpaperBtn3.innerHTML = "Generating img";
        setTimeout(function () {
            TryNextWallpaperBtn3.innerHTML = "Generating Hash";
            setTimeout(function () {
                WallpaperArea3.setAttribute("src", `images/wallpapers/type-3/wallpaper%20(${randomWallpaper}).jpg`)
                WallpaperDownloadBtn3.setAttribute("href", `images/wallpapers/type-3/wallpaper%20(${randomWallpaper}).jpg`)
                HashCode3.value=HashCodeGen();
                TryNextWallpaperBtn3.innerHTML = "Succesfull ✅";
                setTimeout(function () {
                    TryNextWallpaperBtn3.innerHTML = "Try Next";
                }, 1000)
            }, 1000)
        }, 2000)
    }, 2000)


})

// Type 4 Wallpaper Changer


var WallpaperArea4 = document.getElementById('wallpaper-type-4');
var WallpaperDownloadBtn4 = document.getElementById('download-type-4');
var TryNextWallpaperBtn4 = document.getElementById('try-next-type-4');
var HashCode4 = document.getElementById('hashcode-type-4');

(function () {
    let randomWallpaper = Math.round((Math.random() * 100) + 300);
    if (randomWallpaper == 300) {
        randomWallpaper = 399;
    }
    WallpaperArea4.setAttribute("src", `images/wallpapers/type-4/wallpaper%20(${randomWallpaper}).jpg`)
    WallpaperDownloadBtn4.setAttribute("href", `images/wallpapers/type-4/wallpaper%20(${randomWallpaper}).jpg`)
    HashCode4.value=HashCodeGen();
})();

TryNextWallpaperBtn4.addEventListener('click', function () {
    let randomWallpaper = Math.round((Math.random() * 100) + 300);
    if (randomWallpaper == 300) {
        randomWallpaper = 399;
    }
    TryNextWallpaperBtn4.innerHTML = "Loading..";
    setTimeout(function () {
        TryNextWallpaperBtn4.innerHTML = "Generating img";
        setTimeout(function () {
            TryNextWallpaperBtn4.innerHTML = "Generating Hash";
            setTimeout(function () {
                WallpaperArea4.setAttribute("src", `images/wallpapers/type-4/wallpaper%20(${randomWallpaper}).jpg`)
                WallpaperDownloadBtn4.setAttribute("href", `images/wallpapers/type-4/wallpaper%20(${randomWallpaper}).jpg`)
                HashCode4.value=HashCodeGen();
                TryNextWallpaperBtn4.innerHTML = "Succesfull ✅";
                setTimeout(function () {
                    TryNextWallpaperBtn4.innerHTML = "Try Next";
                }, 1000)
            }, 1000)
        }, 2000)
    }, 2000)


})