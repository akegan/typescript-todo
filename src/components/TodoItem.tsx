import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import { ListItem } from 'material-ui/List'
import Close from 'material-ui/svg-icons/navigation/close'
import * as React from 'react'
import { Todo } from '../datatypes'

type Props = {
  todo: Todo
  onToggle(todo: Todo, isCompleted: boolean): void
  onDestroy(todo: Todo): void
}

export class TodoItem extends React.Component<Props> {

  onCheckItem = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
    this.props.onToggle(this.props.todo, isInputChecked)
  }

  render() {
    return <div>
      <ListItem
        className='ListItem -Compact'
        primaryText={this.props.todo.task}
        style={{ textDecoration: this.props.todo.completed ? 'line-through' : null }}
        leftCheckbox={
          <Checkbox
            checked={this.props.todo.completed}
            onCheck={this.onCheckItem}
            value={this.props.todo.task}
          />
        }
        rightIconButton={
          <IconButton
            onClick={e => this.props.onDestroy(this.props.todo)}
          ><Close className='icon-button'
            /></IconButton>
        }
      />
    </div>
  }
}
