import React from "react";
import { useTranslation } from "react-i18next";
import "../Styles/Education.css";

function Education() {
  const { t } = useTranslation();

  return (
    <div className="education-container">
      <div className="education-header"> {t("EĞİTİM")} </div>
      <div className="education-info">
        <strong>
          {t("SCHOOL_INFO")} <br />
        </strong>
        <span> {t("DATE_INFO")} </span> <br />
        <strong> {t("HIGH_SCHOOL_INFO")} </strong> <br />
        <span> {t("HIGH_SCHOOL_DATE_INFO")} </span>
      </div>
    </div>
  );
}

export default Education;
