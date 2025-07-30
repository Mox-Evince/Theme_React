declare module '@core/components/avatar' {
  import { FC } from 'react'

  export interface AvatarProps {
    img?: string
    imgHeight?: string | number
    imgWidth?: string | number
    className?: string
    color?: string
    id?: string
    size?: string | number
  }

  const Avatar: FC<AvatarProps>
  export default Avatar
}

declare module '@core/components/breadcrumbs' {
  import { FC } from 'react'

  export interface BreadcrumbItem {
    title: string
    link?: string
  }

  export interface BreadcrumbsProps {
    title: string
    data: BreadcrumbItem[]
    className?: string
  }

  const Breadcrumbs: FC<BreadcrumbsProps>
  export default Breadcrumbs
}

declare module '@core/components/ui-loader' {
  import { FC, ReactNode } from 'react'

  export interface UILoaderProps {
    children: ReactNode
    blocking?: boolean
    loader?: ReactNode
    className?: string
    overlayColor?: string
  }

  const UILoader: FC<UILoaderProps>
  export default UILoader
}
