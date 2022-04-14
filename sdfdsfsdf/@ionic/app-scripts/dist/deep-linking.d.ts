import { BuildContext, ChangedFile, DeepLinkConfigEntry } from './util/interfaces';
export declare let existingDeepLinkConfigString: string;
export declare function setExistingDeepLinkConfig(newString: string): void;
export declare function deepLinking(context: BuildContext): Promise<void>;
export declare function deepLinkingWorkerImpl(context: BuildContext, changedFiles: ChangedFile[]): Promise<Map<string, DeepLinkConfigEntry>>;
export declare function deepLinkingUpdate(changedFiles: ChangedFile[], context: BuildContext): Promise<void>;
export declare function deepLinkingUpdateImpl(changedFiles: ChangedFile[], context: BuildContext): Promise<void>;
export declare function deepLinkingWorkerFullUpdate(context: BuildContext): Promise<void>;
export declare function getAppMainNgModuleFile(appNgModulePath: string): Promise<string>;
export declare function hasAppModuleChanged(changedFiles: ChangedFile[], appNgModulePath: string): boolean;