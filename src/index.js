import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

/*React*************************************************************/
//import Counter from './components/Counter'
//import counter from './reducers'

/*const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    onMulti={() => store.dispatch({ type: 'MULTI' })}
  />,
  rootEl
)

render()
store.subscribe(render)*/


/*Vanilla JS********************************************************************/
/*const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'MULTI':
      return state * 2
    default:
      return state
  }
}

const store = createStore(counter);
const render = () =>{
	document.body.innerText = store.getState();	
}

store.subscribe(render);
render();
document.addEventListener('click', () =>{
	store.dispatch({type: 'INCREMENT'});
});  */

/*Redux Store Scratch********************************************************************/
/*const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'MULTI':
      return state * 2
    default:
      return state
  }
}

const createStore = (reducer) =>{
	let state;
	let listeners = [];

	const getState = () => state;

	const dispatch = (action) =>{
		state = reducer(state, action);
		listeners.forEach(listener => listener());
	};

	const subscribe = (listener) => {
		listeners.push(listener);

		return() => {
			listeners =  listeners.filter(l => l !== listener);
		}
	}

	dispatch({});

	return { getState, dispatch, subscribe};
}

const store = createStore(counter);
const render = () =>{
	document.body.innerText = store.getState();	
}

store.subscribe(render);
render();
document.addEventListener('click', () =>{
	store.dispatch({type: 'INCREMENT'});
});*/
/*React Basic*************************************************************/
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'MULTI':
      return state * 2
    default:
      return state
  }
}

const store = createStore(counter);

class Counter extends React.Component{
	render(){
		return(<div>
			<h1>Test</h1>
			{this.props.value}
			<br/>
			<button onClick = {this.props.onIncrement}>UP</button>
			<button onClick = {this.props.onDecrement}>DOWN</button>
		</div>);
	}
}

const render = () => {
	ReactDOM.render(
		<Counter 
			value={store.getState()} 
			onIncrement = {() =>
				store.dispatch({type: 'INCREMENT'})
			}
			onDecrement = {() =>
				store.dispatch({type: 'DECREMENT'})
			}
		/>,
		document.getElementById('root')
	);
};


store.subscribe(render);
render();















