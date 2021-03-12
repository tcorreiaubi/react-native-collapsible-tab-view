import { MutableRefObject } from 'react';
import { ContainerRef, RefComponent } from 'react-native-collapsible-tab-view';
import Animated from 'react-native-reanimated';
import { CollapsibleStyle, ContextType, TabName, TabReactElement, TabsWithProps, Ref } from './types';
export declare function useContainerRef(): import("react").RefObject<ContainerRef>;
export declare function useAnimatedDynamicRefs(): [ContextType['refMap'], ContextType['setRef']];
export declare function useTabProps<T extends TabName>(children: TabReactElement<T>[] | TabReactElement<T>, tabType: Function): [TabsWithProps<T>, T[]];
/**
 * Hook exposing some useful variables.
 *
 * ```tsx
 * const { focusedTab, ...rest } = useTabsContext()
 * ```
 */
export declare function useTabsContext(): ContextType<TabName>;
/**
 * Access the parent tab screen from any deep component.
 *
 * ```tsx
 * const tabName = useTabNameContext()
 * ```
 */
export declare function useTabNameContext(): TabName;
/**
 * Hook to access some key styles that make the whole thing work.
 *
 * You can use this to get the progessViewOffset and pass to the refresh control of scroll view.
 */
export declare function useCollapsibleStyle(): CollapsibleStyle;
export declare function useUpdateScrollViewContentSize({ name }: {
    name: TabName;
}): (_: number, h: number) => void;
/**
 * Allows specifying multiple functions to be called in a sequence with the same parameters
 * Useful because we handle some events and need to pass them forward so that the caller can handle them as well
 * @param fns array of functions to call
 * @returns a function that once called will call all passed functions
 */
export declare function useChainCallback(...fns: (Function | undefined)[]): (...args: unknown[]) => void;
export declare function useScroller<T extends RefComponent>(): (ref: Ref<T> | undefined, x: number, y: number, animated: boolean, _debugKey: string) => void;
export declare const useScrollHandlerY: (name: TabName, { enabled }: {
    enabled: boolean;
}) => (event: import("react-native").NativeSyntheticEvent<import("react-native").NativeScrollEvent>) => void;
declare type ForwardRefType<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;
/**
 * Magic hook that creates a multicast ref. Useful so that we can both capture the ref, and forward it to callers.
 * Accepts a parameter for an outer ref that will also be updated to the same ref
 * @param outerRef the outer ref that needs to be updated
 * @returns an animated ref
 */
export declare function useSharedAnimatedRef<T extends RefComponent>(outerRef: ForwardRefType<T>): import("react").RefObject<T>;
export declare function useAfterMountEffect(effect: React.EffectCallback): void;
export declare function useConvertAnimatedToValue<T>(animatedValue: Animated.SharedValue<T>): T;
interface HeaderMeasurements {
    /**
     * Animated value that represents the current Y translation of the header
     */
    top: Animated.SharedValue<number>;
    /**
     * The height of the header
     */
    height: number;
}
export declare function useHeaderMeasurements(): HeaderMeasurements;
/**
 * Returns the currently focused tab name
 */
export declare function useFocusedTab(): TabName;
/**
 * Returns an animated value representing the current tab index, as a floating point number
 */
export declare function useAnimatedTabIndex(): Animated.SharedValue<number>;
export {};
