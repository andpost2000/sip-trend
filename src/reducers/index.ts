import { MonoliteHelper } from 'src/monolite';

const State = {
  data: null,
  loadStatus: null,
  value: 0,
};

const routReducer= (state = State, action: any)=>{
    switch(action.type){
        case 'FETCH_DATA':
          return new MonoliteHelper(state)
          .set((_) => _.loadStatus, 'loading')
          .get();
        case 'RESPONSE_DATA':
          return new MonoliteHelper(state)
          .set((_) => _.loadStatus, 'loaded')
          .set((_) => _.data, action.payload.data)
          .get();
        case 'PLUS':
          return { value: state.value + action.payload };
        case 'MINUS':
          return { value: state.value - action.payload };
        default: 
        return state;
    }
}

export default routReducer;