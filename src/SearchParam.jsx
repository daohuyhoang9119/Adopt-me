import { useState } from "react";
let counter = 0;

const SearchParams = () => {
    counter++;
    const [location, setLocation] = useState("Seattle, WA");
    // const location = "Seattle, WA";
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    {counter} <br />
                    Location
                    <input
                        onChange={(e) => setLocation(e.target.value)}
                        id="location"
                        value={location}
                        placeholder="Location"
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
