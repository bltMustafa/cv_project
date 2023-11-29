import "../Styles/Profil.css";

import { useTranslation } from "react-i18next";

function Profil() {
  const { t } = useTranslation();

  return (
    <div className="profil-container">
      <div className="profil-header"> {t("PROFİL")} </div>
      <div className="profil-description">
        <p>{t("PROFIL_INFO")}</p>
      </div>
    </div>
  );
}

export default Profil;
