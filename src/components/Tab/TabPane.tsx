import React, { ReactNode } from 'react'
import { PropsWithClassName, UnknowReactElement, UnkownFCElement } from '@/types/x-ui'

interface TabPaneBaseProps {
  tab: string
  disabled?: boolean
}

type TabPaneProps = PropsWithClassName<TabPaneBaseProps>

const TabPane:React.FC<TabPaneProps> = () => null

TabPane.displayName = 'x-TabPane'

type TabPaneElement = React.FunctionComponentElement<TabPaneProps & { children: ReactNode }>

export const isTabPaneElement = (val: UnknowReactElement): val is TabPaneElement => {
	return (val as UnkownFCElement).type.displayName === TabPane.displayName
}

export default TabPane
