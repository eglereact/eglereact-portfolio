import { FaReact } from "react-icons/fa";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa";

export const projects = [
  {
    id: 1,
    name: "DnD Miniature Shop",
    info: "Produktų sąrašas, krepšelio funkcionalumas ir saugūs mokėjimai per Braintree.",
    img: "/eglereact-portfolio/images/dndweb.png",
    videoUrl:
      "https://drive.google.com/file/d/1rJbzhfL04fvvRGlIcvBFLk7ljQ-x03El/preview",
    used: [
      { icon: <FaReact />, text: "React biblioteką" },
      { icon: <FaNode />, text: "Express serverį" },
      { icon: <SiMysql />, text: "MySQL duomenų bazę" },
      { icon: <SiTailwindcss />, text: "TailwindCSS" },
    ],
    description:
      "DnD miniatiūrų parduotuvė, siūlanti produktų sąrašą, krepšelio funkcionalumą ir saugius mokėjimus per Braintree. Vartotojai gali prisijungti arba registruotis, o administratoriaus skydelyje galima valdyti produktus, užsakymus ir vartotojus. Skydelis leidžia pridėti, redaguoti ir šalinti produktus, užtikrinant sklandų parduotuvės valdymą.",
  },
  {
    id: 2,
    name: "React fund me",
    info: "Finansavimo platforma leidžianti vartotojams kurti savo kampanijas ir aukoti kitoms.",
    img: "/eglereact-portfolio/images/fund.jpg",
    videoUrl:
      "https://drive.google.com/file/d/1XSWjdz3ewHddx4zdmmXoTfTvu0Uzd6HH/preview",
    used: [
      { icon: <FaReact />, text: "React biblioteką" },
      { icon: <FaNode />, text: "Express serverį" },
      { icon: <SiMysql />, text: "MySQL duomenų bazę" },
      { icon: <SiTailwindcss />, text: "TailwindCSS" },
    ],
    description:
      "React Fund Me yra finansavimo platforma, leidžianti vartotojams lengvai kurti ir valdyti lėšų rinkimo kampanijas. Vartotojai gali lengvai prisijungti ar užsiregistruoti, kad sukurtų kampanijas, o administratoriaus skydelyje suteikiama visiška kontrolė valdant įrašus, aukas ir vartotojų paskyras. Valdymo panelė supaprastina turinio pridėjimo, redagavimo ir šalinimo procesą, užtikrindama sklandų visų lėšų rinkimo aspektų valdymą.",
  },

  {
    id: 3,
    name: "Something else",
    info: "Mini crud bank operation",
    img: "/eglereact-portfolio/images/loptop.png",
    videoUrl:
      "https://drive.google.com/file/d/1afvlQvcGNVil1mODBbTlhiTpd2o-G82W/preview",
  },
  {
    id: 4,
    name: "Fruit store",
    info: "Mini crud bank operation",
    img: "/eglereact-portfolio/images/loptop.png",
    videoUrl:
      "https://drive.google.com/file/d/1afvlQvcGNVil1mODBbTlhiTpd2o-G82W/preview",
  },
  {
    id: 5,
    name: "Wordle Clone",
    info: "Mini crud bank operation",
    img: "/eglereact-portfolio/images/loptop.png",
    videoUrl:
      "https://drive.google.com/file/d/1afvlQvcGNVil1mODBbTlhiTpd2o-G82W/preview",
  },
];
