// useAuthStore.js
import { create } from "zustand";

const useAuthStore = create((set) => ({
  userData: null,
  isUserLoggedIn: false,

  setUserData: (data) => set({ userData: data, isUserLoggedIn: !!data }),
  clearUserData: () => set({ userData: null, isUserLoggedIn: false }),
}));

export default useAuthStore;
