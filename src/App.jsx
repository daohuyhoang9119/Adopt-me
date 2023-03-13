import { createRoot } from "react-dom/client";

import SearchParams from "./SearchParam";

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            {/* <Pet name="Luna" animal="dog" breed="Havanese" /> */}
            <SearchParams />;
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
