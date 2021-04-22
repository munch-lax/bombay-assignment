export default (state={data:[]},action)=>{
    switch(action.type){
        case 'FETCH_MOVIE':
            return {...state,data:action.payload}
        
        case 'FETCH_MOVIES':
            return {...state,data:action.payload}

        default:
            return state



    }
}