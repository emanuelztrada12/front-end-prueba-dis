import React from "react";
import { at } from "lodash";
import { useField } from "formik";
import { TextField, Alert, Stack } from "@mui/material";

export default function DatePickerField(props) {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return (
        <div>
          <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="warning">
                <p>{error}</p>
              </Alert>
            </Stack>
          </div>
        </div>
      );
    }
  }

  return (
    <TextField
      type="date"
      InputProps={{
        style: {
          borderRadius: "30px",
        },
      }}
      error={meta.touched && meta.error && true}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
      onChange={(val) => {
        try {
          if (field.onChange) field.onChange(val);
        } catch (error) {}
        if (props.onChange) props.onChange(val, { field, meta });
      }}
    />
  );
}
