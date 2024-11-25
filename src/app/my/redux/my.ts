import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SocialLink } from '@/app/types/my';
import { UserModule } from '@/app/types/my/module';

export enum SocialLinksPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

interface MyStore {
  avatar: string;
  username: string;
  bio: string;
  socialLinks: SocialLink[];
  socialLinksPosition?: SocialLinksPosition; // TODO
  userModules: UserModule[];
}

const initialState: MyStore = {
  avatar: '',
  username: '',
  bio: '',
  socialLinks: [],
  socialLinksPosition: SocialLinksPosition.TOP,
  userModules: [],
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
    },
    addUserModule: (state, action: PayloadAction<UserModule>) => {
      state.userModules.unshift(action.payload);
    },
    removeUserModule: (state, action: PayloadAction<number>) => {
      state.userModules.splice(action.payload, 1);
    },
    updateUserModule: (state, action: PayloadAction<{ index: number; item: Partial<UserModule> }>) => {
      const newUserModule = {
        ...state.userModules[action.payload.index],
        ...action.payload.item,
      };

      state.userModules.splice(action.payload.index, 1, newUserModule);
    },
    resetUserModules: (state, action: PayloadAction<UserModule[]>) => {
      state.userModules = action.payload;
    },
  },
});

export default mySlice.reducer;
export const {
  updateAvatar,
  updateUsername,
  updateBio,
  updateSocialLinks,
  updateSocialLinksPosition,
  addUserModule,
  removeUserModule,
  updateUserModule,
  resetUserModules,
} = mySlice.actions;
