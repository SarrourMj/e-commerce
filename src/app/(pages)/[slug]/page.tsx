import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { Category, Page as P } from '../../../payload/payload-types'
import { staticHome } from '../../../payload/seed/home-static'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { Blocks } from '../../_components/Blocks'
import { Gutter } from '../../_components/Gutter'
import { Hero } from '../../_components/Hero'
import { generateMeta } from '../../_utilities/generateMeta'

export const dynamic = 'force-dynamic'
import DynamicSlider from '../../_components/DySlider/page'
import Categories from '../../_components/Categories'
import Promotion from '../../_components/Promotion'

import classes from './index.module.scss'
import Categorie  from '../../../payload/collections/Categories'

export default async function Page({ params: { slug = 'home' } }) {
  const { isEnabled: isDraftMode } = draftMode()

  let page: P | null = null
  let categories: Category[] | null = null

  try {
    page = await fetchDoc<P>({
      collection: 'pages',
      slug,
      draft: isDraftMode,
    })

    categories = await fetchDocs<Category>('categories')
  } catch (error) {
   
  }

  
  if (!page && slug === 'home') {
    page = staticHome
  }

  if (!page) {
    return notFound()
  }

  const { hero, layout } = page

  return (
    <React.Fragment>
      {slug === 'home' ? (
        <section>
          <Hero {...hero} />

          <Gutter className={classes.home}>
          <DynamicSlider 
               backgroundImage={hero?.backgroundImage || '/default-bg.jpg'} 
               title={hero?.title || 'Default Title'} 
              subtitle={hero?.subtitle || 'Default Subtitle'} 
          />
            <Categories categories={categories} />
            <Promotion />
          </Gutter>
          <Blocks blocks={layout} disableTopPadding={!hero || hero?.type === 'none' || hero?.type === 'lowImpact'} />

        </section>
      ) : (
        <>
          <Hero {...hero} />
          <Blocks
            blocks={layout}
            disableTopPadding={!hero || hero?.type === 'none' || hero?.type === 'lowImpact'}
          />
        </>
      )}
    </React.Fragment>
  )
}

export async function generateStaticParams() {
  try {
    const pages = await fetchDocs<P>('pages')
    return pages?.map(({ slug }) => slug)
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug = 'home' } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let page: P | null = null

  try {
    page = await fetchDoc<P>({
      collection: 'pages',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {
    // don't throw an error if the fetch fails
    // this is so that we can render a static home page for the demo
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // in production you may want to redirect to a 404  page or at least log the error somewhere
  }

  if (!page && slug === 'home') {
    page = staticHome
  }


return generateMeta({ doc: page }) 
}