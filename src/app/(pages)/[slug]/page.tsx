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




import classes from './index.module.scss'


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
    console.log('Fetched page:', JSON.stringify(page, null, 2))
    console.log('Fetched categories:', JSON.stringify(categories, null, 2))
  } catch (error) {
    console.error('Error fetching page or categories:', error)
  }


 
  if (!page && slug === 'home') {
    page = staticHome
    console.log('Using static home page')

  }


  if (!page) {
    console.log(`Page not found for slug: ${slug}`)
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
               backgroundImage={hero?.backgroundImage || '/public/default-bg.jpg'}
               title={hero?.title || 'Default Title'}
              subtitle={hero?.subtitle || 'Default Subtitle'}
          />
            <Categories categories={categories} />
         
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
    console.log('Generating static params for pages:', pages)

    return pages?.map(({ slug }) => slug) || []
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
    console.error('Error fetching metadata:', error)

  }


  if (!page && slug === 'home') {
    page = staticHome
  }




return generateMeta({ doc: page })
}