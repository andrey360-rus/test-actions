import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../../components/Pdf";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputFlex, PdfFormContainer, StyledInput, StyledInputTypeFile, SubmitButton } from "./style.tsx";
import { IMyForm } from "./types.tsx";

const PdfPage: React.FC = () => {
  const [task, setTasks] = useState<IMyForm>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMyForm>({
    mode: "onBlur",
  });

  const saveElement = (data: IMyForm) => {
    console.log(data);

    setTasks(data);
  };
  console.log(task?.picture);

  return (
    <>
      <PdfFormContainer>
        <form onSubmit={handleSubmit(saveElement)}>
          <InputFlex>
            {/*/!*  <StyledInput*!/*/}
            {/*/!*    type="file"*!/*/}
            {/*    {...register("picture", {*/}
            {/*      required: "Поле обязательно для заполнения",*/}
            {/*    })}*/}
            {/*/>*/}
            <StyledInputTypeFile
              htmlFor="fileInput" // Связываем метку с файловым вводом
              {...register("picture", {
                required: "Поле обязательно для заполнения",
              })}
            >
              <span className="upload-icon">📁</span>Upload photo
              <input
                data-testid={"pdf-input"}
                id="fileInput"
                type="file"
                {...register("picture", {
                  required: "Поле обязательно для заполнения",
                })}
              />
            </StyledInputTypeFile>
            <div data-testid={"error-picture-input"}>{errors.picture?.message}</div>

            <StyledInput
              data-testid={"name-input-pdf"}
              placeholder="Enter your name"
              {...register("name", {
                required: "Поле обязательно для заполнения",
                minLength: {
                  value: 5,
                  message: "Нужно больше символов",
                },
              })}
            />
            <div>{errors.name?.message}</div>
            <StyledInput
              data-testid={"age-input-pdf"}
              placeholder="Enter your age"
              {...register("age", {
                required: "Поле обязательно для заполнения",
              })}
            />
            <StyledInput
              data-testid={"birthday-input-pdf"}
              placeholder="Enter your birthday date in format dd.mm.yy"
              {...register("birthday", {
                required: "Поле обязательно для заполнения",
              })}
            />

            <div>{errors.age?.message}</div>

            <div>
              <label>
                <input
                  type="radio"
                  value="man"
                  {...register("gender", {
                    required: "Please select your gender",
                  })}
                />
                Man
              </label>
              <label>
                <input
                  data-testid={"female-input-pdf"}
                  type="radio"
                  value="women"
                  {...register("gender", {
                    required: "Please select your gender",
                  })}
                />
                Women
              </label>
            </div>
            <div>{errors.gender?.message}</div>
          </InputFlex>

          <SubmitButton data-testid={"submit-button-pdf"} type="submit">
            Save
          </SubmitButton>
        </form>
      </PdfFormContainer>

      {!!task?.name && (
        <PDFDownloadLink
          data-testid={"pdf-link"}
          document={
            <MyDocument
              age={task?.age}
              name={task?.name}
              birthday={task?.birthday}
              gender={task?.gender}
              picture={URL.createObjectURL(task?.picture[0])}
            />
          }
          fileName="somename.pdf"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download now!")}
        </PDFDownloadLink>
      )}
    </>
  );
};

export default PdfPage;
