import React from 'react'

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen">
      <div className={`max-w-4xl mx-auto px-8 pt-8`}>{children}</div>
    </div>
  )
}
