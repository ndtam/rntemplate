import {createSlice} from '@reduxjs/toolkit';

export type User = {
  name: string;
  useName: string;
  token: string;
};

export type InitialState = {
  status: 'idle' | 'loading' | 'complete';
  entities: User[];
};

const initialState: InitialState = {
  status: 'idle',
  entities: [
    {
      name: 'John Doe',
      useName: 'johndoe',
      token: '1234567890',
    },
    {
      name: 'Jane Doe',
      useName: 'janedoe',
      token: '0987654321',
    },
  ],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded(state, action) {
      const user = action.payload;
      console.log('userAdded', user);
      state.entities.push(user);
    },
    updateUser(state, action) {
      const {nameS, usernameS, tokenS} = action.payload;

      const user = state.entities.find(e => e.name === nameS);
      if (user) {
        user.name = nameS;
        user.useName = usernameS;
        user.token = tokenS;
      }
    },
    // updateToken(state, action) {
    //   state.token = action.payload.token;
    // },
    clearUser() {
      return initialState;
    },
  },
});
// updateToken,
export const {userAdded, updateUser, clearUser} = userSlice.actions;

export default userSlice.reducer;
