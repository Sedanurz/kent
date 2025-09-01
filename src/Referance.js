import './referance.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';


function Referance() {
    // Modal ve slider için state'ler
  const [showModal, setShowModal] = useState(false);
  const [currentReferenceIndex, setCurrentReferenceIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  // Referans verilerini tanımlayalım (her referans için birden fazla resim ve açıklama)
  const referenceData = [
  {
    id: 1,
    slides: [ 
      {
        image: "/img/esenyurtbelediye.jpg",
        description: "Esenyurt Belediyesi sınırları içerisinde yer alan Esenyurt Meydanına  5mm Totem Led Ekran imalatı yapıldı."
      }
    ]
  },
  {
    id: 2,
    slides: [
      {
        image: "",
        description: "Bu prestijli projede, yüksek kaliteli LED aydınlatma çözümlerimiz tercih edildi. Çevreye duyarlı ve enerji verimli ürünlerimiz sayesinde müşterimiz aydınlatma maliyetlerinde önemli bir tasarruf sağladı."
      },
      {
        image: "",
        description: "Bu prestijli projede, yüksek kaliteli LED aydınlatma çözümlerimiz tercih edildi. Çevreye duyarlı ve enerji verimli ürünlerimiz sayesinde müşterimiz aydınlatma maliyetlerinde önemli bir tasarruf sağladı."
      },
      {
        image: "",
        description: "Aydınlatma sistemlerimiz, estetik tasarımı ve fonksiyonelliği bir araya getirerek projeye değer kattı. Ayrıca, LED teknolojisi sayesinde bakım maliyetleri de minimum seviyeye indirildi."
      }
    ]
  },
  {
    id: 3,
    slides: [
      {
        image: "",
        description: "Bu projede, enerji verimliliği ve estetik tasarımı ön planda tutarak, modern bir aydınlatma çözümü sunduk. Kullanılan LED ürünlerimiz, uzun ömürlü ve düşük enerji tüketimi ile dikkat çekiyor."
      },
      {
        image: "",
        description: "Bu projede, enerji verimliliği ve estetik tasarımı ön planda tutarak, modern bir aydınlatma çözümü sunduk. Kullanılan LED ürünlerimiz, uzun ömürlü ve düşük enerji tüketimi ile dikkat çekiyor."
      }
    ]
  },
  {
    id: 4,
    slides: [
      {
        image: "",
        description: "Bu projede, LED aydınlatma çözümlerimizle hem estetik hem de enerji verimliliği sağladık. Ürünlerimiz, %50 daha az enerji tüketimiyle çevreye duyarlı bir çözüm sunuyor."
      },
      {
        image: "",
        description: "Akıllı kontrol sistemlerimiz, ışık seviyelerini optimize ederek enerji tasarrufunu maksimize etti ve kullanıcı konforunu artırdı."
      },
      {
        image: "",
        description: "Uzun ömürlü LED armatürlerimiz, bakım maliyetlerini düşürerek projenin sürdürülebilirliğini artırdı."
      }
    ]
  },
  {
    id: 5,
    slides: [
      {
        image: "",
        description: "Kent LED’in modern aydınlatma çözümleriyle bu proje, enerji maliyetlerinde önemli bir düşüş sağladı. LED ürünlerimiz, yüksek verimlilikle çalışır."
      },
      {
        image: "",
        description: "Estetik tasarımlı armatürlerimiz, mekanın görsel çekiciliğini artırırken çevre dostu bir çözüm sundu."
      }
    ]
  },
  {
    id: 6,
    slides: [
      {
        image: "",
        description: "Bu prestijli projede, LED sokak aydınlatmalarıyla güvenliği artırdık ve enerji tüketimini %55 azalttık."
      },
      {
        image: "",
        description: "Akıllı sensörlerimiz, ışık seviyelerini otomatik olarak ayarlayarak ek enerji tasarrufu sağladı."
      },
      {
        image: "",
        description: "LED ürünlerimiz, düşük bakım gereksinimiyle işletme giderlerini minimuma indirdi."
      }
    ]
  },
  {
    id: 7,
    slides: [
      {
        image: "",
        description: "Özel tasarım LED armatürlerimizle bu proje, mekanın mimarisini vurguladı ve enerji verimliliği sağladı."
      },
      {
        image: "",
        description: "Çevre dostu LED teknolojimiz, karbon ayak izini azaltarak sürdürülebilir bir çözüm sundu."
      }
    ]
  },
  {
    id: 8,
    slides: [
      {
        image: "",
        description: "Bu projede, yüksek performanslı LED aydınlatma sistemlerimizle enerji tasarrufu ve görsel konfor sağladık."
      },
      {
        image: "",
        description: "Akıllı kontrol sistemlerimiz, uzaktan yönetim imkanı sunarak kullanım kolaylığı sağladı."
      },
      {
        image: "",
        description: "LED ürünlerimiz, uzun ömürlü yapısıyla bakım maliyetlerini önemli ölçüde azalttı."
      }
    ]
  },
  {
    id: 9,
    slides: [
      {
        image: "",
        description: "Modern LED çözümlerimizle bu proje, estetik ve enerji verimliliğini bir araya getirdi."
      },
      {
        image: "",
        description: "Düşük enerji tüketimiyle çevreye duyarlı bir aydınlatma sistemi sunduk."
      },
      {
        image: "",
        description: "Beyoğlu Belediyesinde yer alan Konferans Salonuna İndoor 2.5mm Led Ekran imalatı yapılmıştır."
      }

    ]
  },
  {
    id: 10,
    slides: [
      {
        image: "/img/likebeyoglu.jpg",
        additionalImages: [
          "/img/likebeyoglu (2).jpg",
        ],
        description: "İstiklal Caddesi üzerinde yer alan Beyoğlu Belediyesi Ek Hizmet Binası girişine 5mm Curve Ekran imalatı yapıldı."
      },
      {
        image: "/img/beyoglubelediye.jpg",
        description: "Beyoğlu Belediyesinin Şişhanede bulunan Belediye Hizmet Binası önüne 5mm Cephe Led Ekran imalatı yapıldı."
      }
    ]
  },
  {
    id: 11,
    slides: [
      {
        image: "",
        description: "Kent LED’in yenilikçi çözümleriyle bu proje, enerji tasarrufu ve görsel estetik sağladı."
      },
      {
        image: "",
        description: "Çevre dostu LED ürünlerimiz, karbon emisyonlarını azaltarak doğayı korudu."
      }
    ]
  },
  {
    id: 12,
    slides: [
      {
        image: "",
        description: "Bu projede, LED aydınlatma sistemlerimizle enerji maliyetlerini %60 azalttık."
      },
      {
        image: "",
        description: "Akıllı kontrol sistemlerimiz, ışık seviyelerini otomatik olarak ayarlayarak verimliliği artırdı."
      },
      {
        image: "",
        description: "Uzun ömürlü LED’lerimiz, bakım giderlerini minimuma indirdi."
      }
    ]
  },
  {
    id: 13,
    slides: [
      {
        image: "",
        description: "Özel tasarım LED armatürlerimiz, bu projede mekanın estetiğini ön plana çıkardı."
      },
      {
        image: "",
        description: "Enerji verimli çözümlerimiz, çevresel sürdürülebilirliğe katkı sağladı."
      }
    ]
  },
  {
    id: 14,
    slides: [
      {
        image: "/img/breadcrump.png",
        description: "Suryapı Axis İstanbul AVM Cephesine  25600 mm x 6144 mm Ölçülerinde P16mm Led Ekran imalatı yapılmıştır."
      },
      {
        image: "/img/bayrampasaLike.jpg",
        description: "Bayrampaşa Belediyesi sınırları içerisinde yer alan Bayrampaşa Meydanına  5mm Çift Yönü Totem Led Ekran imalatı yapıldı. "
      }
    ]
  },
  {
    id: 15,
    slides: [
      {
        image: "/img/bagcilarlike.jpg",
        additionalImages: [
          "/img/bagcilarlike1.jpg"
        ],
        description: "Bağcılar Belediyesine  Çift Yönlü olarak geliştirilen P3mm Totem Led Ekran imalatı yapılmıştır.",
      },
      {
        image: "/img/bagcilarlike2.jpg",
        additionalImages: [
          "/img/bagcilarlike3.jpg"
        ],
        description: "Bağcılar Belediyesine  Çift Yönlü olarak geliştirilen P3mm Totem Led Ekran imalatı yapılmıştır.",
      },
      {
        image: "/img/bagcilar4.jpg",
        description: "Bağcılar Belediyesine ait olan Bağcılar Meydanına 5mm Totem Led Ekran imalatı yapılmıştır."
      }
     
    ]
  },
  {
    id: 16,
    slides: [
      {
        image: "/img/goplike.jpg",
        additionalImages: [
          "/img/goplike1.jpg",
          "/img/mobilled.jpg",
        ],
        description: "Gaziosmanpaşa Belediyesi için imal ettiğimiz Mobil LED Ekran aracımız sayesinde artık sadece cephelerde ve totemlerde değil, yollarda ve istenilen her alanda da hizmet sunulabilmektedir."
      }
    ]
  },
  {
    id: 17,
    slides: [
      {
        image: "",
        description: "Kent LED’in yenilikçi aydınlatma çözümleriyle bu proje, enerji verimliliği sağladı."
      },
      {
        image: "",
        description: "Çevre dostu LED ürünlerimiz, karbon ayak izini azalttı."
      }
    ]
  },
  {
    id: 18,
    slides: [
      {
        image: "",
        description: "Bu projede, LED sokak aydınlatmalarıyla güvenliği artırdık ve enerji maliyetlerini düşürdük."
      },
      {
        image: "",
        description: "Akıllı sensör teknolojimiz, ışık kullanımını optimize ederek tasarruf sağladı."
      },
      {
        image: "",
        description: "Uzun ömürlü LED’lerimiz, bakım gereksinimlerini minimuma indirdi."
      }
    ]
  },
  {
    id: 19,
    slides: [
      {
        image: "",
        description: "Özel tasarım LED armatürlerimiz, bu projede mekanın estetiğini güçlendirdi."
      },
      {
        image: "",
        description: "Enerji verimli çözümlerimiz, çevresel sürdürülebilirliğe katkı sağladı."
      }
    ]
  },
  {
    id: 20,
    slides: [
      {
        image: "",
        description: "Bu projede, LED aydınlatma sistemlerimizle enerji tasarrufu ve görsel konfor sağladık."
      },
      {
        image: "",
        description: "Akıllı kontrol sistemlerimiz, ışık seviyelerini otomatik olarak ayarlayarak verimliliği artırdı."
      },
      {
        image: "",
        description: "LED ürünlerimiz, düşük bakım maliyetleriyle projenin sürdürülebilirliğini destekledi."
      }
    ]
  },
  {
    id: 21,
    slides: [
      {
        image: "/img/kanal24.jpg",
        additionalImages: [
          "/img/1kanal24.jpg",
          "/img/2kanal24.jpg",
          
        ],
        description: "TV 24 Kanalının Tv Stüdyosuna  İndoor 2.5mm Led Ekran imalatı yapılmıştır."
      },
    ]
  },
  {
    id: 22,
    slides: [
      {
        image: "",
        description: "Bu projede, LED sokak aydınlatmalarıyla güvenliği artırdık ve enerji tüketimini %50 azalttık."
      },
      {
        image: "",
        description: "Akıllı sensörlerimiz, gereksiz enerji kullanımını önleyerek tasarruf sağladı."
      },
      {
        image: "",
        description: "LED armatürlerimiz, uzun ömürlü yapısıyla işletme maliyetlerini azalttı."
      }
    ]
  },
  {
    id: 23,
    slides: [
      {
        image: "",
        description: "Özel tasarım LED ürünlerimiz, bu projede mekanın mimarisini vurguladı."
      },
      {
        image: "",
        description: "Çevre dostu LED teknolojimiz, karbon emisyonlarını azalttı."
      }
    ]
  },
  {
    id: 24,
    slides: [
      {
        image: "",
        description: "Bu projede, LED aydınlatma ile görsel konfor ve enerji tasarrufu sağladık."
      },
      {
        image: "",
        description: "Akıllı kontrol sistemlerimiz, uzaktan yönetimle kullanım kolaylığı sundu."
      },
      {
        image: "",
        description: "LED ürünlerimiz, bakım maliyetlerini düşürerek projenin verimliliğini artırdı."
      }
    ]
  },
  {
    id: 25,
    slides: [
      {
        image: "/img/likeemlak.jpg",
        additionalImages: [
          "/img/likeemlak1.jpg"
        ],
        description: "Kent LED’in yenilikçi çözümleriyle bu proje, enerji verimliliği ve estetik sağladı."
      }
    ]
  },
  {
    id: 26,
    slides: [
      {
        image: "/img/hastanesultan.jpg",
        additionalImages: [
          "/img/sultangazilike.jpg",
          "/img/sultangazilike1.jpg",
        ],
        description: "Sultangazi Belediyesine ait olan Belediye Hizmet Binasının cephesine 5mm Led Ekran imalatı yapılmıştır."
      }
    ]
  },
  {
    id: 27,
    slides: [
      {
        image: "/img/watson.jpg",
        description: "Zorlu AVM’de yer alan Watsons mağazasına İndoor 2.5mm Led Ekran imalatı yapılmıştır."
      }
    ]
  },
  {
    id: 28,
    slides : [
      
      { 
        image: "/img/fatih01.jpg",
        additionalImages: [
          "img/fatih02.jpg",
        ],
        description: "Fatih Belediyesi Cerrahpaşa Kütüphanesine 4160 mm x 2240 mm Ölçülerinde P5mm Led Ekran imalatı yapılmıştır."
      },
      { 
        image: "img/cocukparki.jpg",
        additionalImages: [
          "img/cocukparki1.jpg"
          ],
        description: " CLP ekran ürünümüz artık sadece yüksek alanlarda ve cephelerde değil;parklar, yürüyüş yolları ve caddelerde de hizmet vermektedir. Bu kapsamda, Fatih Belediyesi sınırları içinde yer alan Fatih Meydanı'na CLP LED imalatı gerçekleştirişmiştir."
      },
      
      { 
        image: "/img/fatih03.jpg",      
        description: " Fatih Belediyesi Hizmet Binası Cephesine P5mm Led Ekran imalatı yapılmıştır."
      },
      { 
        image: "img/fatihdugun.jpg",
        additionalImages: [
          "img/fatihdugun1.jpg"
          ],
        description: "Fatih Belediyesine ait olan Konferans Salonuna İndoor 2.5mm Led Ekran imalatı yapılmıştır."
      },
      { 
        image: "img/fatih.jpg",
        additionalImages: [
          "img/fatih1.jpg"
          ],
        description: "Fatih Belediyesine ait olan Konferans Salonuna İndoor 2.5mm Led Ekran imalatı yapılmıştır."
      },
    ]
  },
  {
    id: 29,
    slides: [
      {
        image: "img/interia1.jpg",
        additionalImages: [
         "/img/interia2.jpg",
        ],
        description: "Skyland Home Design Center içerisinde yer alan İnteria mağazasına İndoor 2.5mm Led Ekran imalatı yapılmıştır."
      }
    ]
  },
  {
    id: 30,
    slides: [
      {
        image: "/img/guess.jpg",
         additionalImages: [
         "/img/guesslike1.jpg",
         "/img/guesliked.jpg"
        ],

        description: "Bu projede, LED sokak aydınlatmalarıyla güvenliği artırdık ve enerji tüketimini %55 azalttık."
      },
    ]
  },
  {
    id: 31,
    slides: [
      {
        image: "",
        description: "Özel tasarım LED ürünlerimiz, bu projede mekanın mimarisini vurguladı."
      },
      {
        image: "",
        description: "Çevre dostu LED teknolojimiz, karbon emisyonlarını azalttı."
      }
    ]
  },
  {
    id: 32,
    slides: [
      {
        image: "img/fame01.jpg",
        additionalImages: [
          "img/famelike.jpg",
          "img/famelike1.jpg"
        ],
        description: "Merter’in öncü markalarından olan Fame Tekstil mağazasının içerisine P1.86 İndoor Led Ekran montajı yapıldı."
      }
    ]
  },
  {
    id: 33,
    slides: [
      {
        image: "",
        description: "Kent LED’in yenilikçi çözümleriyle bu projekt, enerji verimliliği ve estetik sağladı."
      },
      {
        image: "",
        description: "Düşük enerji tüketimiyle çevre dostu bir aydınlatma sistemi sunduk."
      }
    ]
  },
  {
    id: 34,
    slides: [
      {
        image: "/img/basaksehir.jpg",
        description: "Başakşehir Belediyesine ait olan Gençlik Merkezine İndoor 2.5mm Led Ekran imalatı yapılmıştır."
      },
       {
        image: "/img/basaksehirLike.jpg",
        description: "Başakşehir Belediyesine ait olan Gençlik Merkezine İndoor 2.5mm Led Ekran imalatı yapılmıştır."
      },
       {
        image: "/img/basaksehirLike1.jpg",
        description: "Başakşehir Belediyesine ait olan Gençlik Merkezine İndoor 2.5mm Led Ekran imalatı yapılmıştır."
      },
      {
        image: "/img/basaksehirLike2.jpg",
        additionalImages: [
          "/img/basaksehir01.jpg",
        ],
        description: "Başakşehir Belediye Hizmet Binası içerisine İndoor 2.5mm Led Ekran imalatı yapılmıştır."
      },
      {
        image: "/img/basaksehir03.jpg",
        description: "Başakşehir Belediyesine ait olan Konferans Salonu içerisine İndoor 2.5mm Led Ekran imalatı yapılmıştır."
      }
    ]
  },
  {
    id: 35,
    slides: [
      {
        image: "",
        description: "Özel tasarım LED armatürlerimiz, bu projede mekanın estetiğini güçlendirdi."
      },
      {
        image: "",
        description: "Enerji verimli çözümlerimiz, çevresel sürdürülebilirliğe katkı sağladı."
      }
    ]
  },
  {
    id: 36,
    slides: [
      {
        image: "",
        description: "Bu projede, LED aydınlatma sistemlerimizle enerji tasarrufu ve gör sorpres konfor sağladık."
      },
      {
        image: "",
        description: "Akıllı kontrol sistemlerimiz, ışık seviyelerini otomatik olarak ayarlayarak verimliliği artırdı."
      },
      {
        image: "",
        description: "LED ürünlerimiz, düşük bakım maliyetleriyle projenin sürdürülebilirliğini destekledi."
      }
    ]
  },
  {
    id: 37,
    slides: [
      {
        image: "/img/gizia2.jpg",
        additionalImages: [
          "/img/gizia1.jpg",
          "/img/gizia3.jpg",
        ],
        description: "Modern LED  bu proje, estetik ve fonksiyonelliği birleştirdi."
      }
    ]
  },
  {
    id: 38,
    slides: [
      {
        image: "",
        description: "Bu projede, LED sokak aydınlatmalarıyla güvenliği artırdık ve enerji tüketimini %60 azalttık."
      },
      {
        image: "",
        description: "Akıllı sensörlerimiz, gereksiz enerji kullanımını önVitamins ederek tasarruf sağladı."
      },
      {
        image: "",
        description: "LED armatürlerimiz, uzun ömürlü yapısıyla işletme maliyetlerini azalttı."
      }
    ]
  },
   {
    id: 39,
    slides: [
      {
        image: "",
        description: "Bu projede, LED sokak aydınlatmalarıyla güvenliği artırdık ve enerji tüketimini %60 azalttık."
      },
      {
        image: "",
        description: "Akıllı sensörlerimiz, gereksiz enerji kullanımını önVitamins ederek tasarruf sağladı."
      },
      {
        image: "",
        description: "LED armatürlerimiz, uzun ömürlü yapısıyla işletme maliyetlerini azalttı."
      }
    ]
  },
  {
    id: 40,
    slides: [
      {
        image: "/img/bahcelievlerlike.jpg",
        additionalImages: [
          "/img/bahcelievlerlike1.jpg"
        ],
        description: "İswest’in basın ekspresse cephe olan kısımda yer alan Bahçelievler Belediyesine ait 5mm Totem Led Ekran imalatı yapıldı."
      },
      {
        image: "/img/bahcelievler1.jpg",
        description: "İswest’in basın ekspresse cephe olan kısımda yer alan Bahçelievler Belediyesine ait 5mm Totem Led Ekran imalatı yapıldı."
      },
      {
        image: "/img/bahcelievler2.jpg",
        description: "Bahçelievler Belediyesine ait olan Belediye Hizmet Binası yanına 5mm Led Ekran imalatı yapıldı."
      },
      {
        image: "/img/bahcelievler2.png",
        description: "Şirinevler Meydanında 5120 mm x 2880 mm Ölçülerinde P5mm Totem Led Ekran imalatı yapılmıştır."
      }
    ]
  },
  {
    id: 41,
    slides: [
            {
       image: "/img/zeytinbuz1.jpg",
      additionalImages: [
         "/img/zeytinbuz.jpg"
        ],
        description:"Zeytinburnu Belediyesi’ne ait olan Buz Pisti içerisine İndoor 2.5mm Led Ekran imalatı yapılmıştır."
      },
      {
        image: "/img/zeytinburnu.jpg",
        description:"Zeytinburnu Belediyesi sınırları içerisinde yer alan Millet Bahçesi yanına 5mm Led Ekran imalatı yapıldı."
      },
      {
        image: "/img/zeytn.jpg",
        additionalImages: [
          "/img/zeytin.jpg",
        ],  
        description:"Zeytinburnu Belediyesi giriş alanında yer alan Karşılama Salonuna İndoor 2.5mm Led Ekran imalatı yapılmıştır."
      }
    ]
  },
  {
  id: 42,
  slides: [
    {
      image: "/img/ceramicLike.jpg",
      description: "Bu projede, LED aydınlatma sistemlerimizle enerji tasarrufu ve görsel konfor sağladık."
    },
]},
{  id: 43,
  slides: [
    {
      image: "/img/colinsLike.jpg",
      additionalImages: [
         "/img/colinsLike1.jpg"
        ],
      description: "Bu projede, LED aydınlatma sistemlerimizle enerji tasarrufu ve görsel konfor sağladık."
    },
  ]}, 
  {  id: 44,
  slides: [
    {
      image: "/img/livialike.jpg",
      additionalImages: [
         "/img/livialike1.jpg",
          "/img/livialike3.jpg",
          "/img/livialike4.jpg"
        ],
      description: "Bu projede, LED aydınlatma sistemlerimizle enerji tasarrufu ve görsel konfor sağladık."
    },
  ]}, 
   {  id: 45,
  slides: [
    {
      image: "/img/livinglablike.jpg",
      additionalImages: [
         "/img/livinglablike1.jpg"
        ],
      description: "Bu projede, LED aydınlatma sistemlerimizle enerji tasarrufu ve görsel konfor sağladık."
    },
  ]}, 
  {  id: 46,
  slides: [
    {
      image: "/img/enzahomelike.jpg",
      additionalImages: [
         "/img/enzahomelike1.jpg"
        ],
      description: "Bu projede, LED aydınlatma sistemlerimizle enerji tasarrufu ve görsel konfor sağladık."
    },
  ]}, 
   {  id: 47,
  slides: [
    {
      image: "/img/ramada.jpg",
      additionalImages: [
         "/img/ramada1.jpg",
          "/img/ramada2.jpg",
          "/img/ramada3.jpg"
        ],
      description: "Bu projede, LED aydınlatma sistemlerimizle enerji tasarrufu ve görsel konfor sağladık."
    },
  ]}, 
  {  id: 48,
  slides: [
    {
      image: "/img/alimdovizlike1.jpg",
      additionalImages: [
         "/img/alimdovizlike.jpg",
        ],
      description: "Bu projede, LED aydınlatma sistemlerimizle enerji tasarrufu ve görsel konfor sağladık."
    },
  ]}, 
  {  id: 49,
  slides: [
    {
      image: "/img/dileklike1.jpg",
      additionalImages: [
         "/img/dileklike.jpg",
        ],
      description: "Bu projede, LED aydınlatma sistemlerimizle enerji tasarrufu ve görsel konfor sağladık."
    },
  ]}, 
  {  id: 50,
  slides: [
    {
      image: "/img/mallofflike.jpg",
      additionalImages: [
         "/img/mallofflike1.jpg",
           "/img/mallofflike2.jpg"
        ],
      description: "Bu projede, LED aydınlatma sistemlerimizle enerji tasarrufu ve görsel konfor sağladık."
    },
  ]}, 
  {  id: 51,
  slides: [
    {
      image: "/img/meftek.jpg",
      additionalImages: [
         "/img/meftek1.jpg",
           "/img/meftek2.jpg"
        ],
      description: "Bu projede, LED aydınlatma sistemlerimizle enerji tasarrufu ve görsel konfor sağladık."
    },
  ]}, 
   {  id: 52,
  slides: [
    {
      image: "/img/musiad.jpg",
      additionalImages: [
         "/img/musiad1.jpg",
           "/img/musiad2.jpg",
            "/img/musiad3.jpg"
        ],
      description: "Bu projede, LED aydınlatma sistemlerimizle enerji tasarrufu ve görsel konfor sağladık."
    },
  ]}, 
  {  id: 53,
  slides: [
    {
      image: "/img/sampas.jpg",
      description: "Bu projede, LED aydınlatma sistemlerimizle enerji tasarrufu ve görsel konfor sağladık."
    },
  ]}, 
    {  id: 54,
  slides: [
    {
      image: "/img/tcdd.jpg",
      additionalImages: [
         "/img/tcdd1.jpg",
           "/img/tcdd2.jpg"
        ],
      description: "Bu projede, LED aydınlatma sistemlerimizle enerji tasarrufu ve görsel konfor sağladık."
    },
  ]},
   {  id: 55,
  slides: [
    {
      image: "/img/yatas2.jpg",
      additionalImages: [
         "/img/yatas1.jpg",
           "/img/yatas.jpg"
        ],
      description: "Bu projede, LED aydınlatma sistemlerimizle enerji tasarrufu ve görsel konfor sağladık."
    },
  ]},
  {  id: 56,
  slides: [
    {
      image: "/img/tria1.jpg",
      additionalImages: [
         "/img/tria.jpg",
           "/img/tria2.jpg"
        ],
      description: "Bu projede, LED aydınlatma sistemlerimizle enerji tasarrufu ve görsel konfor sağladık."
    },
  ]},
  {  id: 57,
  slides: [
    {
      image: "/img/hastane.jpg",
      additionalImages: [
         "/img/hastan2.jpg"
        ],
      description: "Bu projede, LED aydınlatma sistemlerimizle enerji tasarrufu ve görsel konfor sağladık."
    },
  ]},
];


  // Modal açıldığında ilk resmi seç
const openModal = (index) => {
  setCurrentReferenceIndex(index);
  setCurrentSlideIndex(0); // Modalı açarken ilk slide'a geç
  // İlk resmi başlangıçta seç
  setSelectedImage(referenceData[index].slides[0].image);
  setShowModal(true);
};

// Resim değiştirme fonksiyonu
const changeMainImage = (imgSrc) => {
  setSelectedImage(imgSrc);
};

// Slider değiştiğinde seçili resmi güncelle
useEffect(() => {
  if (showModal && referenceData[currentReferenceIndex]) {
    setSelectedImage(referenceData[currentReferenceIndex].slides[currentSlideIndex].image);
  }
}, [currentSlideIndex, currentReferenceIndex, showModal]);


  // Modalı kapatma fonksiyonu
  const closeModal = () => {
    setShowModal(false);
  };

  // Sonraki slide'a geçme
  const nextSlide = () => {
    const currentReference = referenceData[currentReferenceIndex];
    if (currentSlideIndex < currentReference.slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      setCurrentSlideIndex(0); // Son slide'da ise başa dön
    }
  };
  // Önceki slide'a geçme
  const prevSlide = () => {
    const currentReference = referenceData[currentReferenceIndex];
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    } else {
      setCurrentSlideIndex(currentReference.slides.length - 1); // İlk slide'da ise sona git
    }
  };

    return (

        <div>
        {/* Spinner Start */}
         {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-grow text-primary" style={{width: '3rem', height: '3rem'}} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>  */}

          <Header/>
          <Navbar/>
        {/* Navbar End */}
        {/* Page Header Start */}
       <div 
      className="container-fluid page-header position-relative"
      data-wow-delay="0.1s"
      style={{
        background: `
          url(/img/kentledarkaplan.jpg)
          center center no-repeat
        `,
        backgroundSize: 'cover',
        height: '400px',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Koyu overlay katmanı */}
      <div 
        className="position-absolute w-100 h-100" 
        style={{
          background: 'rgba(0, 0, 0, 0.5)', // Yarı şeffaf siyah katman
          top: 0,
          left: 0,
          zIndex: 1
        }}
      ></div>
      
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <h1 
          className="display-3 text-white mb-3 animated slideInDown"
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Metin gölgesi
            fontWeight: 'bold'
          }}
        >
          REFERANSLAR
        </h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol 
            className="breadcrumb text-uppercase mb-0"
          
          >
            <li className="breadcrumb-item">
              <a 
                className="text-white" 
                href="/main"
                style={{
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
                  textDecoration: 'none'
                }}
              >
                Ana Sayfa
              </a>
            </li>
            <li 
              className="breadcrumb-item text-info active" 
              aria-current="page"
              style={{
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
                fontWeight: 'bold'
              }}
            >
              REFERANSLAR
            </li>
          </ol>
        </nav>
      </div>
    </div>

        {/* Page Header End */}
      {/* References Start */}
        <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h1 className="mb-4">Referanslarımız</h1>
            <p>Kent LED olarak yıllardır aydınlatma sektöründe güvenilir bir çözüm ortağı olmaktan gurur duyuyoruz. İşte bizimle çalışan değerli müşterilerimizden bazıları.</p>
          </div>
          <div className="row g-4">

               {/* Reference Item enza home  */}
              <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/gueslogo.png" alt="Referans 4" />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(29)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
               {/* Reference Item emlak konut */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/emlakkonutlogo.jpg" alt="Referans 4" />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(24)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
                                      {/* Reference Item interia */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/enza-logo.svg" alt="Referans 3" style={{ width: '85%', height: 'auto' }} />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(45)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
                        {/* Reference Item fame */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/famelogo.jpg" alt="Referans 1" />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(31)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
               {/* Reference Item musiad */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/musiad-logo.png" alt="Referans 1" style={{ width: '67%', height: 'auto' }} />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(51)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
              {/* Reference Item yatas */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="references-item">
                <div className="references-img">
                  <img src="https://api.yatas.com.tr/medias/yatas-bedding-logo.svg?context=bWFzdGVyfHJvb3R8MzQ1N3xpbWFnZS9zdmcreG1sfGFEVmlMMmcxT0M4NE9EWTVORGt6T0RrNU1qazBMM2xoZEdGekxXSmxaR1JwYm1jdGJHOW5ieTV6ZG1jfDg1YTQyYzUyYThiNjc3OWRiNzJhNWM4OTBkMDMwMTliODM5YmYyYTIxOGU1ZDIxZTM3NTE3MzlmM2E1Y2VlOWM" alt="Referans 1" style={{ width: '90%', height: 'auto' }} />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(54)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
               {/* Reference Item tria dugun */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/logo (1).png" alt="Referans 1"/>
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(55)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
               {/* Reference Item mall of istanbul*/}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="references-item">
                <div className="references-img">
                  <img src="https://sampas.com.tr/uploads/2023/07/animated-logo.svg" alt="Referans 1" style={{ width: '75%', height: 'auto' }}   />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(52)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
             {/* Reference Item mall of istanbul*/}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="references-item">
                <div className="references-img">
                  <img src="https://www.mallofistanbul.com.tr/assets/images/frontend/moi/logonew.svg" alt="Referans 1" style={{ width: '70%', height: 'auto' }}   />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(49)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
               {/* Reference Item meftek */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/meftek-logo.png" alt="Referans 1" style={{ width: '70%', height: 'auto' }}   />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(50)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
              {/* Reference Item colins  */}
              <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="references-item">
                <div className="references-img">
                  <img src="https://static-colinstr.mncdn.com/Themes/Branch/Content/images/logo.png?v=1.0.1.106" alt="Referans 4" />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(42)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
             {/* Reference Item livia  */}
              <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="references-item">
                <div className="references-img">
                  <img src="https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/452196964_122094740462446533_8698540005564498606_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=z28GkjTHOwoQ7kNvwGcaVaW&_nc_oc=AdmF7cwb78MOnLcsS_2AEhfNV9pnfyas73FB8psm2bkq5r1zORqPh_Gj1T8AGnPOW2E&_nc_zt=23&_nc_ht=scontent-ist1-1.xx&_nc_gid=JhDt1q2NuHSuyUf74egEJw&oh=00_AfXwM7aUG6CSAe_4HvtN3blowPsROSFElqeJooyEGBifJA&oe=68A2C151" alt="Referans 4" style={{ width: '100%', height: 'auto' }} />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(43)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
                {/* Reference Item gizia */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/11.png" alt="Referans 3" />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(36)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
                {/* Reference Item living lab  */}
              <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/BLL-LOGO-1-400x142.png" alt="Referans 4" style={{ width: '75%', height: 'auto' }} />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(44)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
                          {/* Reference Item interia */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/4.png" alt="Referans 3" />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(28)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item ramada */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ramadaekran.png" alt="Referans 3" style={{ width: '65%', height: 'auto' }} /> 
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(46)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
               {/* Reference Item alim doviz */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/alimdovizlogo.png" alt="Referans 3"  /> 
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(47)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
               {/* Reference Item alim dilek grup */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="references-item">
                <div className="references-img">
                  <img src="https://www.dilekgrup.com.tr/img/logo.svg" alt="Referans 3"  /> 
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(48)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>

                 {/* Reference Item ceramic consept  */}
              <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ceramicconcept-dark-360x65.png" alt="Referans 4"  style={{ width: '75%', height: 'auto' }} />
                 
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(41)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>

               {/* Reference Item watsons */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/watsonsrfrns.jpg" alt="Referans 1" />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(26)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
               {/* Reference Item turkiye hastanesi */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/logo.png" alt="Referans 1" />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(56)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
             {/* Reference Item kanal 24 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-05.jpg" alt="Referans 5" />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(20)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>

                             {/* Reference Item TCDD */}
             <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/tcdd-logo.png" alt="Referans 2" />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(53)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
                        {/* Reference Item Fatih belediyesi */}
             <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/3.png" alt="Referans 2" />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(27)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
            

            {/* Reference Item bagcilar belediye */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-11.jpg" alt="Referans 15" />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(14)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
                {/* Reference Item bahcelievler belediye */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/blogo.png" alt="Referans 5"/>
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(39)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item zeytinburnu belediye */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="references-item">
                <div className="references-img">
                  <img src="https://zeytinburnu.istanbul/wp-content/themes/zb-theme/assets/img/icon-logo.svg" alt="Referans 5" style={{ width: '75%', height: 'auto' }} />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(40)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
             {/* Reference Item basaksehir belediye */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/5.png" alt="Referans 2" />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(33)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
               {/* Reference bayrampasa belediye 14 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-12.jpg" alt="Referans 14" />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(13)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
               {/* Reference Item beyoglu belediye */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-16.jpg" alt="Referans 10" />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(9)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
                  {/* Reference Item sultangazi belediyesi */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/sltngazirfrns-1.jpg" alt="Referans 5" />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(25)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
              
               {/* Reference Item gaziosmanpasa belediye */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-10.jpg" alt="Referans 16" />
                   <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(15)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Reference Item 1 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="references-item position-relative">
                <div className="references-img">
                  <img src="/img/esenlerbelediye.jpg" alt="Referans 1" />
                  <div className="references-overlay">
                    <button 
                      className="btn btn-primary reference-btn"
                      onClick={() => openModal(0  )}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item 2 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="references-item position-relative">
                <div className="references-img">
                  <img src="/img/ref-24.jpg" alt="Referans 2" />
                  <div className="references-overlay">
                  
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item 3 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-22.jpg" alt="Referans 3" />
                   <div className="references-overlay">
                  
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item 4 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-23.jpg" alt="Referans 4" />
                   <div className="references-overlay">
                  
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item 5 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-21.jpg" alt="Referans 5" />
                   <div className="references-overlay">
                    
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item 6 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-20.jpg" alt="Referans 6" />
                   <div className="references-overlay">
                
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item 7 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-19.jpg" alt="Referans 7" />
                   <div className="references-overlay">
                  
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item 8 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-18.jpg" alt="Referans 8" />
                   <div className="references-overlay">
                    
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item 9 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-17.jpg" alt="Referans 9" />
                   <div className="references-overlay">
                  
                  </div>
                </div>
              </div>
            </div>
           
            {/* Reference Item 11 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-15.jpg" alt="Referans 11" />
                   <div className="references-overlay">
                
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item 12 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-14.jpg" alt="Referans 12" />
                   <div className="references-overlay">
                   
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item 13 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-13.jpg" alt="Referans 13" />
                   <div className="references-overlay">
                    
                  </div>
                </div>
              </div>
            </div>
           
            
           
            {/* Reference Item 17 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-09.jpg" alt="Referans 1" />
                   <div className="references-overlay">
                   
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item 18 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-08.jpg" alt="Referans 2" />
                   <div className="references-overlay">
                   
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item 19 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-07.jpg" alt="Referans 3" />
                   <div className="references-overlay">
                 
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item 20 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="references-item">
                <div className="references-img">
                  <img src="ref-06.jpg" alt="Referans 4" />
                   <div className="references-overlay">
                   
                  </div>
                </div>
              </div>
            </div>
           
            {/* Reference Item 22 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-04.jpg" alt="Referans 1" />
                   <div className="references-overlay">
                   
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item 23 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/ref-03.jpg" alt="Referans 2" />
                   <div className="references-overlay">
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item 24 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/toki-logo.jpg" alt="Referans 3" />
                   <div className="references-overlay">
                  
                  </div>
                </div>
              </div>
            </div>
         
          
         
            {/* Reference Item 31 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/8.png" alt="Referans 5" />
                   <div className="references-overlay">
                   
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item 39 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/7.png" alt="Referans 1" />
                   <div className="references-overlay">
                 
                  </div>
                </div>
              </div>
            </div>
           
            {/* Reference Item 34 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/10.png" alt="Referans 1" />
                   <div className="references-overlay">
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item 35 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/9.png" alt="Referans 2" />
                   <div className="references-overlay">
                  </div>
                </div>
              </div>
            </div>
          
            {/* Reference Item 37 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/13.png" alt="Referans 4" />
                   <div className="references-overlay">
                  </div>
                </div>
              </div>
            </div>
            {/* Reference Item 38 */}
            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="references-item">
                <div className="references-img">
                  <img src="/img/14.png" alt="Referans 5" />
                   <div className="references-overlay">
                  </div>
                </div>
              </div>
            </div>
          

          </div>
        </div>
      </div>
      {/* References End */}{showModal && referenceData[currentReferenceIndex] && (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999
  }}>
    <div className="modal-reference-container" style={{
      width: '90%',
      maxWidth: '900px',
      position: 'relative',
      zIndex: 10000
    }}>
      <div className="modal-reference-content" style={{
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
        width: '100%'
      }}>
        <div className="modal-reference-header" style={{
          padding: '15px 20px',
          borderBottom: '1px solid #e9ecef',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#ffffff'
        }}>
          <h4>Referans Detayları </h4>
          <button className="btn-close" onClick={closeModal}></button>
        </div>
        <div className="modal-reference-body" style={{
          padding: '20px',
          backgroundColor: '#ffffff'
        }}>
          <div className="row">
            <div className="col-md-6">
              <div className="reference-detail-images" style={{
                height: '350px',
                overflow: 'hidden',
                borderRadius: '15px',
                backgroundColor: '#ffffff'
              }}>
                {/* Birden fazla resim gösterimi için resim galerisi */}
                <div className="image-gallery" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}>
                  {/* Ana resim */}
                  <div className="main-image" style={{ 
                    flex: '1', 
                    marginBottom: '10px',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={selectedImage || referenceData[currentReferenceIndex].slides[currentSlideIndex].image} 
                      alt={`Referans ${currentReferenceIndex + 1}`} 
                      className="img-fluid"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  
                  {/* Küçük resimler (thumbnail'lar) */}
                  {referenceData[currentReferenceIndex].slides[currentSlideIndex].additionalImages && (
                    <div className="thumbnail-container" style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      gap: '10px',
                      height: '60px',
                      overflowX: 'auto'
                    }}>
                      {/* Ana resmi thumbnail olarak göster */}
                      <div 
                        className="thumbnail active"
                        style={{
                          width: '60px',
                          height: '60px',
                          border: selectedImage === referenceData[currentReferenceIndex].slides[currentSlideIndex].image ? '2px solid #007bff' : '1px solid #ddd',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          cursor: 'pointer'
                        }}
                        onClick={() => changeMainImage(referenceData[currentReferenceIndex].slides[currentSlideIndex].image)}
                      >
                        <img 
                          src={referenceData[currentReferenceIndex].slides[currentSlideIndex].image}
                          alt="Thumbnail"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      
                      {/* Ek resimleri thumbnail olarak göster */}
                      {referenceData[currentReferenceIndex].slides[currentSlideIndex].additionalImages.map((imgSrc, idx) => (
                        <div 
                          key={idx}
                          className="thumbnail"
                          style={{
                            width: '60px',
                            height: '60px',
                            border: selectedImage === imgSrc ? '2px solid #007bff' : '1px solid #ddd',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            cursor: 'pointer'
                          }}
                          onClick={() => changeMainImage(imgSrc)}
                        >
                          <img 
                            src={imgSrc}
                            alt={`Thumbnail ${idx + 1}`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="reference-detail-description" style={{
                padding: '15px 0',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-center',
                textAlign: 'justify',
                backgroundColor: '#ffffff'
              }}>
                <p>{referenceData[currentReferenceIndex].slides[currentSlideIndex].description}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="modal-reference-footer" style={{
          padding: '15px 20px',
          borderTop: '1px solid #e9ecef',
          textAlign: 'flex-end',
          backgroundColor: '#ffffff'
        }}>
          {referenceData[currentReferenceIndex].slides.length > 1 && (
            <div className="slider-controls" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ffffff'
            }}>
              <button className="btn btn-sm btn-primary me-2" onClick={prevSlide}>
                <i className="bi bi-chevron-left"></i> Önceki
              </button>
              <span className="slide-indicator">
                {currentSlideIndex + 1} / {referenceData[currentReferenceIndex].slides.length}
              </span>
              <button className="btn btn-sm btn-primary ms-2" onClick={nextSlide}>
                Sonraki <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)}
                
              
          
         
         {/* Footer Start */}
         <Footer/> 
                {/* Footer End */}
                {/* Back to Top */}
                <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up" /></a>
                {/* JavaScript Libraries */}
                {/* Template Javascript */}
              </div>
     );
} export default Referance;