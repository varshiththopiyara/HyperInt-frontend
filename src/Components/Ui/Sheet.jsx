import React from "react";

export function Sheet({ children }) {
  return <div>{children}</div>;
}

export function SheetTrigger({ children, onClick }) {
  return React.cloneElement(children, { onClick });
}

export function SheetContent({ open, setOpen, children }) {
  if (!open) return null;

  return (
    <>

      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={() => setOpen(false)}
      />
      <div className="fixed top-0 right-0 h-full w-64 bg-[#FFF8F0] z-50 p-6 shadow-lg transition">
        <button
          className="mb-4 text-[#6B3E26]"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        {children}
      </div>
    </>
  );
}