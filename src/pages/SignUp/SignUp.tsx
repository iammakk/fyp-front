import "./SignUp.css";
import Logo from "assets/logo.png";
import { Container } from "@mui/material";
import AuthService from "services/auth.service";
import CircleLoader from "components/atoms/CircleLoader";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { Navigate, useNavigate } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import { log } from "../../utils/logger.util";
import { useEffect } from "react";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const loading = useAppSelector((state) => state.auth.loading);

  const handleSubmit = (values: any) => {

    let data = { ...values };

    delete data.confirm_password;

    AuthService.createUser(data, dispatch);
  };

  if (user) return <Navigate to='/dashboard' />;

  return (
    <div className='login-container'>
      <Container maxWidth='sm'>
        <div className='wrap-login'>
          {loading && <CircleLoader />}
          <span className='login-form-logo'>
            <img alt='' src={Logo} />
          </span>
          <div style={{ padding: "35px" }}>
            <SignUpForm onSubmit={handleSubmit} />
          </div>
        </div>
      </Container>
    </div>
  );
}
