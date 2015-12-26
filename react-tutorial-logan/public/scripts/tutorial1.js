var CommentBox = React.createClass({
  render: function() { 
    return (
      <div className="commentBox">
        Hello, world! I am the Comment Box of Logan.
      </div>
    );
  }
});

ReactDOM.render(
    <CommentBox/>,
    document.getElementById('content')
);
