import React from 'react';

type Iprops = {
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function SearchBar({value, onChange}: Iprops): JSX.Element {
  return (
    <input value={value} onChange={onChange}/>
  );
}

export default SearchBar;