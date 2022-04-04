import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import "./EmailRow.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import {useHistory} from 'react-router-dom';

function EmailRow({id, title, subject, description, time }) {
    const history=useHistory();
  return (
    <div  onClick={()=>history.push("/mail")}
    className="emailRow">
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <div className="emailRow_title">{title}</div>
      <div className="emailRow_message">
        <h4>
          {subject}{""}
          <span className="span.emailRow_description">{description}-</span>
        </h4>
      </div>
      <p className="emailRow_description">{time}</p>
    </div>
  );
}

export default EmailRow;
