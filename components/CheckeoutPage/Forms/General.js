import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import PersonIcon from "@mui/icons-material/Person";
import Fab from "@mui/material/Fab";

export default function General(props) {
  const [dateYear, setDateYear] = useState("");

  const gettingDateYear = (e) => {
    var years =
      new Date(new Date() - new Date(e.target.value)).getFullYear() - 1970;
    setDateYear(years);
  };

  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  const {
    values,
    formField: { name_form, lastname_form, email_form, date_form },
  } = props;

  return (
    !isSSR && (
      <>
        <Typography
          variant="h6"
          gutterBottom
          style={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "20px",
            fontWeight: "bold",
            paddingTop: "40px",
            paddingLeft: "10px",
          }}
        >
          <p style={{ paddingLeft: "20px", paddingTop: "10px" }}>
            Ingrese su informacion
          </p>
        </Typography>
        <Divider style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Chip
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              paddingTop: "20px",
              paddingBottom: "20px",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            icon={<PersonIcon />}
            color="primary"
            label="Datos personales"
          />
        </Divider>
        <Grid
          item
          xs={12}
          sm={6}
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
        >
          <label
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              fontFamily: "Arial",
            }}
          >
            Nombres:
          </label>
          <InputField name={name_form.name} label={name_form.label} fullWidth />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "20px",
          }}
        >
          <label style={{ fontSize: "18px", fontWeight: "bold" }}>
            Apellidos:
          </label>
          <InputField
            name={lastname_form.name}
            label={lastname_form.label}
            fullWidth
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "20px",
          }}
        >
          <label style={{ fontSize: "18px", fontWeight: "bold" }}>Email:</label>
          <InputField
            name={email_form.name}
            label={email_form.label}
            fullWidth
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "20px",
          }}
        >
          <label style={{ fontSize: "18px", fontWeight: "bold" }}>
            Fecha de nacimiento:
          </label>
          <DatePickerField
            name={date_form.name}
            label={date_form.label}
            onChange={gettingDateYear}
            fullWidth
          />
        </Grid>
      </>
    )
  );
}
