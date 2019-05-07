import types from './type'

const initialState = {
    id: null,
    status: null,
    health: null,
    monitor: null,
    peers: null
}

export default (state = initialState, action) => {
    switch(action.type){
        
        case types.GET_ALL_STATS:
            return action.payload

        case types.GET_FILESTRUCTURE:
            return action.payload
            
        case types.ADD_NODE:
            return state
        
        case types.REMOVE_NODE:
            return state
            
        default: 
            return state
    }
} 