import React from 'react'
import { Snackbar } from 'react-native-paper'

const SnackError = ({ visible, mensaje, setVisible }) => {
  return (
    <>
      <Snackbar
          visible={visible}
          onDismiss={ () => setVisible(false) }
          duration={7000}
          action={{
            label: 'OK',
            onPress: () => setVisible(false)
          }}
      > {mensaje} </Snackbar>
    </>
  )
}

export default SnackError
