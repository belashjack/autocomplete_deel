import React, { useState } from 'react';
import debounce from '../../utils/debounce';
import type { Option } from './AutocompleteInputOption';

import "./AutocompleteInput.css";

interface AutocompleteInputProps<T> {
    filterFunction: (inputText: string) => Option<T>[];
    optionRenderer: (option: Option<T>) => React.ReactElement;
};

export function AutocompleteInput<T>(props: AutocompleteInputProps<T>) {
    const { filterFunction, optionRenderer } = props;

    const [options, setOptions] = useState<Option<T>[]>();

    const filterOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputText = e.target.value;

        if (inputText === '') {
            setOptions(undefined);
            return;
        }

        const filteredOptions = filterFunction(inputText);

        setOptions(filteredOptions);
    }

    return (
        <div className='input_autocomplete'>
            <input
                type="text"
                name="name"
                id="name"
                placeholder='Start typing'
                onChange={debounce(filterOptions, 500)}
            />
            <ul className='options'>
                {options?.length === 0
                    ? 'No data'
                    : options?.map(optionRenderer)
                }
            </ul>
        </div>
    );
}
