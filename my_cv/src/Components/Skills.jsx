import React from "react";
import "../Styles/Skills.css";
import Rating from "@mui/material/Rating";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  return (
    <div className="skills-container">
      <div className="skills-header"> {t("YETENEKLER")} </div>
      <div className="skills-info">
        <div>
          <strong>
            HTML <br />
          </strong>
          <Rating name="size-small" value={5} size="small" />
        </div>
        <div>
          <strong>
            CSS <br />
          </strong>
          <Rating name="size-small" value={4} size="small" />
        </div>
        <div>
          <strong>
            JAVASCRİPT <br />
          </strong>
          <Rating name="size-small" value={3} size="small" />
        </div>
        <div>
          <strong>
            REACT <br />
          </strong>
          <Rating name="size-small" value={4} size="small" />
        </div>
        <div>
          <strong>
            PYTHON <br />
          </strong>
          <Rating name="size-small" value={2} size="small" />
        </div>
        <div>
          <strong>
            TYPESCRİPT <br />
          </strong>
          <Rating name="size-small" value={3} size="small" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
