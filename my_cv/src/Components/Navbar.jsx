import "../Styles/Home.css";

import { useTranslation } from "react-i18next";
import mustafaImage from "../images/mustafa_2.jpg";

function Navbar() {
  const { t } = useTranslation();

  return (
    <div className="cv-container">
      <div className="photo-container">
        <img src={mustafaImage} className="profile-photo" />
      </div>
      <div className="info-container">
        <h1>
          MUSTAFA <br /> BOLAT
        </h1>
        <p> {t("Öğrenci")} </p>
      </div>
    </div>
  );
}

export default Navbar;
