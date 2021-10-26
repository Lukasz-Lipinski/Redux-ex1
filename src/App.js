import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { PersistGate } from 'redux-persist/integration/react'
import createSagaMiddleware from 'redux-saga';
import "./styles.css";

import CounterContainer from "./counter/CounterContainer";
import Posts from "./posts/containers/Posts";
import Users from "./users/containers/Users";
import ContactForm from "./users/containers/ContactForm";
import Appbar from "./ui/containers/Appbar";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['ui', 'counter']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWare = [thunk, sagaMiddleware];
const store = createStore(persistedReducer, composeEnhancers(
  applyMiddleware(...middleWare)
)
);

let persistor = persistStore(store)

sagaMiddleware.run(rootSaga);


export default class App extends React.Component {

  handleSubmit = (values) => {
    console.log('values:', values);
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Appbar />
            <ContactForm onSubmit={this.handleSubmit} />
            <CounterContainer />
            <Posts />
            <Users />
          </PersistGate>
        </Provider>
      </div>
    );
  }
}
