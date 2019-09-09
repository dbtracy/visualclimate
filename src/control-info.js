import React, { PureComponent } from 'react';
import NewPage from './component/totalInfo/newPage';

//modal wrapper for our popup
const defaultContainer = ({ children, classInStateInfo }) => (
  <div className={classInStateInfo}>{children}</div> //change
);

export default class StateInfo extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { show, onClick } = this.props;
    const showHideClassName = show
      ? ' usaInfo display-block'
      : ' usaInfo display-none';
    const Container = this.props.containerComponent || defaultContainer;
    return (
      <Container classInStateInfo={showHideClassName}>
        <i className="fas fa-times fa-3x" onClick={onClick} />
        <NewPage />
      </Container>
    );
  }
}
