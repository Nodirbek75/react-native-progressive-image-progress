import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Animated,
  ImageStyle,
  ImageProps,
} from 'react-native'

type Props = {
  placeholderImg?: ImageProps
  thumbnailImg?: string
  originalImg?: string
  style?: ImageStyle
  width?: number
  height?: number
}

export const ProgressiveImage = ({
  placeholderImg,
  thumbnailImg,
  originalImg,
  style,
  width,
  height,
}: Props) => {
  const [imageAnimated, setImageAnimated] = useState(new Animated.Value(0))
  const [thumbnailAnimated, setThumbnailAnimated] = useState(
    new Animated.Value(0)
  )

  const onThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }

  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }

  return (
    <View style={{ width, height }}>
      {placeholderImg && <Image style={styles.image} source={placeholderImg} />}
      {thumbnailImg && (
        <Animated.Image
          source={{ uri: thumbnailImg }}
          style={[styles.image, style, { opacity: thumbnailAnimated }]}
          onLoad={onThumbnailLoad}
        />
      )}
      {originalImg && (
        <Animated.Image
          source={{ uri: originalImg }}
          style={[styles.image, style, { opacity: imageAnimated }]}
          onLoad={onImageLoad}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
})
