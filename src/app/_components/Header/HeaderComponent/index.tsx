'use client'


import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


import { Header } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'


import classes from './index.module.scss'


const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()
  if (!header)
    {
      return null;
    }
  return (
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >


      <Gutter className={classes.wrap}>


        <Link href="/">
          <Image className="logo" src="/logo.png" alt="logo" width={100} height={50} priority   style={{ height: 'auto' }}
 />
        </Link>


        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}


export default HeaderComponent
