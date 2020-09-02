import React, { useState, useEffect } from 'react'
import { View, Platform, StatusBar, Switch } from 'react-native'

import { connect } from 'react-redux'
import * as appAction from '../../../redux/actions/appActions'

import { useNetInfo } from '@react-native-community/netinfo'

import colors from '../../constants/colors'

import { TextRegular } from '../../atoms/Titles'
import { TouchableButton } from '../../atoms/Spaces'
import Icons from '../../atoms/Icons'

function Button({ navigation, title, onPress, bg, textColor }) {
  const showDarkModeButton = false

  return (
    <>
      <TouchableButton pt={10} pb={10} bg={bg} border={4}>
        <TextRegular size={14} color={textColor}>
          {title}
        </TextRegular>
      </TouchableButton>
    </>
  )
}

const mapStateToProps = state => ({
  darkMode: state.appReducer.darkMode
})

const mapDispatchToProps = dispatch => {
  return {
    _setDarkMode: bool => {
      dispatch(appAction.AppSetDarkMode(bool))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
