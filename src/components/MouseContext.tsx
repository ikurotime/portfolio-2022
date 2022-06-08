import React, { createContext, useState } from 'react'

export const MouseContext = createContext({
  cursorType: '',
  cursorChangeHandler: (cursorType: string) => {}
})

const MouseContextProvider = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
}) => {
  const [cursorType, setCursorType] = useState<string>('')

  const cursorChangeHandler = (cursorType: string) => {
    setCursorType(cursorType)
  }

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler
      }}
    >
      {props.children}
    </MouseContext.Provider>
  )
}

export default MouseContextProvider
