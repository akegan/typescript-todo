import AppBar from 'material-ui/AppBar'
import * as React from 'react'

export let Header: React.StatelessComponent = () =>
  <AppBar
    className='Header'
    title='To Do'
    showMenuIconButton={false}
  />
Header.displayName = 'Header'
