import React from 'react';

const BoardItem = (props) => {
  const { subject, writer, date } = props;

  return (
    <div className="board-list">
      <span>{subject}</span>
      <span>{writer}</span>
      <span>{date}</span>
    </div>
  );
}

export default BoardItem;