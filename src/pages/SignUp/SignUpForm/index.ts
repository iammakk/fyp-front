// import { email, required } from "utils/validate.util";
import InputRedux from "components/molecules/InputRedux";
import { ReduxFormField } from "components/molecules/ReduxFormFields/index";
import { email, password, required } from "utils/validate.util";

export { default } from "./SignUpForm";

export const fields: ReduxFormField[] = [
  {
    name: "firstName",
    label: "First Name",
    validate: [required],
    component: InputRedux,
    cellProps: { lg: 12 },
    // InputProps: { type: "email" },
  },
  {
    name: "lastName",
    label: "Last Name",
    validate: [required],
    component: InputRedux,
    cellProps: { lg: 12 },
    // InputProps: { type: "email" },
  },
  {
    name: "email",
    label: "Email",
    validate: [required, email],
    component: InputRedux,
    cellProps: { lg: 12 },
    InputProps: { type: "email" },
  },
  {
    name: "password",
    label: "Password",
    validate: [required, password],
    component: InputRedux,
    cellProps: { lg: 12 },
    InputProps: { showIcon: true, type: "password" },
  },
  {
    name: "confirm_password",
    label: "Confirm Password",
    validate: [required, password],
    component: InputRedux,
    cellProps: { lg: 12 },
    InputProps: { showIcon: true, type: "password" },
  },
];
