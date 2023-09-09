import React from 'react'
import { ColorHeader } from './components/Header'
import { ColorMain } from './components/Main'
import { ColorBottom } from './components/Bottom'

export function App() {
  return (
      <div>
        <ColorHeader />

        <ColorMain />

        <ColorBottom />
      </div>
    )
}
