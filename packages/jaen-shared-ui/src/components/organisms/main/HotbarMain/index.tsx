import {
  HStack,
  Stack,
  Flex,
  Spacer
} from '@chakra-ui/react'

import {EditButton, DiscardButton, PublishButton} from '../../../molecules/buttons'

const MainHotbar: React.FC = () => {
  return (
    <>
      <HStack>
        <Flex width="100%">
          <Stack direction="row">
            <EditButton />
            <DiscardButton />
          </Stack>
          <Spacer />
          <Stack direction="row">
            <PublishButton />
          </Stack>
        </Flex>
      </HStack>
    </>
  )
}

export default MainHotbar
