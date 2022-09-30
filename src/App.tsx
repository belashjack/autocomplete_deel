import { useState, useEffect } from "react";
import { AutocompleteInput } from "./components/AutocompleteInput/AutocompleteInput";
import { AutocompleteInputOption } from "./components/AutocompleteInput/AutocompleteInputOption";
import type { Option } from "./components/AutocompleteInput/AutocompleteInputOption";
import type { User } from '../src/types/user';

import "./App.css";

const filterByName = (inputText: string, users: User[]) => users.reduce<Option<User>[]>((acc, curr) => {
    const startIndex = curr.name.toLocaleLowerCase().indexOf(inputText.toLocaleLowerCase());

    if (startIndex === -1) return acc;

    const endIndex = startIndex + inputText.length;

    return acc.concat({ label: curr.name, highlightData: { startIndex, endIndex }, metadata: curr });
}, []);

function App() {
    const [users, setUsers] = useState<User[]>();

    useEffect(() => {
        const makeInitialDataRequest = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();

                setUsers(data);
            } catch (error) {
                console.error('Something went wrong', error);
            }
        }

        makeInitialDataRequest();
    }, []);

    return (
        <div className="app">
            <p>My autocomplete component</p>
            {users && <AutocompleteInput<User>
                filterFunction={(inputText) => filterByName(inputText, users)}
                optionRenderer={(option) => <AutocompleteInputOption key={option.metadata.id} option={option} />}
            />}
        </div>
    );
}

export default App;
