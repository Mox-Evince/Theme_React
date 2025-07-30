declare module '@components/avatar' {
  interface AvatarProps {
    img?: string
    imgHeight?: string | number
    imgWidth?: string | number
    className?: string
    color?: string
    id?: string
    size?: string | number
  }

  const Avatar: React.FC<AvatarProps>
  export default Avatar
}

declare module '@components/breadcrumbs' {
  interface BreadcrumbItem {
    title: string
    link?: string
  }

  interface BreadcrumbsProps {
    title: string
    data: BreadcrumbItem[]
    className?: string
  }

  const Breadcrumbs: React.FC<BreadcrumbsProps>
  export default Breadcrumbs
}

declare module '@components/ui-loader' {
  interface UILoaderProps {
    children: React.ReactNode
    blocking?: boolean
    loader?: React.ReactNode
    className?: string
    overlayColor?: string
  }

  const UILoader: React.FC<UILoaderProps>
  export default UILoader
}
