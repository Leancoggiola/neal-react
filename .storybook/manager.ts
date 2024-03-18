import { addons } from "@storybook/manager-api";
import { mainTheme } from './Theme';
import './manager-styles.css';

addons.setConfig({
    theme: mainTheme
})