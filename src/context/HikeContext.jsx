import { createContext, useReducer } from "react"

export const HikesContext = createContext()

export const hikesReducer = (state, action) => {
  switch (action.type) {
    case "SET_HIKES":
      return {
        hikes: action.payload,
      }
    case "CREATE_HIKE":
      return {
        hikes: [action.payload, ...state.hikes],
      }
    case "DELETE_HIKE":
      return {
        hikes: state.hikes.filter((hike) => hike._id !== action.payload._id),
      }

    default:
      return state
  }
}

export const HikesContextProvider = ({ children }) => {
  // useReducer similar to useState but we also get the function along with the value
  const [state, dispatch] = useReducer(hikesReducer, { hikes: null })
  return (
    <HikesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </HikesContext.Provider>
  )
}
