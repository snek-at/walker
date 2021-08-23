import {Divider, HStack, Stack, Flex, Spacer} from '@chakra-ui/react'

import {
  EditButton,
  DiscardButton,
  PublishButton
} from '../../../molecules/buttons'

const MainHotbar: React.FC = () => {
  return (
    <>
      <HStack>
        <Flex width="100%">
          <Stack direction="row">
            <Divider borderLeftWidth="2px" orientation="vertical" />
            <EditButton />
            <DiscardButton />
          </Stack>
          <Spacer />
          <Stack direction="row">
            <PublishButton />
            <Divider borderLeftWidth="2px" orientation="vertical" />
          </Stack>
        </Flex>
      </HStack>
    </>
  )
}

export default MainHotbar
