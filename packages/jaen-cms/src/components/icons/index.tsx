/**
 * @license
 *
 * SPDX-FileCopyrightText: Copyright © 2021 snek.at
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
import {useColorModeValue} from '@chakra-ui/color-mode'
import {Icon, IconProps} from '@chakra-ui/react'
import lottie, {AnimationItem} from 'lottie-web'
import * as React from 'react'
import {useRef} from 'react'
import {useEffect} from 'react'
import {useState} from 'react'

import SnekSvgDarkMode from '../../common/assets/snek-logo-dm.svg'
import SnekSvg from '../../common/assets/snek-logo.svg'

const LottieAnimation: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    animationData: string
    animationDataDarkMode?: string
    initialSegment?: [number, number]
    initialSegmentDarkMode?: [number, number]
    animationOptions: AnimationItem
  }
> = props => {
  const {
    animationData,
    animationDataDarkMode,
    initialSegment,
    initialSegmentDarkMode,
    ...rest
  } = props
  const divRef = useRef<HTMLDivElement | null>(null)
  const animationDataColorMode = useColorModeValue(
    animationData,
    animationDataDarkMode
  )
  const initialSegmentColorMode = useColorModeValue(
    initialSegment,
    initialSegmentDarkMode
  )

  const [animation, setAnimation] = useState<AnimationItem | null>(null)

  useEffect(() => {
    if (animation) {
      animation.destroy()
    }

    if (divRef.current) {
      const anim = lottie.loadAnimation({
        autoplay: false,
        container: divRef.current,
        animationData: animationDataColorMode,
        initialSegment: initialSegmentColorMode
      })

      setAnimation(anim)
    }
  }, [animationDataColorMode, initialSegmentDarkMode])

  return <div ref={divRef} {...rest} />
}

export const SnekIcon: React.FC<IconProps> = props => (
  <Icon
    as={useColorModeValue(SnekSvg, SnekSvgDarkMode)}
    w={75}
    h={75}
    {...props}
  />
)

// export const HelpIcon: React.FC<IconProps> = props => (
//   <LottieAnimation
//     animationData={require('../../common/assets/lottie/475-rescue-safety-ring-help-outline.json')}
//     animationDataDarkMode={require('../../common/assets/lottie/475-rescue-safety-ring-help-outline-dm.json')}
//     style={{width: 24, height: 24}}
//   />
// )
// export const BrightnessIcon: React.FC<IconProps> = props => (
//   <LottieAnimation
//     animationData={require('../../common/assets/lottie/1439-brightness-outline.json')}
//     animationDataDarkMode={require('../../common/assets/lottie/1439-brightness-outline-dm.json')}
//     initialSegment={[51.5, 200]}
//     initialSegmentDarkMode={[5.5, 200]}
//     style={{width: 24, height: 24}}
//   />
// )
// export const EditIcon: React.FC<IconProps> = props => (
//   <LottieAnimation
//     animationData={require('../../common/assets/lottie/245-edit-document-outline.json')}
//     animationDataDarkMode={require('../../common/assets/lottie/245-edit-document-outline-dm.json')}
//     style={{width: 30, height: 30}}
//   />
// )
// export const DiscardIcon: React.FC<IconProps> = props => (
//   <LottieAnimation
//     animationData={require('../../common/assets/lottie/185-trash-bin-outline.json')}
//     animationDataDarkMode={require('../../common/assets/lottie/185-trash-bin-outline-dm.json')}
//     style={{width: 30, height: 30}}
//   />
// )

// export const SaveIcon: React.FC<IconProps> = props => (
//   <LottieAnimation
//     animationData={require('../../common/assets/lottie/1312-micro-sd-card-outline.json')}
//     animationDataDarkMode={require('../../common/assets/lottie/1312-micro-sd-card-outline-dm.json')}
//     style={{width: 30, height: 30}}
//   />
// )

// export const RocketIcon: React.FC<IconProps> = props => (
//   <LottieAnimation
//     animationData={require('../../common/assets/lottie/489-rocket-space-outline.json')}
//     animationDataDarkMode={require('../../common/assets/lottie/489-rocket-space-outline-dm.json')}
//     style={{width: 30, height: 30}}
//   />
// )

// export const WorkspacesIcon: React.FC<IconProps> = props => (
//   <LottieAnimation
//     animationData={require('../../common/assets/lottie/112-book-morph-outline.json')}
//     animationDataDarkMode={require('../../common/assets/lottie/112-book-morph-outline-dm.json')}
//     style={{width: 30, height: 30}}
//   />
// )

// export const AddIcon: React.FC<IconProps> = props => (
//   <LottieAnimation
//     animationData={require('../../common/assets/lottie/49-plus-circle-outline.json')}
//     animationDataDarkMode={require('../../common/assets/lottie/49-plus-circle-outline-dm.json')}
//     style={{width: 24, height: 24}}
//   />
// )

// export const MergeIcon: React.FC<IconProps> = props => (
//   <LottieAnimation
//     animationData={require('../../common/assets/lottie/1325-code-fork-outline.json')}
//     animationDataDarkMode={require('../../common/assets/lottie/1325-code-fork-outline-dm.json')}
//     style={{width: 24, height: 24}}
//   />
// )

// export const FolderIcon: React.FC<IconProps> = props => (
//   <LottieAnimation
//     animationData={require('../../common/assets/lottie/120-folder-open-morph-outline.json')}
//     animationDataDarkMode={require('../../common/assets/lottie/120-folder-open-morph-outline-dm.json')}
//     style={{width: 22, height: 22}}
//   />
// )
// export const DocumentIcon: React.FC<IconProps> = props => (
//   <LottieAnimation
//     animationData={require('../../common/assets/lottie/56-document-outline.json')}
//     animationDataDarkMode={require('../../common/assets/lottie/56-document-outline-dm.json')}
//     style={{width: 22, height: 22}}
//   />
// )
// export const DocumentsIcon: React.FC<IconProps> = props => (
//   <LottieAnimation
//     animationData={require('../../common/assets/lottie/60-documents-outline.json')}
//     animationDataDarkMode={require('../../common/assets/lottie/60-documents-outline-dm.json')}
//     style={{width: 24, height: 24}}
//   />
// )
