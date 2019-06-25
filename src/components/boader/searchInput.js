import React, { Component } from 'react';

class SearchInput extends Component {

  //검색창에 엔터입력시 state update
  onInputEnter = (e) => {
    if(e.keyCode === 13){
      this.props.onInputSearch({ [e.target.id]: e.target.value });
    }
  }

  render() {
    return (
      <div>
        <input id="subject" placeholder="제목을 입력하십시오" onKeyDown={this.onInputEnter}/>
        <input id="writer" placeholder="글쓴이를 입력하십시오" onKeyDown={this.onInputEnter}/>
      </div>
    );
  }
}

export default SearchInput;