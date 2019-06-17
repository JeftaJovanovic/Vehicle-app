import React from 'react';
import RootStore from './RootStore';
import { Provider } from 'mobx-react';
import { HistoryAdapter } from 'mobx-state-router';
import { history } from './history';
import { Shell } from './Shell';

const rootStore = new RootStore();

const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

class App extends React.Component {
  render() {
    return (
      <Provider rootStore={rootStore}>
        <Shell />
      </Provider>
    );
  }
}

export default App;

