import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { BackendUser, LoggedUser, UserType } from '../../../../types/user/user';
import { checkUserThunk, loginUserThunk, logoutUserThunk } from './thunks';

const initialState: UserType = {
  status: 'fetching',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState as UserType,
  reducers: {
    setUser: (state, action: PayloadAction<LoggedUser>) => action.payload,
    logoutUser: (state) => ({
      status: 'guest',
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      const backendUser = action.payload;
      return { ...backendUser, status: 'logged' };
    });
    builder.addCase(checkUserThunk.pending, (state) => ({ status: 'fetching' }));
    builder.addCase(checkUserThunk.fulfilled, (state, action) => ({
      ...action.payload,
      status: 'logged',
    }));
    builder.addCase(checkUserThunk.rejected, (state) => ({
      status: 'guest',
    }));
    builder.addCase(logoutUserThunk.fulfilled, (state) => ({status: 'guest'}))
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
