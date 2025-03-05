import { createContext, use, useReducer } from "react";

const initialState = {
  currentPage: "hero",
  isNavOpen: false,
};

const MenuContext = createContext({
  ...initialState,
  openMenu() {},
  closeMenu() {},
  setCurrentPage() {},
});

function reducer(state, action) {
  switch (action.type) {
    case "SET_MENU":
      return {
        ...state,
        isNavOpen: action.payload,
      };

    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}

export default function MenuProvider({ children }) {
  const [{ currentPage, isNavOpen }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  function openMenu() {
    dispatch({ type: "SET_MENU", payload: true });
  }
  function closeMenu() {
    dispatch({ type: "SET_MENU", payload: false });
  }

  function setCurrentPage(page) {
    dispatch({ type: "SET_CURRENT_PAGE", payload: page });
  }

  return (
    <MenuContext.Provider
      value={{
        currentPage,
        isNavOpen,
        openMenu,
        closeMenu,
        setCurrentPage,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = use(MenuContext);
  if (!context || context === undefined)
    throw new Error("useMenu used outside MenuProvider");
  return context;
}
