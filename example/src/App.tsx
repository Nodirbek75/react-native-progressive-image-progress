import React, { useEffect } from 'react'
import { ProgressiveImage } from 'react-native-progressive-image-progress'

const App = () => {
  useEffect(() => {
    console.log('')
  })

  return (
    <ProgressiveImage
      width={400}
      height={400}
      thumbnailImg={
        'https://dzxhpu8m5g50h.cloudfront.net/chatroom/image-WVcpe5otbye1GWhYC4NJoDufj534Jx0F.thumb.jpg'
      }
      originalImg={
        'https://dzxhpu8m5g50h.cloudfront.net/chatroom/image-WVcpe5otbye1GWhYC4NJoDufj534Jx0F.jpg'
      }
    />
  )
}

export default App
