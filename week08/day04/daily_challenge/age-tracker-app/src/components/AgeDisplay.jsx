import React from 'react'
import { useSelector } from 'react-redux'

export default function AgeDisplay() {
  const { age, loading } = useSelector((state) => state.age)

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Age: {age}</h2>
      {loading && <div style={{ fontSize: '24px' }}>⏳ Updating...</div>}
    </div>
  )
}
