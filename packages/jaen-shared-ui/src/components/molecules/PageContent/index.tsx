import {
  Input,
  Text,
  InputGroup,
  Heading,
  Box,
  Stack,
  Divider,
  Flex,
  Center,
  InputRightAddon,
  InputLeftAddon,
  Textarea,
  Checkbox,
  Badge,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  HStack,
  Spacer,
  Image,
  VStack,
  Tooltip
} from '@chakra-ui/react'
import {ChangeEvent, useEffect, useState} from 'react'
import translations from './translations.json'
import { InfoOutlineIcon } from '@chakra-ui/icons'

type Values = {
  title: string
  slug: string
  description: string
  image: string
  isBlogPost: boolean
  lastPublished: string
}

export type PageContentType = {
  values?: Values
  onValuesChange: (newValues: Values) => void
}

const PageContent: React.FC<PageContentType> = props => {
  const [values, setValues] = useState<Values>(props.values || ({} as Values))

  useEffect(() => {
    setValues(props.values || ({} as Values))
  }, [props.values])

  const handleValuesChange = (
    key: keyof Values,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({...values, [key]: event.target.value})

    props.onValuesChange(values)
  }

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
    <>
      <Stack spacing="24px" h="70vh">
        <Flex>
          <Box>
            <Heading size="lg">{values.title}</Heading>
          </Box>
          <Spacer />
          <Box>
            {values.isBlogPost && (
              <Badge mx={1} variant="outline" colorScheme="green">
                BlogPost
              </Badge>
            )}
            {values.lastPublished && (
              <Badge variant="outline" colorScheme="blue">
                Last published: {values.lastPublished}
              </Badge>
            )}
          </Box>
        </Flex>
        <Divider />
        <Stack spacing={2}>
          <Flex>
            <Box flex="1" mr={5}>
              <Box py={2}>
              <Flex>
                <Heading size="md">{CONTENT.title}</Heading>
                <Tooltip
                    hasArrow
                    label={CONTENT.titletooltip}
                    placement="top-start"
                    fontSize="md">
                    <InfoOutlineIcon w={3.5} h={3.5} ml="1" mt="1"/>
                  </Tooltip>  
                </Flex>
                <Input
                  placeholder="My title"
                  value={values.title}
                  onChange={e => handleValuesChange('title', e)}
                />
              </Box>
              <Box py={2}>
                <Flex>
                  <Heading size="md">{CONTENT.slug}</Heading>
                  <Tooltip
                      hasArrow
                      label={CONTENT.slugtooltip}
                      placement="top-start"
                      fontSize="md">
                      <InfoOutlineIcon w={3.5} h={3.5} ml="1" mt="1"/>
                    </Tooltip>  
                </Flex>
                <Input
                  placeholder="My slug"
                  value={values.slug}
                  onChange={e => handleValuesChange('slug', e)}
                />
              </Box>
              <Box py={2}>
                <Flex>
                <Heading size="md">{CONTENT.description}</Heading>
                <Tooltip
                    hasArrow
                    label={CONTENT.descriptiontooltip}
                    placement="top-start"
                    fontSize="md">
                    <InfoOutlineIcon w={3.5} h={3.5} ml="1" mt="1"/>
                  </Tooltip>  
                </Flex>
                <Textarea
                  placeholder="Description"
                  maxH="sm"
                  value={values.description}
                  onChange={e => handleValuesChange('description', e)}
                />
              </Box>
            </Box>
            <Box>
              <Image
                h="sm"
                src={values.image}
                alt="A page content image"
                fallbackSrc="https://via.placeholder.com/150"
              />
            </Box>
          </Flex>
        </Stack>
      </Stack>
    </>
  )
}

export default PageContent
