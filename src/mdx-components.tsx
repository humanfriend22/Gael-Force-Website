import type { MDXComponents } from 'mdx/types'
import { Button } from '@/components/Button'
import Image, { ImageProps } from 'next/image'


export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Button: () => <Button href="/"> </Button>,
    Image: (props) => (
      <Image
        width={800}
        height={600}
        className="mb-5 sm:mb-6"
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}