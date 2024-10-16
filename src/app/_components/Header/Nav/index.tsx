'use client'

import React from 'react'
import Link from 'next/link'
import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { Button } from '../../Button'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'
import { AnimatePresence } from 'framer-motion' // Import AnimatePresence
import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
<<<<<<< HEAD

    <AnimatePresence> 
      <nav
        className={[
          classes.nav,
          user === undefined && classes.hide,
        ]
          .filter(Boolean)  
          .join(' ')}
      >
        {navItems.map(({ link }, i) => (
          <CMSLink key={i} {...link} appearance="none" />
        ))}
        <CartLink />
        {user ? (
          <Link href="/account">Account</Link>
        ) : (
         <Button
              el="link"
              href="/login"
              label="Login"
              appearance="primary"
              onClick={() => (window.location.href = '/login')} />
        )}
      </nav>
    </AnimatePresence>
=======
    <nav
      className={[
        classes.nav,
        user === undefined && classes.hide,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })}
      <CartLink />
      {user && <Link href="/account">Account</Link>}
      {!user && (
        <Button
          el="link"
          href="/login"
          label="Login"
          appearance="primary"
          onClick={() => (window.location.href = '/login')}
        />
      )}
    </nav>
>>>>>>> a42333d23d35a2d0233084424628c7546f2b0a75
  )
}
