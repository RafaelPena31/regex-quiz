import auth from '@react-native-firebase/auth'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers'

export const UserAuthentication = () => !!auth().currentUser
export const useGetUser = () => useSelector((state: RootState) => state.user.userStateData)
export const useGetSQLUser = () => useSelector((state: RootState) => state.user.userSQLStateData)
export const useGetSQLUserId = () => useSelector((state: RootState) => state.user.userSQLStateData?.id)
export const useGetUserId = () => useSelector((state: RootState) => state.user.userStateData?.uid)
export const useGetScore = () => useSelector((state: RootState) => state.user.userSQLStateData?.score)
export const useUserName = () => useSelector((state: RootState) => state.user.userStateData?.displayName)
