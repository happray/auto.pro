import { BehaviorSubject, Observable } from 'rxjs';
declare type PluginInstallFunction = (option?: any) => any;
export declare type Plugin = PluginInstallFunction | {
    install: PluginInstallFunction;
};
/**
 * 设备是否Root
 */
declare let isRoot: boolean;
/**
 * 当前设备宽度
 */
declare let width: number;
/**
 * 当前设备高度
 */
declare let height: number;
/**
 * 当前设备高宽与基准高宽的缩放比
 */
declare let scale: number;
/**
 * 当前设备的屏幕类型，'w'代表横屏，'h'代表竖屏，若高宽相等则判定为横屏
 */
declare let screenType: ('w' | 'h');
/**
 * 截图，仅当needCap设为true时可用
 * @param path 要保存的图片路径
 * @returns {Image} 返回得到的截图
 */
declare function cap(path?: string): Image;
/**
 * 加载插件
 * @param plugin 要加载的插件
 * @param option 插件需要的参数
 */
declare function use(plugin: Plugin, option?: any): number | undefined;
/**
 *
 *
 * 程序是否处于暂停状态
 */
declare const pauseState$: BehaviorSubject<boolean>;
/**
 * 操作符，使流可暂停，可设ispausable为false来强制关闭暂停效果
 * @param {boolean} isPausable 是否强制取消暂停效果
 * @param {boolean} wait wait为true时将阻塞并存储所有输入，为false时忽略暂停期间的输入
 */
declare const pausable: (isPausable?: boolean, wait?: boolean) => (source: any) => any;
/**
 * 将程序暂停
 */
declare function pause(): void;
/**
 * 将程序恢复运行
 */
declare function resume(): void;
/**
 * 可暂停的interval
 * @param t 时间间隔
 */
declare function pausableInterval(t?: number, isWait?: boolean): Observable<unknown>;
/**
 * 可暂停的timer
 * @param t 首次延迟
 * @param each 之后的每次输出间隔
 */
declare function pausableTimer(t: number, each?: number, isWait?: boolean): Observable<unknown>;
/**
 * 可暂停的TimeoutWith
 * @param t
 * @param ob
 */
declare function pausableTimeoutWith(t: number, ob: Observable<any>): (source: any) => Observable<any>;
/**
 * 可暂停的timeout
 * @param t
 */
declare function pausableTimeout(t: number): (source: any) => Observable<any>;
/**
 * 获取当前设备宽度的分式值，如value = 1/4，则获取宽度的1/4，并向下取整
 * @param value 要获取的宽度百分比
 * @returns 当前设备宽度 * value
 */
declare function getWidth(value?: number): number;
/**
 * 获取当前设备高度的分式值，如value = 1/4，则获取高度的1/4，并向下取整
 * @param value 要获取的高度百分比
 * @returns 当前设备高度 * value
 */
declare function getHeight(value?: number): number;
export declare function getTime(): any;
/**
 * 获取对象的原型
 * Java对象直接返回Java类名，如'Image'、'Point'
 * JS对象返回对应的原型，如 'Null' 'Undefined' 'String' 'Number' 'Function' 'Boolean' 'Array'
 * @param obj 要获取原型的对象
 * @returns {string}
 */
export declare function getPrototype(obj: any): string;
export { isRoot, cap, use, width, height, scale, getWidth, getHeight, screenType, pause, resume, pausable, pauseState$, pausableInterval, pausableTimer, pausableTimeout, pausableTimeoutWith };
/**
 *
 * @param {number | 1280} param.baseWidth 基准宽度
 * @param {number | 720} param.baseHeight 基准高度
 * @param {boolean | false} param.needCap 是否需要截图功能
 * @param {boolean | false} param.needService 是否需要无障碍服务，默认为false，但在非root环境下将强制开启
 */
export default function (param?: {
    baseWidth?: number;
    baseHeight?: number;
    needCap?: boolean;
    needService?: boolean;
    needFloaty?: boolean;
}): void;
