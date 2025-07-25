import React from 'react';

const menuItems = [
  { year: '2023', title: 'Digital Art Collecting' },
  { year: '2023', title: 'Digital Art Collecting' },
  { year: '2023', title: 'Digital Art Collecting' },
];

export default function OverlayMenu() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center text-white px-20 py-40 z-30">
      <div className="menu-title opacity-0 flex justify-center items-center w-full">
        <p className="uppercase text-sm">[menu]</p>
      </div>

      {menuItems.map((item, idx) => (
        <div
          key={idx}
          className="menu-item opacity-0 flex w-full items-center gap-4 py-4 hover:bg-white/10 transition cursor-pointer"
        >
          <div className="flex-1">
            <p className="uppercase text-sm">{item.year}</p>
          </div>
          <div className="flex-[3] flex justify-center">
            <p className="text-[4vw] text-center">{item.title}</p>
          </div>
          <div className="flex-1 text-right">
            <a href="#" className="uppercase text-sm text-white">[explore]</a>
          </div>
        </div>
      ))}
    </div>
  );
}
