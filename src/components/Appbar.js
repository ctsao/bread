import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'
import MUIAppbar from 'muicss/lib/react/appbar'
import Button from 'muicss/lib/react/button'
import * as Actions from '../actions/index'

// TODO
const mapStateToProps = (state, ownProps) => ({
  isAuthorized: true,
  user: undefined,
})

// TODO
const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => {
    dispatch(Actions.logout())
  },
  stackModal: (c, t) => {
    dispatch(Actions.stackModal(c, t))
  },
})

const styles = StyleSheet.create({
  appbar: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  toolbar: {
    flex: '1',
    textAlign: 'right',
  },
})

const Appbar = ({}) => {
  return (
    <MUIAppbar>
      <div className={'mui--appbar-height ' + css(styles.appbar)}>
        <div>Bread</div>
        <div className={css(styles.toolbar)}>
        </div>
      </div>
    </MUIAppbar>
  )

}

export default connect(mapStateToProps, mapDispatchToProps)(Appbar)
