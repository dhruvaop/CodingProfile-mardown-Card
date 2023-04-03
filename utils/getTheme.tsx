import { ThemeType, themes, unknownTheme } from "../static/theme";

export const getTheme = (theme: string): ThemeType => {
  if (Object.prototype.hasOwnProperty.call(themes, theme)) {
    return themes[theme as keyof typeof themes];
  }
  return unknownTheme;
};
