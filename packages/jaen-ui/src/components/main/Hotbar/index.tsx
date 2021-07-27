import {Badge, Divider, Flex, HStack, Spacer, Stack} from '@chakra-ui/layout'
import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tooltip
} from '@chakra-ui/react'
import * as React from 'react'

import {
  Animation,
  publishIconLottie,
  workspacesIconLottie,
  editIconLottie,
  discardIconLottie,
  saveIconLottie
} from '../../../lottie/index'

export type HotbarProps = {
  onEditClick?: () => void
  onDiscardClick?: () => void
  onSaveClick?: () => void
  onPublishClick?: () => void
  onWorkspacesClick?: () => void

  workspacesMenuItems?: (
    | {
        type: 'Item'
        command: string
        name: string
        onClick: () => void
      }
    | {type: 'Divider'}
  )[]
}

const Hotbar: React.FC<HotbarProps> = props => {
  return (
    <HStack>
      <Flex width="100%">
        <Stack direction="row">
          <Animation lottie={editIconLottie}>
            {({container, animation}) => (
              <Tooltip
                hasArrow
                label="Hey you.. Press me and you can destroy everything"
                placement="bottom-start"
                fontSize="md">
                <Button
                  size="sm"
                  variant="outline"
                  leftIcon={container}
                  rightIcon={
                    <Badge borderRadius="full" px="2" colorScheme="red">
                      187
                    </Badge>
                  }
                  onClick={() => {
                    animation.playSegments([0, animation.totalFrames], true)
                    props.onEditClick?.()
                  }}>
                  Edit
                </Button>
              </Tooltip>
            )}
          </Animation>

          <Animation lottie={discardIconLottie}>
            {({container, animation}) => (
              <Button
                size="sm"
                variant="outline"
                leftIcon={container}
                onClick={() => {
                  animation.playSegments([0, animation.totalFrames], true)
                  props.onDiscardClick?.()
                }}>
                Discard
              </Button>
            )}
          </Animation>

          <Animation lottie={saveIconLottie}>
            {({container, animation}) => (
              <Button
                size="sm"
                variant="outline"
                leftIcon={container}
                onClick={() => {
                  animation.playSegments([0, animation.totalFrames], true)
                  props.onSaveClick?.()
                }}>
                Save
              </Button>
            )}
          </Animation>
        </Stack>

        <Spacer />
        <Stack direction="row">
          <Animation lottie={publishIconLottie}>
            {({container, animation}) => (
              <Button
                size="sm"
                variant="outline"
                leftIcon={container}
                onClick={() => {
                  animation.playSegments([0, animation.totalFrames], true)
                  props.onPublishClick?.()
                }}>
                Publish
              </Button>
            )}
          </Animation>
          <Divider orientation="vertical" />
          <Menu isLazy>
            <Animation lottie={workspacesIconLottie}>
              {({container, animation}) => (
                <MenuButton
                  size="sm"
                  as={Button}
                  aria-label="Options"
                  leftIcon={container}
                  rightIcon={
                    <Badge borderRadius="full" px="2" colorScheme="yellow">
                      a7bd
                    </Badge>
                  }
                  variant="outline"
                  onClick={() => {
                    animation.playSegments(
                      [
                        [0, animation.totalFrames],
                        [animation.totalFrames, 0]
                      ],
                      true
                    )
                    props.onWorkspacesClick?.()
                  }}>
                  Workspaces
                </MenuButton>
              )}
            </Animation>
            {props.workspacesMenuItems && (
              <MenuList>
                {props.workspacesMenuItems?.map((e, key) => (
                  <>
                    {e.type === 'Item' && (
                      <MenuItem
                        key={key}
                        command={e.command}
                        onClick={e.onClick}>
                        {e.name}
                      </MenuItem>
                    )}
                    {e.type === 'Divider' && <MenuDivider />}
                  </>
                ))}
              </MenuList>
            )}
          </Menu>
        </Stack>
      </Flex>
    </HStack>
  )
}

export default Hotbar
