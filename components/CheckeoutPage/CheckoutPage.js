import React, { useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import useStyles from "./styles";

import modelForm from "../CheckeoutPage/models/input.model";
import _renderStepContent from "./helpers/renderStepContent";
import validationSchema from "./FormModel/validationSchema";
import generalFormModel from "./FormModel/generalFormModel";
import formInitialValues from "./FormModel/formInitialValues";
import { steps } from "./helpers/steps";
import CheckoutSuccess from "./CheckoutSuccess";

// Material ui librery
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MobileStepper from "@mui/material/MobileStepper";
import CircularProgress from "@mui/material/CircularProgress";
import useMediaQuery from "@mui/material/useMediaQuery";
import json2mq from "json2mq";

const { formId, formField } = generalFormModel;

export default function CheckoutPage() {
  const router = useRouter();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const matches = useMediaQuery(
    json2mq({
      minWidth: 1400,
    })
  );

  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const inputValues = modelForm();
  
  async function _submitForm(values, actions) {
    try {
      inputValues(values);
    } catch (error) {
      console.log(error);
    }
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }


  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <div style={{ height: '100%'}}>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          fontSize: "35px",
          fontWeight: "bold",
        }}
      >
        Formulario de compra
      </Typography>

      {matches === true && (
        <Stepper
          xs={12}
          sm={6}
          activeStep={activeStep}
          className={classes.stepper}
          alternativeLabel
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      )}

      {matches === false && (
        <MobileStepper
          style={{ display: "flex", justifyContent: "center" }}
          steps={steps.length}
          position="static"
          xs={12}
          sm={6}
          activeStep={activeStep}
          className={classes.stepper}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </MobileStepper>
      )}

      <MobileStepper
        variant="progress"
        steps={2}
        position="static"
        activeStep={activeStep}
        xs={12}
        sm={6}
        className={classes.stepper}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </MobileStepper>
      
      <>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting, values }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep, values)}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    paddingRight: "30px",
                    paddingBottom: "15px",
                    paddingTop: "10px",
                  }}
                >
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} variant='contained' className={classes.button}>
                      Anterior
                    </Button>
                  )}
                  <div>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? "CONFIRMAR ASISTENCIA" : "Siguiente"}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </>
    </div>
  );
}