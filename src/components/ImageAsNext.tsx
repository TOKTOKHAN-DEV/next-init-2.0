import { ForwardRefRenderFunction, forwardRef, memo } from 'react';

import NextImage from 'next/image';

import {
  Box,
  ChakraProps,
  Skeleton,
  useControllableState,
} from '@chakra-ui/react';

import { PropsOf } from '@/types/module/react/props-of';

interface ImageAsNextProps
  extends Omit<ChakraProps, 'fill'>,
    Pick<
      PropsOf<typeof NextImage>,
      | 'src'
      | 'alt'
      | 'loader'
      | 'fill'
      | 'quality'
      | 'priority'
      | 'loading'
      | 'placeholder'
      | 'blurDataURL'
      | 'unoptimized'
      | 'onLoadingComplete'
      | 'onError'
    > {
  isDisabledSkeleton?: boolean;
  isLoading?: boolean;
}

/**
 *
 * fill prop 으로 반응형에 대응이 가능합니다. fill 속성을 쓸 경우엔 부모에 position:related 이어야 합니다.
 * ImageASNext 에선 related 부모가 함께 포함되어 있습니다.
 * @see https://nextjs.org/docs/api-reference/next/image#fill
 *
 * ImageASNext 에선 기본적으로 로딩 처리를 Skeleton 으로 하고 있습니다.
 * Skeleton 을 표시하고 싶지 않다면, isDisabledSkeleton 를 사용해 주세요
 * 로딩 여부는 isLoading 으로 제어가 가능합니다. 기본적으론, 이미지 load 에 대응합니다.
 * @props isDisabledSkeleton
 *
 * 외부 Remote 이미지는 도메인 등록이 필요합니다. next.config.js 에 등록해 주세요
 * @see https://nextjs.org/docs/api-reference/next/image#domains
 *
 * 4:3 같은 이미지 비율을 지정하고 싶다면 Aspect Ratio 를 사용해 주세요
 * @see https://chakra-ui.com/docs/components/aspect-ratio/usage
 *
 */
const ImageAsNext: ForwardRefRenderFunction<
  HTMLImageElement,
  ImageAsNextProps
> = (
  {
    src, // used next/images props
    alt,
    fill = true,
    loader,
    quality,
    priority,
    loading,
    placeholder,
    blurDataURL,
    unoptimized,
    onLoadingComplete,
    onError,

    isLoading, // custom props
    isDisabledSkeleton,

    ...props // chakra props
  },
  ref,
) => {
  const [_isLoading, setIsLoading] = useControllableState({
    value: isLoading,
    defaultValue: true,
  });

  const isShowSkelton = !isDisabledSkeleton && _isLoading;

  return (
    <Box position="relative" overflow="hidden" objectFit="contain" {...props}>
      <Skeleton
        w="100%"
        h="100%"
        position="relative"
        objectFit="inherit"
        objectPosition="inherit"
        isLoaded={!isShowSkelton}
      >
        <NextImage
          ref={ref}
          src={src}
          alt={alt}
          fill={fill}
          loader={loader}
          quality={quality}
          priority={priority}
          loading={loading}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          unoptimized={unoptimized}
          onLoadingComplete={(t) => {
            setIsLoading(false);
            onLoadingComplete?.(t);
          }}
          onError={(t) => {
            setIsLoading(false);
            onError?.(t);
          }}
          style={{
            objectFit: 'inherit',
            objectPosition: 'inherit',
          }}
        />
      </Skeleton>
    </Box>
  );
};

export default memo(forwardRef(ImageAsNext));
