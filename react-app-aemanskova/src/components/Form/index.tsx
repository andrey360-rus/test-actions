import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

interface IMyForm {
        name: string;
        age: number;
        emotion: string;
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

const TaskContainer = styled.div`
        color: var(--blue);
        margin-top: 20px;
`;

const TaskItem = styled.p`
        margin: 5px 0;
`;

const Form = () => {
        const [tasks, setTasks] = useState<IMyForm[]>([]);

        const {
                register,
                handleSubmit,
                formState: { errors, isValid },
                reset,
        } = useForm<IMyForm>({
                mode: "onBlur",
        });

        //   const saveElement: SubmitHandler<IMyForm> = (data) => {
        //     setTasks((prev) => [...prev, data]);
        //     reset();
        //   };

        const saveElement: SubmitHandler<IMyForm> = (data) => {
                setTasks([data]); // чтобы старые очищались
                reset();
        };

        return (
                <>
                        <FormContainer>
                                <form onSubmit={handleSubmit(saveElement)}>
                                        <StyledInput
                                                {...register("name", {
                                                        required: "Field is required",
                                                        minLength: {
                                                                value: 2,
                                                                message: "More characters are needed",
                                                        },
                                                })}
                                                type="text"
                                                placeholder="Name"
                                                data-testid={"name-input"}
                                        />
                                        <ErrorText data-testid={"error-name-text"}>{errors.name?.message}</ErrorText>

                                        <StyledInput
                                                {...register("age", {
                                                        required: "Field is required",
                                                        minLength: {
                                                                value: 1,
                                                                message: "More characters are needed",
                                                        },
                                                })}
                                                type="text"
                                                placeholder="Age"
                                                data-testid={"age-input"}
                                        />
                                        <ErrorText data-testid={"error-age-text"}>{errors.age?.message}</ErrorText>

                                        <StyledInput
                                                {...register("emotion", {
                                                        required: "Field is required",
                                                        minLength: {
                                                                value: 3,
                                                                message: "More characters are needed",
                                                        },
                                                })}
                                                type="text"
                                                placeholder="Emotion"
                                                data-testid={"emotion-input"}
                                        />
                                        <ErrorText data-testid={"error-emotion-text"}>
                                                {errors.emotion?.message}
                                        </ErrorText>

                                        <SubmitButton data-testid={"submit-button"} disabled={!isValid} type="submit">
                                                Save
                                        </SubmitButton>
                                </form>

                                <TaskContainer data-testid="task-container">
                                        {tasks.map((task, index) => (
                                                <TaskItem data-testid="task-item" key={index}>
                                                        {task.name} - {task.age} - {task.emotion}
                                                </TaskItem>
                                        ))}
                                </TaskContainer>
                        </FormContainer>
                </>
        );
};

export default Form;
