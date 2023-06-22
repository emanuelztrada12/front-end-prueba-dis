import React from "react";
import { Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function CheckoutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        <div style={{ textAlign: "center", paddingTop: "25px" }}>
          <CheckCircleOutlineIcon sx={{ fontSize: 100, color: "green" }} />
          <Typography style={{fontSize: "23px", fontWeight: "bold"}} variant="subtitle1">
            Muchas gracias por llenar este formulario, se ha guardado con exito. 
          </Typography>
        </div>
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;