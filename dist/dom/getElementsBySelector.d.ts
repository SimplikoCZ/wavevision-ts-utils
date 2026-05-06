import { ParentElement } from './types';
declare const getElementsBySelector: <T extends HTMLElement = HTMLElement>(selector: string, parent?: ParentElement) => NodeListOf<T>;
export default getElementsBySelector;
