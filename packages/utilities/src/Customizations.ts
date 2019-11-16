import { GlobalSettings } from './GlobalSettings';
import { EventGroup } from './EventGroup';

// tslint:disable-next-line:no-any
export type Settings = { [key: string]: any };
export type SettingsFunction = (settings: Settings) => Settings;

export interface ICustomizations {
  settings: Settings;
  scopedSettings: { [key: string]: Settings };
  inCustomizerContext?: boolean;
}

const CustomizationsGlobalKey = 'customizations';
const NO_CUSTOMIZATIONS = { settings: {}, scopedSettings: {}, inCustomizerContext: false };

let _allSettings = GlobalSettings.getValue<ICustomizations>(CustomizationsGlobalKey, {
  settings: {},
  scopedSettings: {},
  inCustomizerContext: false
});

const _events = new EventGroup(_allSettings);

export class Customizations {
  public static reset(): void {
    _allSettings.settings = {};
    _allSettings.scopedSettings = {};
  }

  // tslint:disable-next-line:no-any
  public static applySettings(settings: Settings): void {
    _allSettings.settings = { ..._allSettings.settings, ...settings };
    Customizations._raiseChange();
  }

  // tslint:disable-next-line:no-any
  public static applyScopedSettings(scopeName: string, settings: Settings): void {
    _allSettings.scopedSettings[scopeName] = { ..._allSettings.scopedSettings[scopeName], ...settings };
    Customizations._raiseChange();
  }

  public static getSettings(
    properties: string[],
    scopeName?: string,
    localSettings: ICustomizations = NO_CUSTOMIZATIONS
    // tslint:disable-next-line:no-any
  ): any {
    // tslint:disable-next-line:no-any
    const settings: Settings = {};
    const localScopedSettings = (scopeName && localSettings.scopedSettings[scopeName]) || {};
    const globalScopedSettings = (scopeName && _allSettings.scopedSettings[scopeName]) || {};

    for (let property of properties) {
      settings[property] =
        localScopedSettings[property] ||
        localSettings.settings[property] ||
        globalScopedSettings[property] ||
        _allSettings.settings[property];
    }

    return settings;
  }

  public static observe(onChange: () => void): void {
    _events.on(_allSettings, 'change', onChange);
  }

  public static unobserve(onChange: () => void): void {
    _events.off(_allSettings, 'change', onChange);
  }

  private static _raiseChange(): void {
    _events.raise('change');
  }
}
