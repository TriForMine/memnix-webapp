export interface ILocale {
  name: string
  iso: string
  flag: string
}

export const availableLocales: { [key: string]: ILocale } = {
  en: {
    name: 'English',
    iso: 'en',
    flag: '🇺🇸',
  },
  fr: {
    name: 'Français',
    iso: 'fr',
    flag: '🇫🇷',
  },
  ro: {
    name: 'Română',
    iso: 'ro',
    flag: '🇷🇴',
  },
  it: {
    name: 'Italiano',
    iso: 'it',
    flag: '🇮🇹',
  },
}
