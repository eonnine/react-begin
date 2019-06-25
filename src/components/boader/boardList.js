import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BoardItem from './boardItem';

class BoardList extends Component {
  render() {
    let { boardList } = this.props;

    boardList = boardList.map(
      ({ subject, writer, date }) => (
        <BoardItem
          key={subject}
          subject={subject}
          writer={writer}
          date={date}
        />
      )
    );

    return (
      <div>
        {boardList}
      </div>
    );
  }
};

BoardList.propTypes = {
  boardList: PropTypes.array
}

export default BoardList;