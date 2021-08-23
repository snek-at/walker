import {Button, IconButton, Text} from '@chakra-ui/react'

import {SnekIcon} from '../../../atoms/icons'

export type JaenToggleButtonProps = {
  ref: React.Ref<HTMLButtonElement>
  onClick: () => void
}

const JaenToggleButton: React.FC<JaenToggleButtonProps> = props => {
  return (
    <IconButton
      aria-label="Toggle snek jaen"
      w={[50, 60, 70]}
      h={[50, 60, 70]}
      icon={<SnekIcon h={[30, 40, 50]} />}
      onClick={props.onClick}
      ref={props.ref}
    />
  )
}

export default JaenToggleButton
