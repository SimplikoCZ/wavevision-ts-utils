import { ParentElement } from './types';
declare const getElementBySelector: <T extends HTMLElement = HTMLElement>(selector: string, parent?: ParentElement) => T | null;
export default getElementBySelector;
