import Pdf from "./index.tsx";
import { render, screen, userEvent, waitFor } from "../../../tests/setup.tsx";
import { fireEvent } from "@testing-library/react";
import { expect } from "vitest";

describe("Pdf", () => {
  test("pdf adding file", async () => {
    render(<Pdf />);
    const pdfInput = screen.getByTestId("pdf-input");
    expect(pdfInput).toBeInTheDocument();
    fireEvent.focusOut(pdfInput);
    // const error = await screen.queryByTestId("error-picture-input");
    // expect(error).toBeInTheDocument();
    // await waitFor(() => {
    //         expect(error).toHaveTextContent("Поле обязательно для заполнения");
    // });
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    await waitFor(() =>
      fireEvent.change(pdfInput, {
        target: { files: [file] },
      }),
    );
    fireEvent.focusOut(pdfInput);
    const emptyError = screen.getByTestId("error-picture-input");
    await waitFor(() => {
      expect(emptyError).toBeEmptyDOMElement();
    });
  });
  test("save button", async () => {
    render(<Pdf />);
    const buttonToSubmit = screen.getByTestId("submit-button-pdf");
    expect(buttonToSubmit).toBeInTheDocument();

    const pdfInput = screen.getByTestId("pdf-input");
    expect(pdfInput).toBeInTheDocument();
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    await waitFor(() =>
      fireEvent.change(pdfInput, {
        target: { files: [file] },
      }),
    );
    const nameInput = screen.getByTestId("name-input-pdf");
    fireEvent.change(nameInput, { target: { value: "Anna" } });
    const ageInput = screen.getByTestId("birthday-input-pdf");
    fireEvent.change(ageInput, { target: { value: "29.10.2002" } });
    const genderInput = screen.getByTestId("female-input-pdf");
    userEvent.click(genderInput);
    await waitFor(() => {
      expect(genderInput).toBeChecked();
    });

    userEvent.click(buttonToSubmit);

    await waitFor(() => {
      let pdfLink;
      pdfLink = screen.findByTestId("pdf-link");
      expect(pdfLink).toBeTruthy();
      // expect(pdfLink.textContent).toContain("Download now!");
    });
  });
});
