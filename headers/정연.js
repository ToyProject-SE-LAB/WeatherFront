
function todayClothes(data) {
    let currentTemp = data.shortWeather[0].temp;

    if (currentTemp >= 18) { //여름
      document.getElementById("manimg").src = "https://e7.pngegg.com/pngimages/906/448/png-clipart-silhouette-person-person-with-helmut-animals-logo.png";
      document.getElementById("topimg").src = "https://image.msscdn.net/thumbnails/images/goods_img/20240415/4055983/4055983_17171413272955_big.jpg?w=1200";
      document.getElementById("bottomimg").src = "https://i.pinimg.com/564x/21/75/eb/2175ebb080fd9ae4f8fd89a56095918d.jpg";
      document.getElementById("womanimg").src = "https://e7.pngegg.com/pngimages/168/827/png-clipart-computer-icons-user-profile-avatar-profile-woman-desktop-wallpaper.png";
      document.getElementById("Topimg").src = "https://mucent.openhost.cafe24.com/web/upload/NNEditor/20240603/ef25e0dacd2e38f26192a35e120c878e.jpg";
      document.getElementById("Bottomimg").src = "https://i.pinimg.com/564x/35/d7/f6/35d7f6da1aa7874b87ac61f42911a807.jpg";
    } else if (currentTemp <= 7) { //겨울
      document.getElementById("manimg").src = "https://e7.pngegg.com/pngimages/906/448/png-clipart-silhouette-person-person-with-helmut-animals-logo.png";
      document.getElementById("topimg").src = "https://i.pinimg.com/564x/d6/19/7c/d6197c78cde9d5ec1f32679bdbc51b3b.jpg";
      document.getElementById("bottomimg").src = "https://i.pinimg.com/564x/e8/0a/94/e80a94818106d3d3561b06252e117514.jpg";
      document.getElementById("womanimg").src = "https://e7.pngegg.com/pngimages/168/827/png-clipart-computer-icons-user-profile-avatar-profile-woman-desktop-wallpaper.png";
      document.getElementById("Topimg").src = "https://i.pinimg.com/564x/67/63/58/676358a1ea940e552ffe73cb38559066.jpg";
      document.getElementById("Bottomimg").src = "https://i.pinimg.com/564x/f6/37/c1/f637c10f231f59006161fdb744e7d576.jpg";
    } else if (currentTemp >= 8 && currentTemp <= 17) { //봄,가을
      document.getElementById("manimg").src = "https://e7.pngegg.com/pngimages/906/448/png-clipart-silhouette-person-person-with-helmut-animals-logo.png";
      document.getElementById("topimg").src = "https://editorialist.com/thumbnail/600/2023/2/023/602/047/23602047~black_0.webp?width=454&quality=60";
      document.getElementById("bottomimg").src = "https://i.pinimg.com/originals/0a/e3/7a/0ae37ad8894ea25c9233cdf012a669e2.jpg";
      document.getElementById("womanimg").src = "https://e7.pngegg.com/pngimages/168/827/png-clipart-computer-icons-user-profile-avatar-profile-woman-desktop-wallpaper.png";
      document.getElementById("Topimg").src = "https://i.pinimg.com/564x/d5/46/9e/d5469e29585825b339d0848b77f47c6f.jpg";
      document.getElementById("Bottomimg").src = "https://i.pinimg.com/564x/18/52/1a/18521a09d371d8358a4cad91d15750bc.jpg";
    }
  }