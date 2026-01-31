
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 pointer-events-none">
      <div className="flex justify-end">
        <div className="font-serif text-2xl tracking-widest-extra pointer-events-auto text-purple">
          R&mdash;S
        </div>
      </div>
    </header>
  );
};

export default Header;
