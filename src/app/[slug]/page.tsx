import { use } from 'react'

export default function Slug({ params }: { params: { slug: string } }) {
  // @ts-expect-error 这里不考虑类型问题
  const { slug } = use<{ slug: string }>(params);
  return <>{slug}</>
}
