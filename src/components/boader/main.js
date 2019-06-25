import React, { Component } from 'react';
import BoardList from './boardList';
import SearchInput from './searchInput'

class Board extends Component {
  state = {
    boardList: [{
      subject: '해리 포터',
      writer: '조앤 롤링',
      date: '2019-06-25',
    }],
    subject: '',
    writer: ''
  }

  onInputSearch = (searchObject) => {
    this.setState({
      ...this.state,
      ...searchObject
    });
  }

  searchBoardList = (list) => {
    const { subject, writer } = this.state;
    let isExist = true;

    return list.filter(
      el => {
        if(subject !== '') isExist = ( el.subject.indexOf(subject) > -1 ) ? true : false;
        if(writer !== '') isExist = ( el.writer.indexOf(writer) > -1  ) ? true : false;
        return isExist;
      }
    );
  }

  render() {
    let { 
      boardList,
    } = this.state;

    boardList = this.searchBoardList(boardList);
console.log(boardList);
    return (
      <div>
        <SearchInput onInputSearch={this.onInputSearch} />
        <BoardList boardList={boardList}/>
      </div>
    );
  }
}

export default Board;