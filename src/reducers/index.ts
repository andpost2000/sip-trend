
const State = {
  value: 0,
};

const routReducer= (state = State, action: any)=>{
    switch(action.type){
        case 'PLUS':
          return { value: state.value + action.payload };
        case 'MINUS':
          return { value: state.value - action.payload };
        default: 
        return state;
    }
}

export default routReducer;