import { Dimensions, Platform } from 'react-native'
import ExtraDimensions from 'react-native-extra-dimensions-android'

export const helperRealHeightDimension = () => {
  const currentAndroidHeight =
    ExtraDimensions.getRealWindowHeight() -
    ExtraDimensions.getStatusBarHeight() -
    ExtraDimensions.getSoftMenuBarHeight() -
    ExtraDimensions.getSmartBarHeight()

  return Platform.OS === 'android' ? currentAndroidHeight : Dimensions.get('window').height
}
