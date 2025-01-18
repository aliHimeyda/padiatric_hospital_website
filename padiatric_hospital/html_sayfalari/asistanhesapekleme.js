const eklebutonu = document.querySelector(".buton");
const isimsoyisim = document.querySelector("#isimsoyisim");
const hakkinizda = document.querySelector("#hakkinizda");
const telefonnumarasi = document.querySelector("#telefonnumarasi");
const email = document.querySelector("#email");
const evadresi = document.querySelector("#evadresi");
const linkedin = document.querySelector("#linkedin");
const sifre = document.querySelector("#sifre");
const resimgirdi = document.querySelector("#fileInput");
const gunsecimi = document.querySelector("#day");
const bolumsecimi = document.querySelector("#department");
 
let yeniasistan={
    ad_soyad: null,
    sifre: null,
    asistanresmi: null,
    telefon_no: null,
    eposta: null,
    ev_adresi: null,
    linkedin: null,
    hakkinda:null,
    pzt: {bolum: null,saat: null},
    sal: {bolum: null,saat: null},
    car: {bolum: null,saat: null},
    per: {bolum: null,saat: null},
    cum: {bolum: null,saat: null},
    cmt: {bolum: null,saat: null},
    paz: {bolum: null,saat: null},
};
const asistanlar = JSON.parse(localStorage.getItem("asistanlar"));
resimgirdi.addEventListener("change", function(degisiklikolayi) {
    const resim = degisiklikolayi.target.files[0];
    if (resim) {
        const okuyucu = new FileReader();
        okuyucu.onload = function(e) {
          
            const yuklenenresimalani =document.querySelector("#previewImage");
            yuklenenresimalani.src =e.target.result;
            yuklenenresimalani.style.display = "block";
            yeniasistan.asistanresmi= e.target.result.toString();
            
        }
        okuyucu.readAsDataURL(resim);
    }
});
let gunindexi;
let bolumindexi;
gunsecimi.addEventListener("change",function(){
    gunindexi = gunsecimi.selectedIndex;
    console.log(gunindexi);
});
bolumsecimi.addEventListener("change",function(){
    bolumindexi = bolumsecimi.selectedIndex;
    console.log(bolumindexi);
});
eklebutonu.addEventListener("click", asistanbilgisikaydetme);

function asistanbilgisikaydetme(e) {
    e.preventDefault();
    yeniasistan.ad_soyad = isimsoyisim.value;
    yeniasistan.sifre = sifre.value;
    yeniasistan.hakkinda = hakkinizda.value;
    yeniasistan.telefon_no = telefonnumarasi.value;
    yeniasistan.eposta = email.value;
    yeniasistan.ev_adresi = evadresi.value;
    yeniasistan.linkedin = linkedin.value;
    let asistannobetbilgisi = [yeniasistan.pzt, yeniasistan.sal, yeniasistan.car,yeniasistan.per,yeniasistan.cum,yeniasistan.cmt,yeniasistan.paz];
    let bolumler =["cocuk acil","cocuk yogun bakimi","cocuk hematolojisi ve onkolojisi"];
    let saatler =["09:00-12:00","12:00-14:00","14:00-17:00","17:00-19:00","19:00-21:00","21:00-00:00"];
    const saatindexi = Math.floor(Math.random()*5);
        asistannobetbilgisi[gunindexi].bolum = bolumler[bolumindexi];
        asistannobetbilgisi[gunindexi].saat = saatler[saatindexi];
   console.log(yeniasistan);
    asistanlar.push(yeniasistan);
    localStorage.setItem("asistanlar", JSON.stringify(asistanlar));
    const basari = document.querySelector(".aktarma");
    basari.style.display = "flex";
    const anasayfayagitbutonu = document.querySelector(".anasayfayagitbutonu");
    anasayfayagitbutonu.addEventListener("click",anasayfayagit);
    function anasayfayagit(){
        window.location.href = "ana_sayfa.html";
    
    }
}




  
 