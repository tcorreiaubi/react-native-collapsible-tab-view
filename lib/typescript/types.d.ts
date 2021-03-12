import React, { ComponentProps } from 'react';
import { FlatList, FlatListProps as RNFlatListProps, ScrollView, StyleProp, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { TabProps } from './Tab';
export declare type ContainerRef = FlatList<any>;
export declare type RefComponent = FlatList<any> | ScrollView | Animated.ScrollView;
export declare type Ref<T extends RefComponent> = React.RefObject<T>;
export declare type TabName = string | number;
export declare type RefHandler<T extends TabName = TabName> = {
    jumpToTab: (name: T) => boolean;
    setIndex: (index: number) => boolean;
    getFocusedTab: () => T;
    getCurrentIndex: () => number;
};
export declare type CollapsibleRef<T extends TabName = TabName> = RefHandler<T> | undefined;
export declare type TabBarProps<T extends TabName = TabName> = {
    indexDecimal: Animated.SharedValue<number>;
    focusedTab: Animated.SharedValue<T>;
    tabNames: T[];
    index: Animated.SharedValue<number>;
    containerRef: React.RefObject<ContainerRef>;
    onTabPress: (name: T) => void;
    tabProps: TabsWithProps<T>;
};
export declare type IndexChangeEventData<T extends TabName = TabName> = {
    prevIndex: number;
    index: number;
    prevTabName: T;
    tabName: T;
};
export declare type OnTabChangeCallback<T extends TabName = TabName> = (data: IndexChangeEventData<T>) => void;
export declare type TabReactElement<T extends TabName = TabName> = React.ReactElement<TabProps<T>>;
export declare type CollapsibleProps = {
    initialTabName?: TabName;
    /**
     * Is optional, but will optimize the first render.
     */
    headerHeight?: number;
    /**
     * Is optional, but will optimize the first render.
     */
    tabBarHeight?: number;
    /**
     * Header minimum height when collapsed
     */
    minHeaderHeight?: number;
    /**
     * Reveal header when scrolling down. Implements diffClamp.
     */
    revealHeaderOnScroll?: boolean;
    /**
     * Percentage of header height to define as the snap point. A number between
     * 0 and 1, or `null` to disable snapping.
     * @default null
     */
    snapThreshold?: number | null;
    children: TabReactElement<TabName>[] | TabReactElement<TabName>;
    HeaderComponent?: React.ReactElement | null;
    TabBarComponent?: (props: TabBarProps<TabName>) => React.ReactElement | null;
    headerContainerStyle?: StyleProp<Animated.AnimateStyle<ViewStyle>>;
    containerStyle?: StyleProp<ViewStyle>;
    cancelTranslation?: boolean;
    /**
     * If lazy, will mount the screens only when the tab is visited. There is a
     * default fade in transition.
     */
    lazy?: boolean;
    cancelLazyFadeIn?: boolean;
    /**
     * Props passed to the horiztontal flatlist. If you want for example to
     * disable swiping, you can pass `{ scrollEnabled: false }`
     */
    pagerProps?: Omit<RNFlatListProps<number>, 'data' | 'keyExtractor' | 'renderItem' | 'horizontal' | 'pagingEnabled' | 'onScroll' | 'showsHorizontalScrollIndicator' | 'getItemLayout'>;
    /**
     * Callback fired when the index changes. It receives the current index.
     */
    onIndexChange?: (index: number) => void;
    /**
     * Callback fired when the tab changes. It receives the previous and current
     *  index and tabnames.
     */
    onTabChange?: OnTabChangeCallback<TabName>;
};
export declare type ContextType<T extends TabName = TabName> = {
    headerHeight: number;
    tabBarHeight: number;
    revealHeaderOnScroll: boolean;
    snapThreshold: number | null | undefined;
    /**
     * Index value, including decimal points. Use this to interpolate tab
     * indicators.
     */
    indexDecimal: Animated.SharedValue<number>;
    /**
     * Tab names, same as the keys of `refMap`.
     */
    tabNames: Animated.SharedValue<T[]>;
    /**
     * Current index of the pager.
     */
    index: Animated.SharedValue<number>;
    /**
     * Name of the current focused tab.
     */
    focusedTab: Animated.SharedValue<T>;
    /**
     * DiffClamp value. It's the current visible header height if
     * `diffClampEnabled={true}`.
     */
    accDiffClamp: Animated.SharedValue<number>;
    /**
     * Scroll position of current tab.
     */
    scrollYCurrent: Animated.SharedValue<number>;
    /**
     * Array of the scroll y position of each tab.
     */
    scrollY: Animated.SharedValue<number[]>;
    containerHeight?: number;
    /**
     * Object containing the ref of each scrollable component.
     */
    refMap: Record<TabName, Ref<RefComponent>>;
    /**
     * Set the ref of the scrollable component.
     */
    setRef: <TComponent extends RefComponent>(key: T, ref: React.RefObject<TComponent>) => Ref<TComponent>;
    /**
     * Max distance allowed to collapse the header.
     */
    headerScrollDistance: Animated.SharedValue<number>;
    /**
     * Previous addScrollY value.
     */
    oldAccScrollY: Animated.SharedValue<number>;
    /**
     * Accumulated scroll Y distance. Used to calculate the accDiffClamp value.
     */
    accScrollY: Animated.SharedValue<number>;
    /**
     * Offset to take the next scrollY as if it were at the same position of the
     * previous tab.
     */
    offset: Animated.SharedValue<number>;
    isScrolling: Animated.SharedValue<number>;
    /**
     * Scroll x position of the tabs container.
     */
    scrollX: Animated.SharedValue<number>;
    isGliding: Animated.SharedValue<boolean>;
    isSnapping: Animated.SharedValue<boolean>;
    /**
     * The next snapping value, used only with diffClamp.
     */
    snappingTo: Animated.SharedValue<number>;
    /**
     * Height of the scrollable content of each tab. Helps to allow iOS bouncing.
     */
    contentHeights: Animated.SharedValue<number[]>;
    contentInset: number;
    headerTranslateY: Animated.SharedValue<number>;
};
export declare type ScrollViewProps = ComponentProps<typeof Animated.ScrollView>;
export declare type CollapsibleStyle = {
    style: {
        width: number;
    };
    contentContainerStyle: {
        minHeight: number;
        paddingTop: number;
    };
    progressViewOffset: number;
};
export declare type TabsWithProps<T extends TabName = TabName> = Map<T, Omit<TabProps<T>, 'children'> & {
    index: number;
}>;