import { ParentElement } from './types';
declare const getElementByClassName: <T extends HTMLElement = HTMLElement>(className: string, parent?: ParentElement) => T | null;
export default getElementByClassName;
