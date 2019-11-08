import { LoadStatus } from 'src/enums/enums';
import { MonoliteHelper } from 'src/monolite';

const State = {
  data: {
    complects: [],
    projects: [],
  },
  formSended: '',
  loadStatus: null,
  value: 0,
};

const routReducer= (state = State, action: any)=>{
    switch(action.type){
        case 'FETCH_DATA':
          return new MonoliteHelper(state)
          .set((_) => _.loadStatus, LoadStatus.Loading)
          .get();
        case 'RESPONSE_DATA':
          return new MonoliteHelper(state)
          .set((_) => _.loadStatus, LoadStatus.Loaded)
          .set((_) => _.data, action.payload.data)
          .get();
          case 'RESPONSE_FORM':
            return new MonoliteHelper(state)
            .set((_) => _.formSended, action.payload.statusText)
            .get();
        default: 
        return state;
    }
}

export default routReducer;