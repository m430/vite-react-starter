import { useState } from 'react'
import logo from '@/assets/logo.svg';
import { Button } from 'antd';
import { connect } from 'dva';
import { Link } from 'react-router-dom';
import './index.css'

function App(props) {
  const { count, dispatch } = props;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!{count}</p>
        <p>
          <button type="button" onClick={() => dispatch({ type: 'global/add' })}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <Link to="/page1">
            <Button type="primary" >Page1</Button>
          </Link>
          <Link to="/page2">
            <Button type="primary" >Page2</Button>
          </Link>
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

App = connect(({ global }) => ({
  count: global.count
}))(App);

export default App
