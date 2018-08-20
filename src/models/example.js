import _lodash from 'lodash';

export default {

  namespace: 'example',

  state : {
    list: [{
      account: 'abc123',
      content: 'Content Message1',
      status: false,
    }, {
      account: 'def456',
      content: 'Content Message2',
      status: false,
    }, {
      account: 'ghi789',
      content: 'Content Message3',
      status: false,
    },]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },
  
  reducers: {
    add(state,{item}){
    // console.log(item)
      return{
        ...state,
        list: _lodash.concat(state.list, [item]),
      };
    },

    delete(state,{index}){
      return{
        ...state,
        list: _lodash.filter(state.list,(item,i) => !_lodash.isEqual(index,i)),
      }
    },
  },
};
