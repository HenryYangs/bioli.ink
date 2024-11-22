import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SocialLink } from '@/app/types/my';

interface MyStore {
  avatar: string;
  username: string;
  bio: string;
  socialLinks: SocialLink[];
}

const initialState: MyStore = {
  avatar: '',
  username: '',
  bio: '',
  socialLinks: [],
}

export const mySlice = createSlice({
  name: 'my',
  initialState,
  reducers: {
    updateAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
    updateUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    updateBio: (state, action: PayloadAction<string>) => {
      state.bio = action.payload;
    },
    updateSocialLinks: (state, action: PayloadAction<SocialLink[]>) => {
      state.socialLinks = action.payload;
    }
  },
});

export default mySlice.reducer;
export const {
  updateAvatar,
  updateUsername,
  updateBio,
  updateSocialLinks,
} = mySlice.actions;
