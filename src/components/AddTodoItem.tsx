
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import * as React from 'react'
import { StoreProps, withStore } from '../store'

let ENTER = 13

export let AddTodoItem = withStore('inProgressTask')(class extends React.Component<StoreProps> {

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.store.set('inProgressTask')(event.target.value)
  }
  render() {
    return <div>
      < TextField
        hintText='Whatever shall we do today?'
        onChange={this.handleChange}
        value={this.props.store.get('inProgressTask')}
        onKeyDown={e => e.which === ENTER ? this.onSubmit() : null}
      />
      <FlatButton
        label='submit'
        primary={true}
        onClick={this.onSubmit}
      />
    </div >
  }
  onSubmit = () => {
    let task = this.props.store.get('inProgressTask')
    this.props.store.set('todos')([
      { completed: false, task },
      ...this.props.store.get('todos')
    ])
    this.props.store.set('inProgressTask')('')
  }
})
