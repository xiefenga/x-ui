import React from 'react'

type TestComponent<T> = React.FC<T> & { testId: string }

export function withTestId<T>(Component: React.FC<T> | React.VFC<T>): TestComponent<T> {
	const id = Component.displayName ?? Component.name
	const WithTestIdComponent: TestComponent<T> = (props) => (
		<div data-testid={id}>
			<Component {...props} />
		</div>
	)
	WithTestIdComponent.testId = WithTestIdComponent.displayName = id
	return WithTestIdComponent
}

