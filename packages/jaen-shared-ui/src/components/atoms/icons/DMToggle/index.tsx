import {SunIcon, MoonIcon} from '@chakra-ui/icons'

export type DMToggleProps = {
  isDMEnabled: boolean
}

const DMToggle: React.FC<DMToggleProps> = ({isDMEnabled}) =>
  isDMEnabled ? <SunIcon /> : <MoonIcon />

export default DMToggle
