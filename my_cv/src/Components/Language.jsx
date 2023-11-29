import React from "react";
import { useTranslation } from "react-i18next";
import "../Styles/Language.css";
import Rating from "@mui/material/Rating";

function Language() {
  const { t } = useTranslation();
  return (
    <div className="language-container">
      <div className="language-header"> {t("DİLLER")} </div>
      <div className="language-info">
        <div>
          <strong>
            {t("İNGİLİZCE")} <br />
          </strong>
          <Rating name="half-rating" value={2.5} precision={0.5} size="small" />
        </div>
        <div>
          <strong>
            {t("TÜRKÇE")}
            <br />
          </strong>
          <Rating name="half-rating" value={5} size="small" />
        </div>
      </div>
    </div>
  );
}

export default Language;
