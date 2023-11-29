import "./App.css";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

import Details from "./Components/Details";
import Education from "./Components/Education";
import Experince from "./Components/Experince";
import Language from "./Components/Language";
import Navbar from "./Components/Navbar";
import Profil from "./Components/Profil";
import Skills from "./Components/Skills";
import html2canvas from "html2canvas";

import pdfMake from "pdfmake/build/pdfmake";

import { useState } from "react";

function App() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLanguage);
  };

  const [url, setUrl] = useState(null);
  pdfMake.vfs = pdfMake.vfs || {};

  const createPdf = async () => {
    const content = document.getElementById("root");
    const canvas = await html2canvas(content, {
      scale: 2,
      dpi: window.devicePixelRatio * 190,
    });

    const imageData = canvas.toDataURL("image/jpeg", 1.0);

    const pdfGenerator = pdfMake.createPdf({
      content: [
        {
          image: imageData,
          width: 500,
        },
      ],
      pageOrientation: "portrait",
      pageSize: "A4",
      image: { quality: 0.98 },
    });

    pdfGenerator.getBlob((blob) => {
      const url = URL.createObjectURL(blob);
      setUrl(url);
    });

    pdfGenerator.download("MustafaBolat_cv.pdf");
  };

  return (
    <>
      <div className="language_button">
        <Button
          color="secondary"
          size="small"
          variant="filled"
          onClick={toggleLanguage}
        >
          {i18n.language}
        </Button>

        <Button
          color="secondary"
          size="small"
          variant="filled"
          onClick={createPdf}
        >
          <DownloadIcon />
        </Button>
      </div>

      <Navbar />
      <Details />
      <Profil />
      <Education />
      <Experince />
      <Skills />
      <Language />
    </>
  );
}

export default App;
