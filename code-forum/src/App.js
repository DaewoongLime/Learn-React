import React from 'react';
import {comments} from './commentData'

function App() {
  comments.map(comment => <Card commentObject={comment}/>)
};

export default App;
