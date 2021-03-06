// Boiler plate code from old project, change cases as needed

let initialUserState = {
    id: 0,
    name: "",
    email: "",
    line1: "",
    city: "",
    state: "",
    zip_code: "",
    follows: [],
    token: "",
    phone_number: ""
  }
  
  let userReducer = (state = initialUserState, action) => {
    
    switch (action.type) {
  
      case "ADD_A_USER":
        let theUserToBeAdded = action.payload
        let copyOfUsers = [...state.users, theUserToBeAdded]
  
        return {
          ...state,
          users: copyOfUsers
        }
  
      case "SET_USER_INFO":
          return {
            ...state,
            id: action.payload.user.id,
            name: action.payload.user.name,
            email: action.payload.user.email,
            line1: action.payload.user.line1,
            city: action.payload.user.city,
            state: action.payload.user.state,
            zip_code: action.payload.user.zip_code,
            follows: action.payload.user.follows,
            token: action.payload.token,
            hometown: action.payload.user.hometown,
          }
  
          case "UPDATE_USER": 
                return {
                ...state, 
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                line1: action.payload.line1,
                city: action.payload.city,
                state: action.payload.state,
                zip_code: action.payload.zip_code,
                hometown: action.payload.hometown
              }
      
      case "ADD_NEW_FOLLOW":
        let followToBeAdded = action.payload
        let copyOfFollows = [...state.follows, followToBeAdded]
        return {
          ...state,
          follows: copyOfFollows
        }
  
      case "UNFOLLOW":
        return { 
          ...state,
          follows: state.follows.filter(follow => follow.id !== action.payload.id )
          }
  
      case "LOG_OUT":
          localStorage.clear();
          return {
          ...state, ...initialUserState
          }
        
      default:
        return state
  
    }
}  

export default userReducer;