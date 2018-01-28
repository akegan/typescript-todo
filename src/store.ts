import { connect, createStore, Store as BabyduxStore, withLogger } from 'undux'
import { Todo } from './datatypes'

type Actions = {

  /**
   * List of all TODO items.
   */
  todos: Todo[]

  /**
   * Input field for new todo
   */
  inProgressTask: string

}
/**
 * Note: Do not export this. Use `withStore` or effects (see effects.ts) instead.
 */
let store = withLogger(createStore<Actions>({
  todos: [],
  inProgressTask: ''
}))

export let withStore = connect(store)

export type StoreProps = {
  store: Store
}

export type Store = BabyduxStore<Actions>

// for debugging
(window as any).store = store
