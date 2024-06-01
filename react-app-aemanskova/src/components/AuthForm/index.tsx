import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
// import axios from "axios";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthContext.tsx";
import authInstance from "../../auth.ts";

interface IMyAuthForm {
  username: string;
  password: number;
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const StyledInput = styled.input`
  margin: 10px 0;
  padding: 8px;
  border: 1px solid var(--blue);
  border-radius: 5px;
  font-family: "Noto Serif", serif;

  &:focus {
    outline: none;
    border-color: var(--light-blue);
  }
`;

const ErrorText = styled.div`
  color: var(--blue);
  margin-top: -10px;
`;

const SubmitButton = styled.button`
  font-family: "Noto Serif", serif;
  background-color: var(--blue);
  border: none;
  border-radius: 10px;
  color: var(--white);
  padding: 10px 40px;
  height: fit-content;
  margin-top: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:focus-visible,
  &:hover &:active {
    color: var(--grey-light);
  }

  &:focus {
    color: none;
  }

  &:disabled {
    color: var(--light-blue);
    background-color: #2f84afca;
    cursor: not-allowed;
  }
`;

const Form = () => {
  const [tasks, setTasks] = useState<IMyAuthForm[]>([]);
  const [error, setError] = useState("");
  const { setIsAuth } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IMyAuthForm>({
    mode: "onBlur",
  });

  useEffect(() => {
    try {
      postUser();
    } catch (e) {
      console.log(e);
    }
  }, [tasks]);

  const saveElement: SubmitHandler<IMyAuthForm> = (data) => {
    setTasks([data]);
  };

  const navigate = useNavigate();
  const postUser = async () => {
    try {
      setIsLoading(true);
      if (tasks.length) {
        const response = await authInstance.post("auth/token/", {
          username: tasks[0].username,
          password: tasks[0].password,
        });
        console.log(response.headers["authorization"]);
        if (response) {
          localStorage.setItem("access_token", response.headers["authorization"]);
          setError("");
          setIsAuth(true);
          return navigate("/");
        }
      }
    } catch (e: any) {
      console.log(e.response.data.detail);
      setError(e.response.data.detail);
      setIsAuth(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit(saveElement)}>
          <StyledInput
            {...register("username", {
              required: "Field is required",
              minLength: {
                value: 5,
                message: "More characters are needed",
              },
            })}
            type="text"
            placeholder="Username"
          />
          <ErrorText data-testid={"error-name-text"}>{errors.username?.message}</ErrorText>
          <StyledInput
            {...register("password", {
              required: "Field is required",
              minLength: {
                value: 8,
                message: "More characters are needed",
              },
            })}
            type="text"
            placeholder="Password"
          />
          <ErrorText data-testid={"error-age-text"}>{errors.password?.message}</ErrorText>
          <SubmitButton data-testid={"submit-button"} disabled={!isValid} type="submit">
            Save
          </SubmitButton>
        </form>
        {isLoading && <p>Loading...</p>}
        {error}
      </FormContainer>
    </>
  );
};

export default Form;
