import React from "react";

import "../Styles/Experince.css";
import { useTranslation } from "react-i18next";

function Experince() {
  const { t } = useTranslation();

  return (
    <div className="experince-container">
      <div className="experince-header"> {t("DENEYİM")} </div>
      <div className="experince-info">
        <strong> {t("PROJECT_ONE")} </strong>
        <p>{t("PROJECT_ONE_DESCRIPTION")}</p>
        <strong> {t("PROJECT_TWO")} </strong>
        <p>{t("PROJECT_TWO_DESCRIPTION")}</p>
        <strong> {t("PROJECT_THREE")} </strong>
        <p>{t("PROJECT_THREE_DESCRIPTION")}</p>
      </div>
    </div>
  );
}

export default Experince;
