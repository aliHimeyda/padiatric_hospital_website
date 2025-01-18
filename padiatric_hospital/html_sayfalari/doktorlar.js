
  
  // Saat göstergesi için bir fonksiyon
  function updateClock() {
    const now = new Date(); // Şu anki tarih ve zaman
    const hours = String(now.getHours()).padStart(2, '0'); // Saat
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Dakika
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Saniye
    
    // Zamanı formatla
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // HTML etiketini güncelle
    document.querySelector(".saat_container").innerHTML = timeString;
}
// Saati hemen çalıştır ve her saniyede bir güncelle
setInterval(updateClock, 1000);
updateClock(); // Sayfa yüklendiğinde hemen göster

function asistangirisyaptimi() {
    let asistangirisi = localStorage.getItem("asistangirisyaptimi");
    return asistangirisi;
}
 function doktorgirisyaptimi() {
    let doktorgirisi= localStorage.getItem("doktorgirisyaptimi");
    return doktorgirisi;
}

const acil = document.querySelector(".acil");
const quiz = document.querySelector(".quiz");

function girisbilgileriYoksa(){
    let asistan=asistangirisyaptimi();
    let doktor=doktorgirisyaptimi();
    if (asistan == "false"&&doktor == "false") {
        acil.style.display="none";
        quiz.style.display="none";
    }
}
girisbilgileriYoksa();

function girisbilgisigostermek() {
    let asistan=asistangirisyaptimi();
    let doktor=doktorgirisyaptimi();
    if (asistan == "true"||doktor == "true") {
       const girisbilgisikapsayicisi=document.querySelector(".girisbilgisicontainer");
        girisbilgisikapsayicisi.style.display="flex";
    }
}
girisbilgisigostermek();
const cikisbutonu = document.querySelector(".cikisbutonu");
cikisbutonu.addEventListener("click",cikis);

function cikis() {
    //giris bilgiisi olmayacagi icin false atasin diye
    localStorage.setItem("asistangirisyaptimi",false);
    localStorage.setItem("doktorgirisyaptimi",false);
    //sayfayi yenilemek icin
    window.location.reload();
}
if (asistangirisyaptimi()=="true") {
    const girisyapanasistan = JSON.parse(localStorage.getItem("hangiasistangirisyapti"));
    console.log(girisyapanasistan);
    const parent = document.querySelector(".girisbilgimenusu");
    const child = document.createElement("li");
    child.innerHTML = girisyapanasistan.ad_soyad + " <br>" + girisyapanasistan.email;
    parent.appendChild(child);
}

else if (doktorgirisyaptimi()=="true") {
    const girisyapandoktor = JSON.parse(localStorage.getItem("hangidoktorgirisyapti"));
    const girismenusuparenti = document.querySelector(".girisbilgimenusu");
    const girisbilgisichild = document.createElement("li");
    girisbilgisichild.innerHTML = girisyapandoktor.ad_soyad + " <br>" + girisyapandoktor.email;
    girismenusuparenti.appendChild(girisbilgisichild);
    const asistaneklemenusuparent = document.querySelector(".asistanlarmenusu");
    const asistaneklechild = document.createElement("li");
    asistaneklechild.innerHTML = "Asistan Ekle";
    asistaneklemenusuparent.appendChild(asistaneklechild);
    asistaneklechild.addEventListener("click", asistanEkle);
    function asistanEkle() {
        window.location.href = "asistanlar.html";
    }
}

const detaybutonu = document.querySelectorAll(".kartbutonu");
const detaypopup = document.querySelector(".detaykartininkonumkapsayicisi");
const detaypopupicerigi = document.querySelector(".detaykartininicerigi");
const iletisimbilgileri = document.querySelectorAll("#iletisimbilgileri");
const doktorbilgileri = document.querySelectorAll(".tanitimkarti");
//detay kartinn icindeki cocuklar {resim divi , p basligi , p ikinci yazilar ,iletisim yazilari}
//doktor bilgilerinin 4 cocugu var {resim divi, icerik bilgileri, iletisim bilgileri, buton}
detaybutonu.forEach((buton,index)=>{
    buton.addEventListener("click",popuplarisecmek);
    function popuplarisecmek() {
        detaypopup.style.display = "flex";

        detaypopupicerigi.children[0].children[0].src = doktorbilgileri[index].children[0].children[0].src;
        detaypopupicerigi.children[1].innerHTML = doktorbilgileri[index].children[1].children[0].innerHTML;
        detaypopupicerigi.children[2].innerHTML = doktorbilgileri[index].children[1].children[1].innerHTML;
        detaypopupicerigi.children[3].innerHTML = doktorbilgileri[index].children[2].children[0].innerHTML;
        detaypopupicerigi.children[4].innerHTML = doktorbilgileri[index].children[2].children[1].innerHTML;
        detaypopupicerigi.children[5].innerHTML = doktorbilgileri[index].children[2].children[2].innerHTML;
        detaypopupicerigi.children[6].innerHTML = doktorbilgileri[index].children[2].children[3].innerHTML;
     
    }
    

});
const popupkapatmabutonu =document.querySelector(".buton");
popupkapatmabutonu.addEventListener("click",popupkapatma);
function popupkapatma(){
    detaypopup.style.display = "none";
}