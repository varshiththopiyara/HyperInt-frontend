import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./Ui/Button";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#FFF8F0]/80 backdrop-blur border-b border-[#EAD7C5]">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-[#6B3E26]">
            Maska
          </h1>
          <div className="hidden md:flex gap-6 items-center text-[#3E2723]">
            <a href="#" className="hover:text-[#C68642] transition">
              Home
            </a>
            <a href="#reviews" className="hover:text-[#C68642] transition">
              Reviews
            </a>
            <a href="#" className="hover:text-[#C68642] transition">
              Top Picks
            </a>

            <Button className="bg-[#C68642] text-white">
              Add Review
            </Button>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(true)}
            >
              <Menu className="text-[#3E2723]" />
            </Button>
          </div>
        </div>
      </nav>
      {open && (
          <div className="fixed top-0 right-0 h-full w-64 bg-[#FFF8F0] z-50 p-6 shadow-lg transform transition-transform duration-300">
            <button
              className="mb-6 text-[#6B3E26]"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
            <div className="flex flex-col gap-6 text-[#3E2723] text-lg">
              <a
                href="#"
                className="hover:text-[#C68642]"
                onClick={() => setOpen(false)}
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-[#C68642]"
                onClick={() => setOpen(false)}
              >
                Reviews
              </a>
              <a
                href="#"
                className="hover:text-[#C68642]"
                onClick={() => setOpen(false)}
              >
                Top Picks
              </a>

              <Button className="bg-[#C68642] text-white mt-4">
                Add Review
              </Button>
            </div>
          </div>
      )}
    </>
  );
}