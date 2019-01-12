export declare function buildClassMap<T>(styles: T): {
    [key in keyof T]?: string;
};
