export const toSlug = (path: string): string => {
  const pathParts = path.split('/')
  const slug = pathParts[pathParts.length - 1]
  return slug
}

export const toPath = (parentPath: string, slug: string): string => {
  const path = `${parentPath}/${slug}`
  return path
}

export const toParentPath = (path: string): string => {
  const parentPath = path.substring(0, path.lastIndexOf('/'))

  return parentPath
}
