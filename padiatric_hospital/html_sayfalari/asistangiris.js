const asistanisimsoyisim = document.getElementById("isimsoyisim");
const asistanemailadresi = document.getElementById("email");
const asistansifresi= document.getElementById("sifre");
const formbutonu = document.querySelector(".buton");
formbutonu.addEventListener("click", asistanGirisFormuKontrol);

function asistanGirisFormuKontrol(event){
    event.preventDefault();

    const asistanlar=JSON.parse(localStorage.getItem("asistanlar"));
    console.log(asistanlar);
    for (let i = 0; i < asistanlar.length; i++) {
        const element = asistanlar[i];
        console.log(element);
        if( asistanisimsoyisim.value == element.ad_soyad && asistansifresi.value == element.sifre){
            localStorage.setItem("asistangirisyaptimi",true);
            localStorage.setItem("doktorgirisyaptimi",false);
            const girisyapanasistan ={
                ad_soyad: element.ad_soyad,
                email: asistanemailadresi.value,
                sifre: element.sifre,
                asistanresmi: element.asistanresmi
            };
            localStorage.setItem("hangiasistangirisyapti",JSON.stringify(girisyapanasistan));
            localStorage.setItem("hangidoktorgirisyapti",null);

            window.location.href = "ana_sayfa.html";
        }
    }
    
   
    
}