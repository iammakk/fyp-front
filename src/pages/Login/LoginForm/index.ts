import { email, minLength6, required } from "utils/validate.util";
import InputRedux from "components/molecules/InputRedux";
import { ReduxFormField } from "components/molecules/ReduxFormFields/index";

export { default } from "./LoginForm";

export const fields: ReduxFormField[] = [
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
    validate: [required, minLength6],
    component: InputRedux,
    cellProps: { lg: 12 },
    InputProps: { showIcon: true, type: "password" },
  },
];
