import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SocialLink } from '@/app/types/my';
import { ModuleStatus, UserModule, UserModuleUrl } from '@/app/types/my/module';

export enum SocialLinksPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

interface UserModules {
  id: string;
  modules: UserModule[];
}

interface MyStore {
  avatar: string;
  username: string;
  bio: string;
  socialLinks: SocialLink[];
  socialLinksPosition?: SocialLinksPosition; // TODO
  userModules: UserModules;
}

const initialState: MyStore = {
  avatar: '',
  username: '',
  bio: '',
  socialLinks: [],
  socialLinksPosition: SocialLinksPosition.TOP,
  userModules: {
    id: '',
    modules: [],
  }
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
    updateUserModule: (state, action: PayloadAction<{
      id?: string;
      item?: Partial<UserModule>;
      index?: number;
      action?: 'add' | 'update' | 'delete';
      list?: UserModule[]
    }>) => {
      // 改 id
      if (action.payload.id) {
        state.userModules.id = action.payload.id;
      }

      // 全量更新 list
      if (action.payload.list) {
        state.userModules.modules = action.payload.list;
      }

      // 对某一项的增删改
      if (action.payload.action) {
        switch (action.payload.action) {
          case 'add':
            state.userModules.modules.unshift(action.payload.item as UserModuleUrl);
            break;
          case 'update':
            if (action.payload.index !== undefined) {
              const newUserModule = {
                ...state.userModules.modules[action.payload.index],
                ...action.payload.item,
              };
  
              state.userModules.modules.splice(action.payload.index, 1, newUserModule);
            }
            break;
          case 'delete':
            if (action.payload.index !== undefined) {
              const newUserModule = {
                ...state.userModules.modules[action.payload.index],
                status: ModuleStatus.DELETED,
              }

              state.userModules.modules.splice(action.payload.index, 1, newUserModule);
            }
            break;
          default:
            break;
        }
      }
    },
    // TODO
    // resetUserModules: (state, action: PayloadAction<UserModule[]>) => {
    //   state.userModules.modules = action.payload;
    // },
  },
});

export default mySlice.reducer;
export const {
  updateAvatar,
  updateUsername,
  updateBio,
  updateSocialLinks,
  updateSocialLinksPosition,
  updateUserModule,
  // resetUserModules,
} = mySlice.actions;
