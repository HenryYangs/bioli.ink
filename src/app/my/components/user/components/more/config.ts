import { HelpItem } from '../../types';

export const HELP_LIST: HelpItem[] = [
  {
    title: '账户',
    entries: [
      {
        key: 'myAccount',
        name: '我的账户',
        icon: 'account',
        redirect: '/my/account',
      },
      {
        key: 'bill',
        name: '账单',
        icon: 'bill',
        redirect: '/my/bill',
        disabled: true,
      },
      {
        key: 'cookies',
        name: 'Cookies偏好设置',
        icon: 'cookies',
        redirect: '/my/cookies',
        disabled: true,
      }
    ]
  },
  {
    title: '帮助与支持',
    entries: [
      {
        key: 'online-ask',
        name: '在线咨询',
        icon: 'ask',
        action: () => {},
        disabled: true,
      },
      {
        key: 'help-docs',
        name: '帮助文档',
        icon: 'docs',
        redirect: '',
        disabled: true,
      },
      {
        key: 'feedback',
        name: '提交反馈',
        icon: 'feedback',
        redirect: '',
        disabled: true,
      },
    ]
  },
  {
    title: '',
    entries: [
      {
        key: 'logout',
        name: '退出登录',
        icon: 'logout',
        action: () => {},
      }
    ]
  }
];