import React, { ComponentProps } from 'react'
import {
  FlatList,
  ScrollView,
  ListRenderItem,
  StyleProp,
  ViewStyle,
  FlatListProps as RNFlatListProps,
} from 'react-native'
import Animated from 'react-native-reanimated'

export type ContainerRef = FlatList<any>

export type RefComponent = FlatList<any> | ScrollView

export type Ref = React.RefObject<RefComponent>

export type ParamList = string | number | symbol

export type RefType<T extends ParamList> =
  | { setIndex: (name: T, force?: boolean) => void }
  | undefined

export type TabBarProps<T extends ParamList> = {
  indexDecimal: Animated.SharedValue<number>
  focusedTab: Animated.SharedValue<T>
  refMap: Record<T, Ref>
  index: Animated.SharedValue<number>
  containerRef: React.RefObject<ContainerRef>
  onTabPress: (name: T) => void
}

export type CollapsibleProps<T extends ParamList> = {
  initialTabName?: T
  // index?: Animated.SharedValue<number>
  containerRef: React.RefObject<ContainerRef>
  headerHeight?: number
  tabBarHeight?: number
  snapEnabled?: boolean
  diffClampEnabled?: boolean
  snapThreshold?: number
  children: React.ReactElement[]
  HeaderComponent?: (props: TabBarProps<T>) => React.ReactElement
  TabBarComponent?: (props: TabBarProps<T>) => React.ReactElement
  refMap: Record<T, Ref>
  headerContainerStyle?: StyleProp<Animated.AnimateStyle<ViewStyle>>
  containerStyle?: StyleProp<ViewStyle>
  cancelTranslation?: boolean
  lazy?: boolean
  cancelLazyFadeIn?: boolean
  pagerProps?: Omit<
    RNFlatListProps<number>,
    | 'data'
    | 'keyExtractor'
    | 'renderItem'
    | 'horizontal'
    | 'pagingEnabled'
    | 'onScroll'
    | 'showsHorizontalScrollIndicator'
    | 'getItemLayout'
  > &
    Partial<Pick<RNFlatListProps<unknown>, 'renderItem'>>
  onIndexChange?: (data: {
    target: T
    isAlreadyFocused: boolean
    index: number
  }) => void
}

export type ContextType<T extends ParamList> = {
  headerHeight: number
  tabBarHeight: number
  snapEnabled: boolean
  diffClampEnabled: boolean
  snapThreshold: number
  refMap: Record<T, Ref>
  scrollYCurrent: Animated.SharedValue<number>
  tabNames: Animated.SharedValue<T[]>
  index: Animated.SharedValue<number>
  scrollY: Animated.SharedValue<number[]>
  oldAccScrollY: Animated.SharedValue<number>
  accScrollY: Animated.SharedValue<number>
  offset: Animated.SharedValue<number>
  isScrolling: Animated.SharedValue<boolean>
  focusedTab: Animated.SharedValue<T>
  accDiffClamp: Animated.SharedValue<number>
  containerHeight?: number
  scrollX: Animated.SharedValue<number>
  indexDecimal: Animated.SharedValue<number>
  isGliding: Animated.SharedValue<boolean>
  isSnapping: Animated.SharedValue<boolean>
  snappingTo: Animated.SharedValue<number>
  onTabPress: (name: T) => void
  forceSync: Animated.SharedValue<'none' | 'active' | 'after'>
}

export type TabProps<T extends ParamList> = {
  name: T
}

export type ScrollViewProps<T extends ParamList> = ComponentProps<
  typeof Animated.ScrollView
> &
  TabProps<T>

export type FlatListProps<R extends any, T extends ParamList> = Omit<
  ComponentProps<typeof FlatList>,
  'renderItem'
> &
  TabProps<T> & {
    renderItem: ListRenderItem<R>
  }
