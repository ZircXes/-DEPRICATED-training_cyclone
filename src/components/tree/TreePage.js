import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import treeData from './TreeData';
import Tree from 'react-tree-graph';

class TreePage extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {

    return (
      <div className="custom-container">
        <Tree
          data={treeData}
          height={400}
          width={400}
          svgProps={{
            className: 'custom'}}/>
      </div>
    );
  }
}

export default TreePage;
