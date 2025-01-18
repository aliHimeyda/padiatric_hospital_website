import React, { useRef, useState } from "react";
import "../index.css";
function Durumkarti({ durumverisi }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup'un açık/kapalı durumu
  const [isimsoyisim, isimsoyisimguncelle] = useState("");
  const [telefonno, telefonnoguncelle] = useState("");
  const [durum, durumguncelle] = useState("");
  const [konum, konumguncelle] = useState("");
  const anneguncelle = useRef();

  const openPopup = (event) => {
    setIsPopupOpen(true);
  };

  // Popup'u kapatan fonksiyon
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // Popup içeriğini onaylayıp yazıyı güncelleyen fonksiyon
  const yaziyikaydet = (event) => {
    event.preventDefault();
    let tarihbilgisi = new Date();
    let yil = tarihbilgisi.getFullYear();
    let ay = tarihbilgisi.getMonth();
    let gun = tarihbilgisi.getDay();
    let saat = tarihbilgisi.getHours();
    let dakika = tarihbilgisi.getSeconds();
    let zaman = `${yil}-${ay}-${gun} ${saat}:${dakika}`;
    let durumlar = JSON.parse(localStorage.getItem("durumlar")); // Local Storage'daki durumları getiriyoruz
    durumlar.forEach((durumlarimiz) => {
      console.log(durumlarimiz);
      if (durumlarimiz.ad_soyad === durumverisi.ad_soyad) {
        durumlarimiz.ad_soyad = isimsoyisim;
        console.log(durumlar.ad_soyad);

        durumlarimiz.telefon_no = telefonno;
        console.log(durumlar.telefon_no);
        durumlarimiz.durum = durum;
        console.log(durumlar.durum);
        durumlarimiz.konum = konum;
        console.log(durumlar.konum);
        durumlarimiz.zaman = zaman;
        console.log(durumlar.zaman);
      }
    });
    localStorage.setItem("durumlar", JSON.stringify(durumlar)); // Local Storage'a güncel durumları yazıyoruz

    closePopup(); // Popup'u kapatır
    window.location.reload();
  };

  function durumsilmek(event) {
    event.preventDefault();
    setTimeout(() => {
      let durumlar = JSON.parse(localStorage.getItem("durumlar")); // Local Storage'daki durumları getiriyoruz

      durumlar.forEach((durumlarimiz, index) => {
        if (durumlarimiz.ad_soyad === durumverisi.ad_soyad) {
          durumlar.splice(index, 1);
        }
      });
      localStorage.setItem("durumlar", JSON.stringify(durumlar)); // Local Storage'a güncel durumları yazıyoruz

      window.location.reload();
    }, 2000);
  }

  //
  return (
    <div className="durumkarti" ref={anneguncelle}>
      {/* Ana kart divi */}
      <div className="gelenrandevukartikapsayicisi">
        {/* Kullanıcı resmi için div ve SVG */}
        <div className="kullanicibilgileri">
          <div className="kullaniciresmi">
            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
            </svg>
          </div>
          {/* Kullanıcı bilgileri */}
          <p className="kullaniciismi">
            {durumverisi.ad_soyad}
            <span>Telefon No: {durumverisi.telefon_no}</span>
          </p>
        </div>
        <div
          className="durumresmialani"
          style={{ backgroundImage: `URL(${durumverisi.durumresmi})` }}
        ></div>
        <div className="aciklamaalani">
          Aciklamalar : <br />
          <br /> {durumverisi.durum}
        </div>
        <div className="konumbilgileri">
          <p>
            Konum Bilgileri: <br /> <br /> {durumverisi.konum} <br /> <br />
            {durumverisi.tarih}{" "}
          </p>
          <button className="duzenlebutonu" onClick={openPopup}>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                  />
                </svg>
              </div>
            </div>
            <span>Duzenle</span>
          </button>
        </div>
        {/* Kabul ve reddet alanı */}
        <div className="kabulredkapsayicisi">
          {/* Kabul seçimi */}
          <label className="checkBox">
            <input id="ch1" type="checkbox" onChange={durumsilmek} />
            <div className="kabultransition" />
          </label>
          <span>hallettim</span>
        </div>
      </div>
      {/* Popup */}
      {isPopupOpen && (
        <div className="duzenlemekonumkapsayicisi">
          <div className="duzeltmepopup">
            <form className="form" action="">
              <div className="kapatbuton" onClick={closePopup}>
                <svg
                  className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                </svg>
              </div>

              <div className="kisiselbilgiler">
                <div className="girdialani">
                  <input
                    required=""
                    autoComplete="off"
                    type="text"
                    name="isimsoyisim"
                    id="isimsoyisim"
                    onChange={(e) => isimsoyisimguncelle(e.target.value)}
                  />
                  <label>isim soyisim</label>
                </div>
                <div className="girdialani">
                  <input
                    required=""
                    autoComplete="off"
                    type="text"
                    name="isimsoyisim"
                    onChange={(e) => telefonnoguncelle(e.target.value)}
                    id="hakkinizda"
                  />
                  <label>telefon numarasi</label>
                </div>
                <div className="girdialani">
                  <input
                    required=""
                    autoComplete="off"
                    type="text"
                    name="isimsoyisim"
                    onChange={(e) => durumguncelle(e.target.value)}
                    id="hakkinizda"
                  />
                  <label>durum</label>
                </div>
                <div className="girdialani">
                  <input
                    required=""
                    autoComplete="off"
                    type="text"
                    name="isimsoyisim"
                    onChange={(e) => konumguncelle(e.target.value)}
                    id="hakkinizda"
                  />
                  <label>konum bilgisi</label>
                </div>
              </div>

              <div className="butonalani">
                <button className="buton" onClick={yaziyikaydet}>
                  Tamamla
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Durumkarti;
