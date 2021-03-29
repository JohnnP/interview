import React from 'react';

import './SearchBar.scss';

type Iprops = {
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function SearchBar({value, onChange}: Iprops): JSX.Element {
  return (
    <input value={value} onChange={onChange} className="input-search"/>
  );
}

export default SearchBar;