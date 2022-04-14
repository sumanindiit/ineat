export interface StyleOptions {
    /**
     * Style of the text of the status bar.
     *
     * @since 1.0.0
     */
    style: Style;
}
export declare enum Style {
    /**
     * Light text for dark backgrounds.
     *
     * @since 1.0.0
     */
    Dark = "DARK",
    /**
     * Dark text for light backgrounds.
     *
     * @since 1.0.0
     */
    Light = "LIGHT",
    /**
     * On iOS 13 and newer the style is based on the device appearance.
     * If the device is using Dark mode, the statusbar text will be light.
     * If the device is using Light mode, the statusbar text will be dark.
     * On iOS 12 and older the statusbar text will be dark.
     * On Android the default will be the one the app was launched with.
     *
     * @since 1.0.0
     */
    Default = "DEFAULT"
}
export interface AnimationOptions {
    /**
     * The type of status bar animation used when showing or hiding.
     *
     * This option is only supported on iOS.
     *
     * @since 1.0.0
     */
    animation: Animation;
}
export declare enum Animation {
    /**
     * No animation during show/hide.
     *
     * @since 1.0.0
     */
    None = "NONE",
    /**
     * Slide animation during show/hide.
     *
     * @since 1.0.0
     */
    Slide = "SLIDE",
    /**
     * Fade animation during show/hide.
     *
     * @since 1.0.0
     */
    Fade = "FADE"
}
export interface BackgroundColorOptions {
    /**
     * A hex color to which the status bar color is set.
     *
     * This option is only supported on Android.
     *
     * @since 1.0.0
     */
    color: string;
}
export interface StatusBarInfo {
    /**
     * Whether the status bar is visible or not.
     *
     * @since 1.0.0
     */
    visible: boolean;
    /**
     * The current status bar style.
     *
     * @since 1.0.0
     */
    style: Style;
    /**
     * The current status bar color.
     *
     * This option is only supported on Android.
     *
     * @since 1.0.0
     */
    color?: string;
    /**
     * Whether the statusbar is overlaid or not.
     *
     * This option is only supported on Android.
     *
     * @since 1.0.0
     */
    overlays?: boolean;
}
export interface SetOverlaysWebViewOptions {
    /**
     * Whether to overlay the status bar or not.
     *
     * @since 1.0.0
     */
    overlay: boolean;
}
export interface StatusBarPlugin {
    /**
     * Set the current style of the status bar.
     *
     * @since 1.0.0
     */
    setStyle(options: StyleOptions): Promise<void>;
    /**
     * Set the background color of the status bar.
     *
     * This method is only supported on Android.
     *
     * @since 1.0.0
     */
    setBackgroundColor(options: BackgroundColorOptions): Promise<void>;
    /**
     * Show the status bar.
     *
     * @since 1.0.0
     */
    show(options?: AnimationOptions): Promise<void>;
    /**
     * Hide the status bar.
     *
     * @since 1.0.0
     */
    hide(options?: AnimationOptions): Promise<void>;
    /**
     * Get info about the current state of the status bar.
     *
     * @since 1.0.0
     */
    getInfo(): Promise<StatusBarInfo>;
    /**
     * Set whether or not the status bar should overlay the webview to allow usage
     * of the space underneath it.
     *
     * This method is only supported on Android.
     *
     * @since 1.0.0
     */
    setOverlaysWebView(options: SetOverlaysWebViewOptions): Promise<void>;
}
/**
 * @deprecated Use `StyleOptions`.
 * @since 1.0.0
 */
export declare type StatusBarStyleOptions = StyleOptions;
/**
 * @deprecated Use `BackgroundColorOptions`.
 * @since 1.0.0
 */
export declare type StatusBarBackgroundColorOptions = BackgroundColorOptions;
/**
 * @deprecated Use `SetOverlaysWebViewOptions`.
 * @since 1.0.0
 */
export declare type StatusBarOverlaysWebviewOptions = SetOverlaysWebViewOptions;
/**
 * @deprecated Use `StatusBarInfo`.
 * @since 1.0.0
 */
export declare type StatusBarInfoResult = StatusBarInfo;
/**
 * @deprecated Use `AnimationOptions`.
 * @since 1.0.0
 */
export declare type StatusBarAnimationOptions = AnimationOptions;
/**
 * @deprecated Use `Animation`.
 * @since 1.0.0
 */
export declare const StatusBarAnimation: typeof Animation;
/**
 * @deprecated Use `Style`.
 * @since 1.0.0
 */
export declare const StatusBarStyle: typeof Style;
