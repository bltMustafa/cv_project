import React from "react";
import "../Styles/Details.css";
import { useTranslation } from "react-i18next";

import RoomIcon from "@mui/icons-material/Room";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import GitHubIcon from "@mui/icons-material/GitHub";

function Details() {

  const { t } = useTranslation();

  
  return (
    <div className="details-container">
      <div className="details-header">  {t('BİLGİLER')} </div>
      <div className="details-info">
        <ul>
          <li>
            <RoomIcon sx={{ fontSize: 12 }} /> Hatay / İskenderun
          </li>
          <li>
            <MailIcon sx={{ fontSize: 12 }} />
            <span className="details-hr">mustafablt1905@gmail.com</span>
          </li>
          <li>
            <PhoneIphoneIcon sx={{ fontSize: 12 }} /> (543) 826 5820
          </li>
          <li>
            <GitHubIcon sx={{ fontSize: 12 }} /> github.com/bltMustafa
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Details;
