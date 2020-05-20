import React from 'react';
import { PoemIndex } from './PoemIndex/PoemIndex';
import { PoemShow } from './PoemShow/PoemShow';
import { PoemNew } from './PoemNew/PoemNew';
import { PoemEdit } from './PoemEdit/PoemEdit';
import { BrowserRouter, Route } from 'react-router-dom';

const App = function(){
  return (
    <div className="ui container">
    <BrowserRouter >
      <Route exact path="/poems" component={PoemIndex}/>
      <Route exact path="/poems/:id" component={PoemShow} />
      <Route exact path="/new" component={PoemNew} />
      <Route exact path="/edit/:id" component={PoemEdit} />
      {/* <PoemIndex /> */}
      {/* <PoemShow /> */}
      {/* <PoemNew /> */}
      {/* <PoemEdit /> */}
    </BrowserRouter>
    </div>
  );
} 

export default App;
