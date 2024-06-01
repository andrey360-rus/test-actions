import { describe, expect } from "vitest";
import { render, screen, userEvent, waitFor } from "../../../tests/setup.tsx";
import Form from "./index.tsx";
import { fireEvent } from "@testing-library/react";

describe("Form", () => {
  test("name input", async () => {
    render(<Form />);
    const nameInput = await screen.findByTestId("name-input");
    const nameErrortext = await screen.findByTestId("error-name-text");
    expect(nameInput).toBeInTheDocument();
    expect(nameErrortext).toBeInTheDocument();
    fireEvent.focusOut(nameInput);
    await waitFor(() => {
      expect(nameErrortext).toHaveTextContent("Field is required");
    });
    // userEvent.type(nameInput, "A");
    fireEvent.change(nameInput, { target: { value: "A" } });
    await waitFor(() => {
      expect(nameInput).toHaveValue("A");
    });
    fireEvent.focusOut(nameInput);
    await waitFor(() => {
      expect(nameErrortext).toHaveTextContent("More characters are needed");
    });
    fireEvent.change(nameInput, { target: { value: "Anna" } });
    // userEvent.type(nameInput, "nna");
    await waitFor(() => {
      expect(nameInput).toHaveValue("Anna");
    });
    fireEvent.focusOut(nameInput);
    await waitFor(() => {
      expect(nameErrortext).toHaveTextContent("");
    });
  });
  test("age input", async () => {
    render(<Form />);
    const ageInput = await screen.findByTestId("age-input");
    const ageErrortext = await screen.findByTestId("error-age-text");
    expect(ageInput).toBeInTheDocument();
    expect(ageErrortext).toBeInTheDocument();
    fireEvent.focusOut(ageInput);
    await waitFor(() => {
      expect(ageErrortext).toHaveTextContent("Field is required");
    });
    // userEvent.type(ageInput, "19");
    fireEvent.change(ageInput, { target: { value: "19" } });
    await waitFor(() => {
      expect(ageInput).toHaveValue("19");
    });
    fireEvent.focusOut(ageInput);
    await waitFor(() => {
      expect(ageErrortext).toHaveTextContent("");
    });
  });
  test("emotion input", async () => {
    render(<Form />);
    const emotionInput = await screen.findByTestId("emotion-input");
    const emotionErrortext = await screen.findByTestId("error-emotion-text");
    expect(emotionInput).toBeInTheDocument();
    expect(emotionErrortext).toBeInTheDocument();
    fireEvent.focusOut(emotionInput);
    await waitFor(() => {
      expect(emotionErrortext).toHaveTextContent("Field is required");
    });
    // userEvent.type(emotionInput, "so");
    fireEvent.change(emotionInput, { target: { value: "so" } });
    await waitFor(() => {
      expect(emotionInput).toHaveValue("so");
    });
    fireEvent.focusOut(emotionInput);
    await waitFor(() => {
      expect(emotionErrortext).toHaveTextContent("More characters are needed");
    });
    // userEvent.type(emotionInput, " so");
    fireEvent.change(emotionInput, { target: { value: "so so" } });
    await waitFor(() => {
      expect(emotionInput).toHaveValue("so so");
    });
    fireEvent.focusOut(emotionInput);
    await waitFor(() => {
      expect(emotionErrortext).toHaveTextContent("");
    });
  });
  test("submit-button", async () => {
    render(<Form />);
    const buttonToSubmit = screen.getByTestId("submit-button");
    expect(buttonToSubmit).toBeInTheDocument();
    expect(buttonToSubmit).toBeDisabled();
    const nameInput = screen.getByTestId("name-input");
    fireEvent.change(nameInput, { target: { value: "Anna" } });
    const ageInput = screen.getByTestId("age-input");
    fireEvent.change(ageInput, { target: { value: "19" } });
    const emotionInput = screen.getByTestId("emotion-input");
    fireEvent.change(emotionInput, { target: { value: "so so" } });
    const disabled = buttonToSubmit.getAttribute("disabled");
    expect(disabled).toBe("");
    userEvent.click(buttonToSubmit);
    expect(buttonToSubmit).toBeDisabled();
    await waitFor(() => {
      expect(nameInput).toHaveValue("");
      expect(ageInput).toHaveValue("");
      expect(emotionInput).toHaveValue("");
    });
    const taskContainer = await screen.findByTestId("task-container");
    expect(taskContainer).toBeInTheDocument();
  });
});
