import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light dark:bg-gray-900 p-4 sm:p-8 md:p-16 lg:p-32 ${className}`}>
        {children}
      
    </div>
  )
}

export default Layout
