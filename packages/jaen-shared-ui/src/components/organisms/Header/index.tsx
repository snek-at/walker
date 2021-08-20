// import {
//   SearchIcon,
//   QuestionIcon
// } from '@chakra-ui/icons'
// import {
//   Button,
//   Input,
//   Text,
//   InputGroup,
//   InputLeftElement,
//   IconButton,
//   HStack,
//   useColorMode,
// } from '@chakra-ui/react'
// import {FaGithub} from '@react-icons/all-files/fa/FaGithub'
// import {
//   SnekIcon
// } from '../icons'
// import {
//   Animation,
//   dmToggleIconLottie,
// } from '../icons/lottie'

// const MainHeader:React.FC = () => {
//   const {colorMode, toggleColorMode} = useColorMode()

//   return (
//     <>
//       <HStack>
//         <Button
//           minW="4xs"
//           variant="ghost"
//           leftIcon={<SnekIcon w={35} h={35} />}
//           onClick={() => window.open('https://snek.at', 'blank')}>
//           <Text>snek - Jaen</Text>
//         </Button>

//         <InputGroup maxW={'5xl'}>
//           <InputLeftElement
//             pointerEvents="none"
//             children={<SearchIcon color="gray.300" />}
//           />
//           <Input type="tel" placeholder="Search" />
//         </InputGroup>
//         <IconButton
//           variant="ghost"
//           aria-label="adad"
//           icon={<FaGithub />}
//         />
//         <IconButton
//           variant="ghost"
//           aria-label="adad"
//           icon={<QuestionIcon />}
//         />
//         <Animation lottie={dmToggleIconLottie} supportColorMode={false}>
//           {({container, animation}) => (
//             <IconButton
//               variant="ghost"
//               aria-label="adad"
//               icon={container}
//               onClick={() => {
//                 toggleColorMode()

//                 colorMode === 'dark'
//                   ? animation.playSegments([20, 114], true)
//                   : animation.playSegments([144, 228], true)
//               }}
//             />
//           )}
//         </Animation>
//       </HStack>
//     </>
//   )
// }

// export default MainHeader