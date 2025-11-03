import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 py-6">
      <div className="container container-max mx-auto px-4 text-center text-sm text-slate-600">
        © {year} Gokul Yogi. All rights reserved.
      </div>
    </footer>
  );
}


