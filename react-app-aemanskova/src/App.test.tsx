import { describe } from "vitest";
import { render, screen, userEvent } from "../tests/setup.tsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

describe("App", () => {
        test("Router work", async () => {
                const queryClient = new QueryClient();
                render(
                        <BrowserRouter>
                                <QueryClientProvider client={queryClient}>
                                        <App />
                                </QueryClientProvider>
                        </BrowserRouter>,
                );
                const pagination = await screen.findByText("Pagination");
                const authBtn = await screen.findAllByTestId("button-auth");
                expect(authBtn[0]).toBeInTheDocument();
                userEvent.click(pagination);
                expect(await screen.findByText("You aren't authorized")).toBeInTheDocument();
                userEvent.click(authBtn[0]);
                const header = await screen.findByTestId("list-header-stickers");
                await waitFor(() => {
                        expect(header).toBeInTheDocument();
                });
        });
});
