import React from "react";
import defaultTexts from "../../consts";

interface ISearchBarProps {
    value: string;
    onChange: (e: any) => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({value, onChange}) => {
    return (
        <input
            type="text"
            placeholder={defaultTexts.searchBarPlaceholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default SearchBar;