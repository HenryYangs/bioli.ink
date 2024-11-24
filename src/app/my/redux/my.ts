import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SocialLink } from '@/app/types/my';

export enum SocialLinksPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

interface MyStore {
  avatar: string;
  username: string;
  bio: string;
  socialLinks: SocialLink[];
  socialLinksPosition: SocialLinksPosition;
}

const initialState: MyStore = {
  avatar: '',
  username: '',
  bio: '',
  socialLinks: [],
  socialLinksPosition: SocialLinksPosition.TOP,
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
    },
    updateSocialLinksPosition: (state, action: PayloadAction<SocialLinksPosition>) => {
      state.socialLinksPosition = action.payload;
    }
  },
});

export default mySlice.reducer;
export const {
  updateAvatar,
  updateUsername,
  updateBio,
  updateSocialLinks,
  updateSocialLinksPosition,
} = mySlice.actions;
