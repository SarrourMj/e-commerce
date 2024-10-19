import React from 'react'
import { draftMode } from 'next/headers'

import { Category, Page } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { Blocks } from '../../_components/Blocks'
import { Gutter } from '../../_components/Gutter'
import { HR } from '../../_components/HR'
import Filters from './Filters'

import classes from './index.module.scss'

const Products = async () => {
  console.log('Products component is rendering')  // Add this line

  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null
  let categories: Category[] | null = null

  try {
    console.log('Fetching page data')  // Add this line

    page = await fetchDoc<Page>({
      collection: 'pages',
      slug: 'products',
      draft: isDraftMode,
    })
    console.log('Fetched page:', page)  // Add this line
    console.log('Fetching categories')  // Add this line
    categories = await fetchDocs<Category>('categories')
  } catch (error) {
    console.error('Error fetching data:', error)  // Change this line
  }
  if (!page) {
    console.log('Products component is rendering')
    return <div>Error loading page content</div>
  }

  if (!categories) {
    return <div>Error loading categories</div>
  }
  return (
    <div className={classes.container}>
      <Gutter className={classes.products}>
        <Filters categories={categories} />
        <Blocks blocks={page?.layout} disableTopPadding={true} />
      </Gutter>
      <HR />
    </div>
  )
}

export default Products