import React from 'react'
import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

type ContentBlockType = Extract<Page['layout'][0], { blockType: 'content' }>

export const ContentBlock: React.FC<ContentBlockType & { id?: string }> = (props) => {
  const { columns } = props

  return (
    <Gutter className={classes.content}>
      <div className={classes.grid}>
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            if ('enableLink' in col) {
              const { enableLink, richText, link, size } = col
              return (
                <div key={index} className={[classes.column, classes[`column--${size}`]].join(' ')}>
                  <RichText content={richText} />
                  {enableLink && link && <CMSLink {...link} />}
                </div>
              )
            }
            return null
          })}
      </div>
    </Gutter>
  )
}