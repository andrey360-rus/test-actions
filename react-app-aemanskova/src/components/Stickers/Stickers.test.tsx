import { describe, expect } from "vitest";
import { render, screen, userEvent } from "../../../tests/setup.tsx";
import Stickers from "./index.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { waitFor } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";

describe("Stickers", () => {
        const queryClient = new QueryClient();

        test("check disabling pagination button", async () => {
                render(
                        <QueryClientProvider client={queryClient}>
                                <Stickers />
                        </QueryClientProvider>,
                );

                const backButton = await screen.findByTestId("back-btn");
                expect(backButton).toBeInTheDocument();
                expect(backButton).toBeDisabled();
                const forwardButton = await screen.findByTestId("forward-btn");
                expect(forwardButton).toBeInTheDocument();
                userEvent.click(forwardButton);
                await waitFor(() => {
                        expect(backButton).not.toBeDisabled();
                });
        });
});
