import Image from 'next/image'

import * as Line from '@/components/shared/Line'

import {
  Background,
  CarouselLeft,
  CarouselRight,
  Colors,
  Content,
  ContentWrapperLeft,
  ContentWrapperRight,
  ShapeColors,
  Text,
  Title,
} from './style'

type GaleryProps = {
  title: string
  text: string
  shape: ShapeColors
  background: Colors
  reverse?: boolean
  image: string | StaticImageData
  imageAlt: string
  decorator: Line.Colors
}

const Galery = ({
  title,
  text,
  background,
  shape,
  reverse = false,
  image,
  imageAlt,
  decorator,
}: GaleryProps) => (
  <Background reverse={reverse} color={background}>
    {!reverse ? (
      <>
        <ContentWrapperLeft color={shape}>
          <div>
            <Line.default small color={decorator} />
          </div>
          <Content>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </Content>
        </ContentWrapperLeft>

        <CarouselRight>
          <Image src={image} alt={imageAlt} layout="responsive" priority />
        </CarouselRight>
      </>
    ) : (
      <>
        <ContentWrapperRight color={shape}>
          <div>
            <Line.default small color={decorator} />
          </div>
          <Content>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </Content>
        </ContentWrapperRight>

        <CarouselLeft>
          <Image src={image} alt={imageAlt} layout="responsive" priority />
        </CarouselLeft>
      </>
    )}
  </Background>
)

export default Galery
