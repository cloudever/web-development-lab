import React from 'react';

const PouchDBContext = React.createContext(null);
const { Consumer } = PouchDBContext;

class PouchDBProvider extends React.Component {
  componentDidMount() {
    if (!this.props.database) {
      console.warn('Pass database instance to the PouchDBProvider');
    }
  }

  render() {
    const {
      database,
      children,
    } = this.props;

    return (
      <PouchDBContext.Provider value={database}>
        {children}
      </PouchDBContext.Provider>
    );
  }
}

export default PouchDBProvider;

export { Consumer };

