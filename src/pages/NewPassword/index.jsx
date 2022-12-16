import APIManager from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const NewPassword = () => {
  const [password, setPassword] = useState(null);
  const [pwdConfirmation, setPwdConfirmation] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get('reset_token')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user: {
        password: password,
        password_confirmation: pwdConfirmation,
        reset_password_token: token
      }
    }
  }
}

