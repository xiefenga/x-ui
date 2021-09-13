import React from 'react'
import { Tab, Icon } from '../../index'

const { TabPane } = Tab

export default () => {
	return (
		<Tab type="card">
			<TabPane tab={
				<span>
					<Icon icon={['fab', 'react']} />
					tab1
				</span>
			}>
        tab 1
			</TabPane>
			<TabPane tab={
				<span>
					<Icon icon={['fab', 'vuejs']} />
					tab2
				</span>
			}>
        tab 2
			</TabPane>
			<TabPane disabled tab={
				<span>
					<Icon icon={['fab', 'angular']} />
					tab3
				</span>
			}>
        tab 3
			</TabPane>
		</Tab>
	)
}