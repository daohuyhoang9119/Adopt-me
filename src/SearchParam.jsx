import { useState, useEffect } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";

const ANIMALS = ["dog", "cat", "bird", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);

    const [breeds] = useBreedList(animal);

    useEffect(() => {
        requestPet();
    }, []);

    async function requestPet() {
        let res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPet();
                }}
            >
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
                        value={animal}
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
                        value={breed}
                        onChange={(e) => {
                            setBreed(e.target.value);
                        }}
                        disabled={breeds.length === 0}
                    >
                        <option />
                        {breeds &&
                            breeds.map((breed) => (
                                <option key={breed}>{breed}</option>
                            ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {pets &&
                pets.map((pet) => (
                    <Pet
                        key={pet.id}
                        name={pet.name}
                        animal={pet.animal}
                        breed={pet.breed}
                    />
                ))}
        </div>
    );
};

export default SearchParams;
