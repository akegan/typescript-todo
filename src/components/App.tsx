import { without } from 'lodash'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import * as React from 'react'
import { Todo } from '../datatypes'
import { StoreProps, withStore } from '../store'
import { replace } from '../utils'
import { AddTodoItem } from './AddTodoItem'
import { Header } from './Header'
import { TodoList } from './TodoList'

export let App = withStore()(class extends React.Component<StoreProps> {
  render() {
    return <React.Fragment>
      <MuiThemeProvider>
        <div className='App'>
          <Header />
          <AddTodoItem />
          <TodoList
            onToggle={this.onToggle}
            onDestroy={this.onDestroy}
          />
        </div>
      </MuiThemeProvider>
    </React.Fragment>
  }

  onToggle = (todo: Todo, isCompleted: boolean) => {
    let completed = isCompleted
    this.props.store.set('todos')(replace(this.props.store.get('todos'), todo, { ...todo, completed }))
  }

  onDestroy = (todo: Todo) => {
    this.props.store.set('todos')(without(this.props.store.get('todos'), todo))
  }
})
App.displayName = 'App'
