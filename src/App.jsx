import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import SearchParams from "./SearchParam";
import Detail from "./Detail";
import RefHook from "./RefHook";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

const App = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <div className="">
                    <header>
                        <Link to="/">Adopt Me!</Link>
                    </header>
                    <Routes>
                        <Route path="/detail/:id" element={<Detail />} />
                        <Route path="/hooks" element={<RefHook />} />
                        <Route path="/" element={<SearchParams />} />
                    </Routes>
                </div>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
