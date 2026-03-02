import { UseNavbarHooks } from "../../hooks/homepage/useNavbarHooks";

export default function Navbar() {
      const { isOpen, setIsOpen } = UseNavbarHooks();

      function toggleNavbar() {
            setIsOpen(!isOpen);
      }

      return (
            <div className="flex flex-row justify-end">
                  <button className="relative w-12 aspect-square cursor-pointer md:hidden" onClick={toggleNavbar}>
                        <span className={`pointer-events-none absolute left-0 bg-white w-full h-1 duration-250 ${isOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "top-0"}`}></span>
                        <span className={`pointer-events-none absolute left-0 bg-white w-full h-1 duration-250 ${isOpen ? "rotate-45" : "rotate-0"} top-1/2 -translate-y-1/2`}></span>
                        <span className={`pointer-events-none absolute left-0 bg-white w-full h-1 duration-250 ${isOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-full -translate-y-full"}`}></span>
                  </button>
                  <span className={`hidden peer ${isOpen ? "active" : ""}`}></span>
            </div>
      );
}
