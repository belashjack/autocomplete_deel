export interface Option<T> {
    label: string;
    highlightData: {
        startIndex: number;
        endIndex: number;
    }
    metadata: T;
};

interface AutocompleteInputOptionProps<T> {
    option: Option<T>;
}

export function AutocompleteInputOption<T>(props: AutocompleteInputOptionProps<T>) {
    const { option } = props;

    return (
        <li className='option'>
            {option.label.slice(0, option.highlightData.startIndex)}
            <mark>{option.label.slice(option.highlightData.startIndex, option.highlightData.endIndex)}</mark>
            {option.label.slice(option.highlightData.endIndex)}
        </li>
    );
}
