import React, { useState } from 'react';

function SearchForm(props) {
  const { onSearch } = props;

  return (
    <section>
      <label htmlFor="nameInput" />
      <input onChange={onSearch} id="nameInput" type="text" />
    </section>
  );
}

export default SearchForm;
