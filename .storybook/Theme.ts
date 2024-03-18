import { create, themes } from "@storybook/theming/create";

export const mainTheme = create({
    base: 'dark',
    brandTitle: 'Neal React Library',
    brandTarget: '_self',
  
    // Colors
    colorPrimary: '#FFFFFF',
    colorSecondary: '#5E36BC',
  
    // Base
    appBg: '#2E2E38',
    appContentBg: '#1A1A24',
    appBorderColor: '#737387',
    appBorderRadius: 4,
  
    // Text colors
    textColor: '#FFFFFF',
    textInverseColor: '#2E2E38',
    textMutedColor: '#C3C3CB',
  
    // Toolbar default and active colors
    barTextColor: '#C3C3CB',
    barHoverColor: '#5E36BC',
    barSelectedColor: '#5E36BC',
    barBg: '#2E2E38'
})

export const previewTheme = create({
    base: 'dark',
    appContentBg: '#1A1A24',
    colorSecondary: '#B094DC',
    appBorderColor: "#B094DC",
})