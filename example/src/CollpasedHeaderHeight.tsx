import React from 'react'

import ExampleComponent from './Shared/ExampleComponent'
import { buildHeader, HEADER_HEIGHT } from './Shared/Header'
import { ExampleComponentType } from './types'

const title = 'Collpased Header Height'

const Header = buildHeader(title)
const collapsedHeaderHeight = Math.round(HEADER_HEIGHT / 3)

const DefaultExample: ExampleComponentType = () => {
  return (
    <ExampleComponent
      HeaderComponent={Header}
      collapsedHeaderHeight={collapsedHeaderHeight}
    />
  )
}

DefaultExample.title = title

export default DefaultExample
