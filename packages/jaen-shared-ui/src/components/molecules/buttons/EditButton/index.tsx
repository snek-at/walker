import {Button, Tooltip, Badge, useColorMode} from '@chakra-ui/react'
import {Lottie} from '@snek-at/react-lottie'
import React, {useState} from 'react'

import {AEditLottie} from '../../../atoms/icons/AEdit'
import translations from './translations.json'

export type EditingButtonProps = {
  onEditingChange: (editing: boolean) => void
}

const EditButton: React.FC<EditingButtonProps> = props => {
  const [active, setActive] = useState(false)
  const toggleActive = () => {
    setActive(!active)
    props.onEditingChange(!active)
  }

  const {colorMode} = useColorMode()
  const lottie = AEditLottie(colorMode === 'dark')

  const LM = 'en'

  type Translations = {[name: string]: {en: string; de: string}}

  type Trs<T> = {[name in keyof T]: string}

  function useLanguageModeValue<T extends Translations>(value: T) {
    const translation: Trs<T> = {} as Trs<T>

    for (const [key, element] of Object.entries(value)) {
      translation[key as keyof T] = element[LM]
    }

    return translation
  }

  const CONTENT = useLanguageModeValue(translations)

  return (
    <Lottie lottie={lottie} forceReloadDeps={[colorMode]}>
      {({container, animation}) => (
        <Tooltip
          hasArrow
          label={active ? CONTENT.tooltip_on : CONTENT.tooltip_off}
          placement="bottom-start"
          fontSize="md">
          <Button
            size="sm"
            variant="outline"
            leftIcon={container}
            onClick={() => {
              animation.playSegments([0, animation.totalFrames], true)
              toggleActive()
            }}
            {...(props as any)}>
            {active ? CONTENT.button_on : CONTENT.button_off}
          </Button>
        </Tooltip>
      )}
    </Lottie>
  )
}

export default EditButton
