/* eslint-disable import/export */
import { cleanup, render } from "@testing-library/react";
import { afterEach, vi } from "vitest";
import "@testing-library/jest-dom";

afterEach(() => {
        cleanup();
});
class IntersectionObserver {
        observe = vi.fn();
        disconnect = vi.fn();
        unobserve = vi.fn();
}

function customRender(ui: React.ReactElement, options = {}) {
        return render(ui, {
                // wrap provider(s) here if needed
                wrapper: ({ children }) => children,
                ...options,
        });
}

beforeAll(() => {
        Object.defineProperty(window, "matchMedia", {
                writable: true,
                value: vi.fn().mockImplementation((query) => ({
                        matches: false,
                        media: query,
                        onchange: null,
                        addListener: vi.fn(), // deprecated
                        removeListener: vi.fn(), // deprecated
                        addEventListener: vi.fn(),
                        removeEventListener: vi.fn(),
                        dispatchEvent: vi.fn(),
                })),
        });
        Object.defineProperty(window, "IntersectionObserver", {
                writable: true,
                configurable: true,
                value: IntersectionObserver,
        });
});

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
