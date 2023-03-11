/* eslint-disable no-unused-vars */
import { React } from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet";

// const Pet = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, props.name),
//         React.createElement("h2", {}, props.animal),
//     ]);
// };

// const App = () => {
//     return React.createElement("div", { className: "heading-tag" }, [
//         React.createElement("h1", {}, "Adopt Me!"),
//         React.createElement(Pet, {
//             name: "T",
//             animal: "Dog",
//         }),
//         React.createElement(Pet, {
//             name: "N",
//             animal: "Cat",
//         }),
//         React.createElement(Pet, {
//             name: "K",
//             animal: "Tiger",
//         }),
//     ]);
// };
const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Luna" animal="dog" breed="Havanese" />
            <Pet name="Pepper" animal="bird" breed="Cockatiel" />
            <Pet name="Doink" animal="cat" breed="Mix" />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
