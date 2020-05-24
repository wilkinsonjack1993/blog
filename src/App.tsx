import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import PostList from './components/PostList'
import PostView from './components/PostView'

const App = () => (
  <Router>
    <div>
      <Header />
      <section className="section container content">
        <Route exact path="/" component={PostList} />
        <Route path="/:slug" component={PostView} />
      </section>
    </div>
  </Router>
)

export default App
