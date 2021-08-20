
import {
  Button,
  HStack,
  Badge,
  Stack,
  Divider,
  Tooltip,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Spacer,
} from '@chakra-ui/react'

import {
  Edit,
  Discard,
  Publish,
} from '../../../molecules/buttons'

const MainHotbar:React.FC = () => {

  return (
    <>
      <HStack>
        <Flex width="100%">
          <Stack direction="row">
            <Edit />
            <Discard />
          </Stack>
          <Spacer />
          <Stack direction="row">
            <Publish />
          </Stack>
        </Flex>
      </HStack>
    </>
  )
}

export default MainHotbar