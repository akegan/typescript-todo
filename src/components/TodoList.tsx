import { List } from 'material-ui/List'
import * as React from 'react'
import { Todo } from '../datatypes'
import { withStore } from '../store'
import { TodoItem } from './TodoItem'

type Props = {
    onToggle(todo: Todo, isCompleted: boolean): void
    onDestroy(todo: Todo): void

}
export let TodoList = withStore('todos')<Props>(({ onToggle, onDestroy, store }) =>
    <div>
        <List>
            {store.get('todos').map((todo, index) =>
                <TodoItem
                    todo={todo}
                    key={index}
                    onToggle={onToggle}
                    onDestroy={onDestroy}
                />
            )}
        </List>
    </div>
)

TodoList.displayName = 'Header'
