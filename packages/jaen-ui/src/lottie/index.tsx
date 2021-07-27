import {useColorMode} from '@chakra-ui/react'
import React, {useRef} from 'react'
import {useState} from 'react'
import {useEffect} from 'react'

import {createLottie, LottieAnimationCreator} from '../common/lottie'

type LottieFn = (container: HTMLElement, lightMode?: boolean) => LottieFnResult
type LottieFnResult = {
  creator: LottieAnimationCreator
  containerProps?: React.HTMLAttributes<HTMLDivElement>
}

type AnimationState = LottieAnimationCreator & {
  container: JSX.Element
}

type AnimationProps = {
  lottie: LottieFn
  children: (state: AnimationState) => JSX.Element
  supportColorMode?: boolean
}

export const Animation: React.FC<AnimationProps> = ({
  children,
  lottie,
  supportColorMode
}) => {
  const divRef = useRef<HTMLDivElement | null>(null)

  const [lottieResult, setLottieResult] = useState<LottieFnResult | null>(null)

  const {colorMode} = useColorMode()

  useEffect(
    () => {
      if (lottieResult?.creator) {
        lottieResult?.creator.animation.destroy()
      }

      if (divRef.current) {
        setLottieResult(lottie(divRef.current, colorMode === 'light'))
      }
    },
    supportColorMode === undefined || supportColorMode === true
      ? [colorMode]
      : []
  )

  console.log('rerender')

  return children({
    container: <div ref={divRef} {...lottieResult?.containerProps}></div>,
    animation: lottieResult?.creator?.animation as any
  })
}

export const dmToggleIconLottie: LottieFn = (container, lightMode = true) => {
  let creator: LottieFnResult['creator']
  const containerProps: LottieFnResult['containerProps'] = {
    style: {width: 24}
  }

  creator = createLottie({
    container,
    animationData: require(`../common/assets/lottie/dm-toggle.json`),
    loop: false
  })

  // Set some default animation values
  creator.animation.setSpeed(3)

  return {creator, containerProps}
}

export const editIconLottie: LottieFn = (container, lightMode = true) => {
  let creator: LottieFnResult['creator']
  const containerProps: LottieFnResult['containerProps'] = {
    style: {width: 24}
  }

  creator = createLottie({
    container,
    animationData: lightMode
      ? require(`../common/assets/lottie/245-edit-document-outline.json`)
      : require(`../common/assets/lottie/245-edit-document-outline-dm.json`),
    loop: false
  })

  return {creator, containerProps}
}

export const discardIconLottie: LottieFn = (container, lightMode = true) => {
  let creator: LottieFnResult['creator']
  const containerProps: LottieFnResult['containerProps'] = {
    style: {width: 24}
  }

  creator = createLottie({
    container,
    animationData: lightMode
      ? require(`../common/assets/lottie/185-trash-bin-outline.json`)
      : require(`../common/assets/lottie/185-trash-bin-outline-dm.json`),
    loop: false
  })

  return {creator, containerProps}
}

export const saveIconLottie: LottieFn = (container, lightMode = true) => {
  let creator: LottieFnResult['creator']
  const containerProps: LottieFnResult['containerProps'] = {
    style: {width: 24}
  }

  creator = createLottie({
    container,
    animationData: lightMode
      ? require(`../common/assets/lottie/1312-micro-sd-card-outline.json`)
      : require(`../common/assets/lottie/1312-micro-sd-card-outline-dm.json`),
    loop: false
  })

  return {creator, containerProps}
}

export const publishIconLottie: LottieFn = (container, lightMode = true) => {
  let creator: LottieFnResult['creator']
  const containerProps: LottieFnResult['containerProps'] = {
    style: {width: 24}
  }

  creator = createLottie({
    container,
    animationData: lightMode
      ? require(`../common/assets/lottie/489-rocket-space-outline.json`)
      : require(`../common/assets/lottie/489-rocket-space-outline-dm.json`),
    loop: false
  })

  return {creator, containerProps}
}

export const workspacesIconLottie: LottieFn = (container, lightMode = true) => {
  let creator: LottieFnResult['creator']
  const containerProps: LottieFnResult['containerProps'] = {
    style: {width: 24}
  }

  creator = createLottie({
    container,
    animationData: lightMode
      ? require(`../common/assets/lottie/112-book-morph-outline.json`)
      : require(`../common/assets/lottie/112-book-morph-outline-dm.json`),
    loop: false
  })

  return {creator, containerProps}
}

export const addIconLottie: LottieFn = (container, lightMode = true) => {
  let creator: LottieFnResult['creator']
  const containerProps: LottieFnResult['containerProps'] = {
    style: {width: 24}
  }

  creator = createLottie({
    container,
    animationData: lightMode
      ? require(`../common/assets/lottie/49-plus-circle-outline.json`)
      : require(`../common/assets/lottie/49-plus-circle-outline-dm.json`),
    loop: false
  })

  return {creator, containerProps}
}

export const mergeIconLottie: LottieFn = (container, lightMode = true) => {
  let creator: LottieFnResult['creator']
  const containerProps: LottieFnResult['containerProps'] = {
    style: {width: 24}
  }

  creator = createLottie({
    container,
    animationData: lightMode
      ? require(`../common/assets/lottie/1325-code-fork-outline.json`)
      : require(`../common/assets/lottie/1325-code-fork-outline-dm.json`),
    loop: false
  })

  return {creator, containerProps}
}

export const folderClosedIconLottie: LottieFn = (
  container,
  lightMode = true
) => {
  let creator: LottieFnResult['creator']
  const containerProps: LottieFnResult['containerProps'] = {
    style: {width: 24}
  }

  creator = createLottie({
    container,
    animationData: lightMode
      ? require(`../common/assets/lottie/133-folder-close-arrow-down-morph-outline.json`)
      : require(`../common/assets/lottie/133-folder-close-arrow-down-morph-outline-dm.json`),
    loop: false
  })

  return {creator, containerProps}
}

export const folderOpenedIconLottie: LottieFn = (
  container,
  lightMode = true
) => {
  let creator: LottieFnResult['creator']
  const containerProps: LottieFnResult['containerProps'] = {
    style: {width: 24}
  }

  creator = createLottie({
    container,
    animationData: lightMode
      ? require(`../common/assets/lottie/131-folder-open-arrow-up-morph-outline.json`)
      : require(`../common/assets/lottie/131-folder-open-arrow-up-morph-outline-dm.json`),
    loop: false
  })

  return {creator, containerProps}
}

export const documentIconLottie: LottieFn = (container, lightMode = true) => {
  let creator: LottieFnResult['creator']
  const containerProps: LottieFnResult['containerProps'] = {
    style: {width: 24}
  }

  creator = createLottie({
    container,
    animationData: lightMode
      ? require(`../common/assets/lottie/56-document-outline.json`)
      : require(`../common/assets/lottie/56-document-outline-dm.json`),
    loop: false
  })

  return {creator, containerProps}
}

export const documentsIconLottie: LottieFn = (container, lightMode = true) => {
  let creator: LottieFnResult['creator']
  const containerProps: LottieFnResult['containerProps'] = {
    style: {width: 24}
  }

  creator = createLottie({
    container,
    animationData: lightMode
      ? require(`../common/assets/lottie/60-documents-outline.json`)
      : require(`../common/assets/lottie/60-documents-outline-dm.json`),
    loop: false
  })

  return {creator, containerProps}
}
