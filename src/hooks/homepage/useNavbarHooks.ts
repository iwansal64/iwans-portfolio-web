import { create } from "zustand";

export type Section = "home" | "projects" | "about" | "contact";

export type UseNavbarHooksType = {
      isOpen: boolean;
      setIsOpen: (newState: boolean) => void;

      currentSection: Section;
      setCurrentSection: (newState: Section) => void;
};

export const UseNavbarHooks = create<UseNavbarHooksType>((set) => ({
      isOpen: false,
      setIsOpen(newState) {
            set({
                  isOpen: newState
            });
      },

      currentSection: "home",
      setCurrentSection(newState) {
            set({
                  currentSection: newState
            })
      },
}))