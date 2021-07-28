import {
  ColorMode,
  useColorModeValue as _useColorModeValue
} from '@chakra-ui/react'

export type IconType = {colorMode?: ColorMode}

export const useColorModeValue = (
  light: any,
  dark: any,
  colorMode?: ColorMode
) => {
  if (colorMode === 'light') {
    return light
  } else if (colorMode === 'dark') {
    return dark
  }

  return _useColorModeValue(light, dark)
}

export {default as DmToggleIconn} from './DmToggleIcon'
export {default as SnekIcon} from './SnekIcon'
export {default as EditIcon} from './EditIcon'
export {default as DiscardIcon} from './DiscardIcon'
export {default as PublishIcon} from './PublishIcon'
