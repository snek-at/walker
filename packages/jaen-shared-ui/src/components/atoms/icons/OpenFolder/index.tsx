import {Icon, IconProps, useColorMode} from '@chakra-ui/react'

type SnekIconProps = IconProps

const OpenFolderSVG = (dm: boolean) => (require(dm
  ? `./131-folder-open-arrow-up-morph-outline-dm.svg`
  : `./131-folder-open-arrow-up-morph-outline.svg`)
)

const OpenFolder: React.FC<SnekIconProps> = props => {
  const toggle = useColorMode()
  const svg = OpenFolderSVG(toggle.colorMode === 'dark')

  return (
    <Icon
      as={svg}
      w={75}
      h={75}
      {...(props as any)}
    />
  )
}

export default OpenFolder
