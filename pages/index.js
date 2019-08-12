import React from 'react';
import { connect } from 'react-redux';

import { loadData, startClock, tickClock } from '../actions/actions';
import Page from '../components/page';
import FetchButton from '../components/fetchButton';

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    // store.dispatch(tickClock(isServer))

    if (!store.getState().placeholderData) {
      store.dispatch(loadData());
    }

    return { isServer };
  }

  // componentDidMount () {
  // this.props.dispatch(startClock())
  // }

  render() {
    return (
      <>
        <FetchButton />
        <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />
      </>
    );
  }
}

export default connect()(Index);
