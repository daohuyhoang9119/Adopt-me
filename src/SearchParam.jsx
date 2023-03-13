import { useState } from "react";

const ANIMALS = ["dog", "cat", "rabbit", "zebra", "leopard"];

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const BREEDS = ["dsd", "saaaa"];
    // const location = "Seattle, WA";
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input
                        onChange={(e) => setLocation(e.target.value)}
                        id="location"
                        value={location}
                        placeholder="Location"
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        // value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                    >
                        <option />
                        {ANIMALS.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        // value={animal}
                        onChange={(e) => {
                            setBreed(e.target.value);
                        }}
                        disabled={BREEDS.length === 0}
                    >
                        <option />
                        {BREEDS.map((breed) => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
