import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColorSchemeName } from 'react-native'; 

const initialState = {
  isSignedIn: false,
  userColorScheme: "light" as ColorSchemeName,
  user: '' as string | null,
  authToken: '',
  expoToken: '',
};

export const appSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<any>) => {
      state = { ...state, authToken: action.payload };
      return state;
    },
    SetUser: (state, action: PayloadAction<any>) => {
      state = { ...state, isSignedIn: true, user: action.payload };
      return state;
    },
    LoggedOut: (state) => {
      state = { ...state, user: null, isSignedIn: false, authToken: "" };
      return state;
    },
    SetColorShceme: (state, action: PayloadAction<any>) => {
      state = { ...state, userColorScheme: action.payload };
      return state;
    },
    SetExpoToken: (state, action: PayloadAction<any>) => {
      state = { ...state, expoToken: action.payload };
      return state;
    },
  },
});

export const {
  setAuthToken,
  SetUser,
  LoggedOut,
  SetColorShceme,
  SetExpoToken,
} = appSlice.actions;

export default appSlice.reducer;
