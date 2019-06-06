import React from 'react';
import RootStore from './store/RootStore';
import { Provider } from 'mobx-react';
import { HistoryAdapter } from 'mobx-state-router';
import { history } from './shared/utils/history';
import Shell from './shell';

import './App.css';

const rootStore = new RootStore();

const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

class App extends React.Component {
  render() {
    return (
      <Provider rootStore={rootStore}>
        <Shell />
      </Provider>
    )
  }
}

export default App;
