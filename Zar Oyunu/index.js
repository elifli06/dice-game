// ilkOyuncuAdı ve ikinciOyuncuAdı değişkenlerine prompt ile kullanıcıdan alınan isimleri atadım.
var ilkOyuncuAdi = prompt("Lütfen 1. Oyuncunun Adını Giriniz:");
var ikinciOyuncuAdi = prompt("Lütfen 2. Oyuncunun Adını Giriniz:");

// 1. Oyuncu için 1 ve 6 arasında sayı oluşturuyorum ve Math.random() fonksiyonu ile rastgele bir ondalıklı sayı ürettim (örneğin, 0.42352342).
var rastgeleSayi = Math.floor(Math.random() * 6) + 1;
var rasgeleResim = "dice" + rastgeleSayi + ".png";
var resim = document.querySelector(".img1");
resim.setAttribute("src", "images/" + rasgeleResim);

var rastgeleSayi2 = Math.floor(Math.random() * 6) + 1;    // Bu ondalıklı sayıyı 6 ile çarpıp Math.floor() fonksiyonu ile aşağıya yuvarladım, böylece 1 ile 6 arasında rastgele bir tam sayı elde ettim.
var rastgeleResim2 = "dice" + rastgeleSayi2 + ".png";     //Bu rastgele sayıyı kullanarak dice1.png ile dice6.png arasında rastgele bir zar resmi seçmiş olduk.
var resim2 = document.querySelector(".img2");
resim2.setAttribute("src", "images/" + rastgeleResim2);

// Kullanıcının girdiği isimleri ekranda göster
document.querySelectorAll(".dice p")[0].textContent = ilkOyuncuAdi;     //Kullanıcının girdiği isimleri ekranda göstermek ilgili HTML paragraf elementlerinin içeriğini güncelliyoruz.
document.querySelectorAll(".dice p")[1].textContent = ikinciOyuncuAdi;

// Zar sonuçlarını karşılaştır ve sonucu göster
if (rastgeleSayi > rastgeleSayi2) {
    // 1. Oyuncu kazandığı durumunda
    document.querySelector("h1").textContent = ilkOyuncuAdi + " KAZANDI 🚩";
} else if (rastgeleSayi < rastgeleSayi2) {
    // 2. Oyuncu kazandığı durumunda
    document.querySelector("h1").textContent = ikinciOyuncuAdi + " KAZANDI 🚩";
} else {
    // Beraberlik durumu
    document.querySelector("h1").textContent = ilkOyuncuAdi + " ile " + ikinciOyuncuAdi + " Berabere Kaldınız. Tekrar Oynayınız.";
}
































