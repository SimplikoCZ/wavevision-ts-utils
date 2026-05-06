import { ParentElement } from './types';
declare const getElementsByClassName: <T extends HTMLElement = HTMLElement>(className: string, parent?: ParentElement) => HTMLCollectionOf<T>;
export default getElementsByClassName;
