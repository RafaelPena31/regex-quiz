import auth from '@react-native-firebase/auth'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers'

export const UserAuthentication = () => !!auth().currentUser
export const useGetUser = () => useSelector((state: RootState) => state.user.userStateData)
export const useGetUserId = () => useSelector((state: RootState) => state.user.userStateData?.uid)
export const useUserName = () => useSelector((state: RootState) => state.user.userStateData?.displayName)
