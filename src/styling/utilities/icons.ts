import {GlobalSettings} from "@/utility/GlobalSettings";
import { IRawStyle, IFontFace, Stylesheet } from '@uifabric/merge-styles';

export interface IIconSubset {
  fontFace?: IFontFace;
  icons: {
    [key: string]: string | JSX.Element;
  };

  style?: IRawStyle;
}

export interface IIconSubsetRecord extends IIconSubset {
  isRegistered?: boolean;
  className?: string;
}

export interface IIconRecord {
  code: string | undefined;
  subset: IIconSubsetRecord;
}

export interface IIconOptions {
  /**
   * By default, registering the same set of icons will generate a console warning per duplicate icon
   * registered, because this scenario can create unexpected consequences.
   *
   * Some scenarios include:
   *
   * Icon set was previously registered using a different base url.
   * Icon set was previously registered but a different version was provided.
   * Icons in a previous registered set overlap with a new set.
   *
   * To simply ignore previously registered icons, you can specify to disable warnings. This means
   * that if an icon which was previous registered is registered again, it will be silently ignored.
   * However, consider whether the problems listed above will cause issues.
   **/
  disableWarnings: boolean;

  /**
   * @deprecated
   * Use 'disableWarnings' instead.
   */
  warnOnMissingIcons?: boolean;
}

export interface IIconRecords {
  __options: IIconOptions;
  __remapped: { [key: string]: string };
  [key: string]: IIconRecord | {};
}

const ICON_SETTING_NAME = 'icons';

const _iconSettings = GlobalSettings.getValue<IIconRecords>(ICON_SETTING_NAME, {
  __options: {
    disableWarnings: false,
    warnOnMissingIcons: true
  },
  __remapped: {}
});

// Reset icon registration on stylesheet resets.
const stylesheet = Stylesheet.getInstance();

if (stylesheet && stylesheet.onReset) {
  stylesheet.onReset(() => {
    for (const name in _iconSettings) {
      if (_iconSettings.hasOwnProperty(name) && !!(_iconSettings[name] as IIconRecord).subset) {
        (_iconSettings[name] as IIconRecord).subset.className = undefined;
      }
    }
  });
}
