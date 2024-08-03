import type { MDXComponents } from 'mdx/types'
import { Button } from '@/components/Button'


export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Button: () => <Button href="/"> </Button>,
    ...components,
  }
}