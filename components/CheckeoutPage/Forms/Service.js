import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { CheckboxField, InputField } from "../../FormFields";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Divider, Grid } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

export default function service(props) {
  if (!props.values[props.formField.mount.name])
    props.values[props.formField.mount.name] = 0;

  if (!props.values[props.formField.servicesProduct.name])
    props.values[props.formField.servicesProduct.name] = "";

  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  const {
    values,
    formField: {
      service1,
      service2,
      service3,
      service4,
      service5,
      producto1,
      producto2,
      producto3,
      producto4,
      producto5,
      producto6,
      producto7,
      producto8,
      producto9,
      mount,
      servicesProduct,
    },
  } = props;

  const [valorCheckbox1, setValorCheckbox1] = useState(false);
  const [valorCheckbox2, setValorCheckbox2] = useState(false);
  const [valorCheckbox3, setValorCheckbox3] = useState(false);
  const [valorCheckbox4, setValorCheckbox4] = useState(false);
  const [valorCheckbox5, setValorCheckbox5] = useState(false);
  const [valorCheckbox01, setValorCheckbox01] = useState(false);
  const [valorCheckbox02, setValorCheckbox02] = useState(false);
  const [valorCheckbox03, setValorCheckbox03] = useState(false);
  const [valorCheckbox04, setValorCheckbox04] = useState(false);
  const [valorCheckbox05, setValorCheckbox05] = useState(false);
  const [valorCheckbox06, setValorCheckbox06] = useState(false);
  const [valorCheckbox07, setValorCheckbox07] = useState(false);
  const [valorCheckbox08, setValorCheckbox08] = useState(false);
  const [valorCheckbox09, setValorCheckbox09] = useState(false);

  const [sumaTotal, setSumaTotal] = useState(0);
  const [valueProduct0, setValueProduct0] = useState(""); 
  const [valueProduct1, setValueProduct1] = useState(""); 
  const [valueProduct2, setValueProduct2] = useState(""); 
  const [valueProduct3, setValueProduct3] = useState(""); 
  const [valueProduct4, setValueProduct4] = useState(""); 
  const [valueProduct5, setValueProduct5] = useState(""); 
  const [valueProduct6, setValueProduct6] = useState(""); 
  const [valueProduct7, setValueProduct7] = useState(""); 
  const [valueProduct8, setValueProduct8] = useState(""); 
  const [valueProduct9, setValueProduct9] = useState(""); 
  const [valueProduct10, setValueProduct10] = useState(""); 
  const [valueProduct11, setValueProduct11] = useState(""); 
  const [valueProduct12, setValueProduct12] = useState(""); 
  const [valueProduct13, setValueProduct13] = useState(""); 



  const serviceValue = (e) => {
    const { name, checked } = e.target;
    console.log(name);
    if (name === "service1") {
      setValorCheckbox1(checked);
      setValueProduct0(name); 
    } else if (name === "service2") {
      setValorCheckbox2(checked);
      setValueProduct1(name); 
    } else if (name === "service3") {
      setValorCheckbox3(checked);
      setValueProduct2(name);
    } else if (name === "service4") {
      setValorCheckbox4(checked);
      setValueProduct3(name); 
    } else if (name === "service5") {
      setValorCheckbox5(checked);
      setValueProduct4(name); 
    } else if (name === "producto1") {
      setValorCheckbox01(checked);
      setValueProduct5(name); 
    } else if (name === "producto2") {
      setValorCheckbox02(checked);
      setValueProduct6(name); 
    } else if (name === "producto3") {
      setValorCheckbox03(checked);
      setValueProduct7(name); 
    } else if (name === "producto4") {
      setValorCheckbox04(checked);
      setValueProduct8(name); 
    } else if (name === "producto5") {
      setValorCheckbox05(checked);
      setValueProduct9(name); 
    } else if (name === "producto6") {
      setValorCheckbox06(checked);
      setValueProduct10(name); 
    } else if (name === "producto7") {
      setValorCheckbox07(checked);
      setValueProduct11(name); 
    } else if (name === "producto8") {
      setValorCheckbox08(checked);
      setValueProduct12(name); 
    } else if (name === "producto9") {
      setValorCheckbox09(checked);
      setValueProduct13(name); 
    }
  };

  useEffect(() => {
    const suma =
      (valorCheckbox1 ? 1200 : 0) +
      (valorCheckbox2 ? 223 : 0) +
      (valorCheckbox3 ? 250 : 0) +
      (valorCheckbox4 ? 87 : 0) +
      (valorCheckbox5 ? 68 : 0) +
      (valorCheckbox01 ? 300 : 0) +
      (valorCheckbox02 ? 400 : 0) +
      (valorCheckbox03 ? 750 : 0) +
      (valorCheckbox04 ? 330 : 0) +
      (valorCheckbox05 ? 500 : 0) +
      (valorCheckbox06 ? 560 : 0) +
      (valorCheckbox07 ? 90 : 0) +
      (valorCheckbox08 ? 300 : 0) +
      (valorCheckbox09 ? 500 : 0);

    // Contar la cantidad de selecciones de valorCheckbox1 a valorCheckbox5
    let seleccionadosCheckbox1a5 = 0;
    if (valorCheckbox1) seleccionadosCheckbox1a5++;
    if (valorCheckbox2) seleccionadosCheckbox1a5++;
    if (valorCheckbox3) seleccionadosCheckbox1a5++;
    if (valorCheckbox4) seleccionadosCheckbox1a5++;
    if (valorCheckbox5) seleccionadosCheckbox1a5++;

    let seleccionadosProductos = 0;
    if (valorCheckbox01) seleccionadosProductos++;
    if (valorCheckbox02) seleccionadosProductos++;
    if (valorCheckbox03) seleccionadosProductos++;
    if (valorCheckbox04) seleccionadosProductos++;
    if (valorCheckbox05) seleccionadosProductos++;
    if (valorCheckbox06) seleccionadosProductos++;
    if (valorCheckbox07) seleccionadosProductos++;
    if (valorCheckbox08) seleccionadosProductos++;
    if (valorCheckbox09) seleccionadosProductos++;

    const descuento2 = 0.03; // 3% de descuento
    const descuento5 = 0.05; // 5% de descuento
    const umbralDescuento5 = 1500; // Valor mínimo para aplicar el descuento del 5%

    if (seleccionadosCheckbox1a5 >= 2 || seleccionadosProductos >= 3) {
      if (suma > umbralDescuento5) {
        const sumaConDescuento5 = suma * (1 - descuento5);
        props.values[props.formField.mount.name] =
          parseFloat(sumaConDescuento5);
        setSumaTotal(sumaConDescuento5);
      } else if (seleccionadosProductos >= 5) {
        const sumaConDescuento5 = suma * (1 - descuento5);
        props.values[props.formField.mount.name] =
          parseFloat(sumaConDescuento5);
        setSumaTotal(sumaConDescuento5);
      } else {
        const sumaConDescuento2 = suma * (1 - descuento2);
        props.values[props.formField.mount.name] =
          parseFloat(sumaConDescuento2);
        setSumaTotal(sumaConDescuento2);
      }
    } else {
      props.values[props.formField.mount.name] = parseFloat(suma);
      setSumaTotal(suma);
    }

    props.values[props.formField.servicesProduct.name] = ` ${valueProduct0} ${valueProduct1} ${valueProduct2} ${valueProduct3} ${valueProduct4} ${valueProduct5} ${valueProduct6} ${valueProduct7} ${valueProduct8} ${valueProduct9} ${valueProduct10} ${valueProduct11} ${valueProduct12} ${valueProduct13}
    `;
  }, [
    valorCheckbox1,
    valorCheckbox2,
    valorCheckbox3,
    valorCheckbox4,
    valorCheckbox5,
    valorCheckbox01,
    valorCheckbox02,
    valorCheckbox03,
    valorCheckbox04,
    valorCheckbox05,
    valorCheckbox06,
    valorCheckbox07,
    valorCheckbox08,
    valorCheckbox09,
  ]);

  return (
    !isSSR && (
      <Box sx={{ flexGrow: 1 }} style={{ paddingTop: "25px" }}>
        <AppBar
          position="static"
          style={{ background: "#3C3C3C", color: "white" }}
        >
          <Toolbar>
            <Search style={{ background: "white", color: "black" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar Servicios y Productos"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>

        <Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <CheckboxField
              name={service1.name}
              label={service1.label}
              onChange={serviceValue}
              sx={{ m: 1, width: "30ch" }}
            />
            <span style={{ paddingTop: "10px" }}>Q.1200.00</span>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <CheckboxField
              name={service2.name}
              label={service2.label}
              onChange={serviceValue}
              sx={{ m: 1, width: "30ch" }}
            />
            <span style={{ paddingTop: "10px" }}>Q.223.00</span>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <CheckboxField
              name={service3.name}
              label={service3.label}
              onChange={serviceValue}
              sx={{ m: 1, width: "30ch" }}
            />
            <span style={{ paddingTop: "10px" }}>Q.250.00</span>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <CheckboxField
              name={service4.name}
              label={service4.label}
              onChange={serviceValue}
              sx={{ m: 1, width: "30ch" }}
            />
            <span style={{ paddingTop: "10px" }}>Q.87.00</span>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <CheckboxField
              name={service5.name}
              label={service5.label}
              onChange={serviceValue}
              sx={{ m: 1, width: "30ch" }}
            />
            <span style={{ paddingTop: "10px" }}>Q.68.00</span>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <CheckboxField
              name={producto1.name}
              label={producto1.label}
              onChange={serviceValue}
              sx={{ m: 1, width: "30ch" }}
            />
            <span style={{ paddingTop: "10px" }}>Q.300.00</span>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <CheckboxField
              name={producto2.name}
              label={producto2.label}
              onChange={serviceValue}
              sx={{ m: 1, width: "30ch" }}
            />
            <span style={{ paddingTop: "10px" }}>Q.400.00</span>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <CheckboxField
              name={producto3.name}
              label={producto3.label}
              onChange={serviceValue}
              sx={{ m: 1, width: "30ch" }}
            />
            <span style={{ paddingTop: "10px" }}>Q.750.00</span>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <CheckboxField
              name={producto4.name}
              label={producto4.label}
              onChange={serviceValue}
              sx={{ m: 1, width: "30ch" }}
            />
            <span style={{ paddingTop: "10px" }}>Q.330.00</span>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <CheckboxField
              name={producto5.name}
              label={producto5.label}
              onChange={serviceValue}
              sx={{ m: 1, width: "30ch" }}
            />
            <span style={{ paddingTop: "10px" }}>Q.500.00</span>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <CheckboxField
              name={producto6.name}
              label={producto6.label}
              onChange={serviceValue}
              sx={{ m: 1, width: "30ch" }}
            />
            <span style={{ paddingTop: "10px" }}>Q.560.00</span>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <CheckboxField
              name={producto7.name}
              label={producto7.label}
              onChange={serviceValue}
              sx={{ m: 1, width: "30ch" }}
            />
            <span style={{ paddingTop: "10px" }}>Q.90.00</span>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <CheckboxField
              name={producto8.name}
              label={producto8.label}
              onChange={serviceValue}
              sx={{ m: 1, width: "30ch" }}
            />
            <span style={{ paddingTop: "10px" }}>Q.300.00</span>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <CheckboxField
              name={producto9.name}
              label={producto9.label}
              onChange={serviceValue}
              sx={{ m: 1, width: "30ch" }}
            />
            <span style={{ paddingTop: "10px" }}>Q.500.00</span>
          </div>
          <Divider />
        </Grid>

        <div
          style={{ padding: "20px", display: "flex", justifyContent: "center" }}
        >
          <InputField
            name={mount.name}
            label={mount.label}
            value={parseFloat(sumaTotal)}
          />
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 1,
            bgcolor: "#3C3C3C",
            color: "white",
            "& svg": {
              m: 1.5,
            },
            "& hr": {
              mx: 0.5,
            },
          }}
        >
          <p style={{ fontWeight: "bold", textAlign: "center" }}>
            Descuento obetnido en Servicios{" "}
            <span
              style={{
                color: "green",
                fontSize: "1.5rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              3%
            </span>
          </p>
          <Divider orientation="vertical" flexItem color="white" />
          <p style={{ fontWeight: "bold" }}>
            Descuento obtenido en Productos{" "}
            <span
              style={{
                color: "green",
                fontSize: "1.5rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              5%
            </span>
          </p>
        </Box>
      </Box>
    )
  );
}
