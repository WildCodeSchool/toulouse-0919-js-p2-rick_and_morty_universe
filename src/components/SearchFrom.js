import react, { useState } from 'react';

function SearchFrom(props) {
  const { onSearch } = props;

  return (
    <section>
      <label htmlFor="nameInput" />
      <input onChange={onSearch} id="nameInput" type="text" />
    </section>
  );
}

export default SearchFrom;
