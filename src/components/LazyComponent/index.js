import { Suspense } from 'react'

const LazyComponent = props => {
  const { Component, fallback } = props
  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  )
}

export default LazyComponent
