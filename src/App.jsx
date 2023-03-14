import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import SearchParams from "./SearchParam";
import Detail from "./Detail";

const App = () => {
    return (
        <BrowserRouter>
            <div className="">
                <header>
                    <Link to="/">Adopt Me!</Link>
                </header>

                <Routes>
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/" element={<SearchParams />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
