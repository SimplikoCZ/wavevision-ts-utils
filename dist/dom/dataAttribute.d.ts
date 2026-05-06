export interface DataAttribute {
    readonly asObject: (value?: unknown) => {
        [K: string]: string;
    };
    readonly assign: <T extends Element = Element>(element: T) => T;
    readonly asString: (value?: unknown) => string;
    readonly get: <T extends Element = Element>(element: T) => string | null;
    readonly has: <T extends Element = Element>(element: T) => boolean;
    readonly name: () => string;
    readonly remove: <T extends Element = Element>(element: T) => T;
    readonly toJSON: () => {
        [K: string]: string;
    };
    readonly toString: () => string;
    readonly value: (value?: unknown) => string;
}
declare const dataAttribute: (attribute: string, prefix?: string) => DataAttribute;
export default dataAttribute;
