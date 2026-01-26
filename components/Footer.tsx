import React from 'react';
import Wave from './Wave';

export default function Footer() {
  return (
    <div className="relative">
      {/* <Wave color="blue" /> */}
      <footer className="min-h-[100px] bg-[#d2e4ec]">
        <div className="mx-auto max-w-7xl">
          <p className="text-4xl">footer</p>
        </div>
      </footer>
    </div>
  );
}
