const initState = {
  prop_one: 'text one',
  prop_two: 'text two',
  prop_three: 'tsome text'
}

export const reducer = (state=initState,action={}) => {
  console.log(action.type, action.payload);
  switch (action.type) {
    case 'PROP_TWO':
      return {...state, prop_two:action.payload}
    default:
      return {...state}
  }

}
