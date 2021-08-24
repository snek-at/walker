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
  VStack
} from '@chakra-ui/react'
import {ChangeEvent, useEffect, useState} from 'react'
import translations from './translations.json'

type Values = {
  title: string
  description: string
  siteUrl: string
  image: string
  author: {
    name: string
  }
  organization: {
    name: string
    url: string
    logo: string
  }
  social: {
    twitter: string // twitter username
    fbAppID: string // FB ANALYTICS
    google: string // GOOGLE ANALYTICS
  }
  lastPublished: string
}

export type SiteSettingsType = {
  values?: Values
  onValuesChange: (newValues: Values) => void
}

const SiteSettings: React.FC<SiteSettingsType> = props => {
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
            <Heading size="lg">Site</Heading>
          </Box>
          <Spacer />
          <Box>
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
                <Heading size="md">Title</Heading>
                <Input
                  placeholder="My title"
                  value={values.title}
                  onChange={e => handleValuesChange('title', e)}
                />
              </Box>
              <Box py={2}>
                <Heading size="md">siteUrl</Heading>
                <Input
                  placeholder="My slug"
                  value={values.siteUrl}
                  onChange={e => handleValuesChange('siteUrl', e)}
                />
              </Box>
              <Box py={2}>
                <Heading size="md">Description</Heading>
                <Textarea
                  placeholder="Description"
                  maxH="sm"
                  value={values.description}
                  onChange={e => handleValuesChange('description', e)}
                />
              </Box>
              <Box py={2}>
                <Heading size="md">Author</Heading>
                <Box p={2}>
                  <Heading size="sm">Name</Heading>
                  <Input
                    placeholder="Description"
                    value={values.author.name}
                    onChange={e => handleValuesChange('description', e)}
                  />
                </Box>
              </Box>
              <Box py={2}>
                <Heading size="md">Organization</Heading>
                <Box p={2}>
                  <Heading size="sm">Name</Heading>
                  <Input
                    placeholder="Description"
                    value={values.organization.name}
                    onChange={e => handleValuesChange('description', e)}
                  />
                </Box>
                <Box p={2}>
                  <Heading size="sm">URL</Heading>
                  <Input
                    placeholder="Description"
                    value={values.organization.url}
                    onChange={e => handleValuesChange('description', e)}
                  />
                </Box>
                <Box p={2}>
                  <Heading size="sm">Logo</Heading>
                  <Input
                    placeholder="Description"
                    value={values.organization.logo}
                    onChange={e => handleValuesChange('description', e)}
                  />
                </Box>
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

export default SiteSettings
