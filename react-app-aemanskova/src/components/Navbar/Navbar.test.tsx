import Navbar from "./index.tsx";
import { render, screen, userEvent } from "../../../tests/setup.tsx";
// import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { cleanup, waitFor } from "@testing-library/react";

describe("Navbar", () => {
  afterEach(cleanup);
  // test("check authorization button", async () => {
  //   const setIsAuth = vi.fn;
  //   const { rerender } = render(
  //     <BrowserRouter>
  //       <Navbar />
  //     </BrowserRouter>,
  //   );
  //   const buttonToAuthorize = await screen.findAllByTestId("button-auth");
  //   console.log(buttonToAuthorize);
  //   expect(buttonToAuthorize[0]).toBeInTheDocument();
  //   expect(buttonToAuthorize[0]).toHaveTextContent("Login");
  //   rerender(
  //     <BrowserRouter>
  //       <Navbar />
  //     </BrowserRouter>,
  //   );
  //   await waitFor(() => {
  //     expect(buttonToAuthorize[0]).toHaveTextContent("Logout");
  //   });
  // });
  test("check change theme button", async () => {
    // const setIsAuth = vi.fn;
    // const isAuth = true;
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const buttonToChangeTheme = await screen.findAllByTestId("button-change-theme");
    expect(buttonToChangeTheme[0]).toBeInTheDocument();
    const htmlTag = document.querySelector("html");
    expect(htmlTag).toBeInTheDocument();
    userEvent.click(buttonToChangeTheme[0]);
    await waitFor(() => {
      expect(htmlTag).toHaveAttribute("data-theme", "dark");
    });

    userEvent.click(buttonToChangeTheme[0]);
    await waitFor(() => {
      expect(htmlTag).toHaveAttribute("data-theme", "light");
    });
  });
});
