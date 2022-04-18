import React from 'react';
import Input from '../components/Input';
import NumericFilter from '../components/NumericFilter';
import SortFilter from '../components/SortFilter';

function Header() {
  return (
    <header>
      <Input />
      <NumericFilter />
      <SortFilter />
    </header>
  );
}

export default Header;
