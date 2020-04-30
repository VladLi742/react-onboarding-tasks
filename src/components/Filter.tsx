import * as React from "react";
import { ChangeEvent, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { fieldToTextField } from "formik-material-ui";
import MuiTextField from "@material-ui/core/TextField";

import { FilterProps, FilterValues } from "@ts/interfaces";

import { changeFilter } from "@redux/filter";

function Component(props: any) {
  const {
    form: { setFieldValue },
    field: { name },
    onChange,
    instance,
  } = props;
  const dispatch = useDispatch();
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const { value } = e.target;
      dispatch(changeFilter(instance.id, value));
      if (value && onChange) {
        onChange();
      }
      setFieldValue(name, value);
    },
    [dispatch, onChange, setFieldValue, instance, name]
  );

  return <MuiTextField {...fieldToTextField(props)} onChange={handleChange} />;
}

export default function Filter(props: FilterProps) {
  const {
    validationRules,
    defaultValue,
    label,
    placeholder,
    onChangeCallback,
    instance,
  } = props;

  return (
    <Formik
      initialValues={{ filter: "" }}
      validate={(values) => {
        const errors: Partial<FilterValues> = {};
        if (validationRules) {
          validationRules.forEach((rule) => {
            const { regExp, message } = rule;
            if (regExp.test(values.filter)) {
              errors.filter = message;
            }
          });
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      {() => (
        <Form>
          <Field
            component={Component}
            type="text"
            name="filter"
            error={!!instance.errMessage}
            onChange={onChangeCallback}
            label={label}
            defaultValue={defaultValue}
            placeholder={placeholder}
            value={instance.value}
            helperText={instance.errMessage}
            instance={instance}
          />
        </Form>
      )}
    </Formik>
  );
}
