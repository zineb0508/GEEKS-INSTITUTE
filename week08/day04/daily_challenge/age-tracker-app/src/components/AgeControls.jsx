import React from 'react'
import { useDispatch } from 'react-redux'
import { ageUpAsync, ageDownAsync } from '../features/age/ageThunk'

export default function AgeControls() {
  const dispatch = useDispatch()

  return (
    <div style={{ marginTop: '20px' }}>
      <button onClick={() => dispatch(ageUpAsync())}>Age Up</button>
      <button onClick={() => dispatch(ageDownAsync())} style={{ marginLeft: '10px' }}>
        Age Down
      </button>
    </div>
  )
}
