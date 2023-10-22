import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-red-600 px-4  py-3 uppercase text-red-50 sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza 🍕
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
