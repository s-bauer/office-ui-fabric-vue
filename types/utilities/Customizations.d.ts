export declare type Settings = {
    [key: string]: any;
};
export declare type SettingsFunction = (settings: Settings) => Settings;
export interface ICustomizations {
    settings: Settings;
    scopedSettings: {
        [key: string]: Settings;
    };
    inCustomizerContext?: boolean;
}
export declare class Customizations {
    static reset(): void;
    static applySettings(settings: Settings): void;
    static applyScopedSettings(scopeName: string, settings: Settings): void;
    static getSettings(properties: string[], scopeName?: string, localSettings?: ICustomizations): any;
    static observe(onChange: () => void): void;
    static unobserve(onChange: () => void): void;
    private static _raiseChange;
}
