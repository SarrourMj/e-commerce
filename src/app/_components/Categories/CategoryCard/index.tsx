'use client'
import React from 'react'
import Link from 'next/link'

import { Category, Media } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'

import classes from './index.module.scss'

type CategoryCardProps = {
  category: Category
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const media = category.media as Media | null
  const { setCategoryFilters } = useFilter()

  return (
    <Link
      href="/products"
      className={classes.card}
<<<<<<< HEAD
      style={{backgroundImage: media ? `url(${media.url})` : 'none'}}
=======
      style={{ backgroundImage: media ? `url(${media.url})` : 'none' }}
>>>>>>> a42333d23d35a2d0233084424628c7546f2b0a75
      onClick={() => setCategoryFilters([category.id])}
    >
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}

export default CategoryCard