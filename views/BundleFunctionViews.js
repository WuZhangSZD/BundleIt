import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetBundle = class extends React.Component {
  render() {
    const {parent, playable, hand} = this.props;
    return (
      <div>
        {hand ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <input
          type='text'
          placeholder="BundleName"
          onChange={(e) => this.setState({wager: e.currentTarget.value})}
        />
        <input
          type='text'
          placeholder="BundleLocation"
          onChange={(e) => this.setState({wager: e.currentTarget.value})}
        />
        <input
          type='text'
          placeholder="Bought Date"
          onChange={(e) => this.setState({wager: e.currentTarget.value})}
        />
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;