import React, { useState } from 'react'
import Link from 'next/link'
import { Header as HeaderType } from "../../../../payload/payload-types"
import { useAuth } from '../../../_providers/Auth'
import { Button } from '../../Button'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  return (
    <nav className={classes.nav}>
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })}

      {user && <Link href="/account">Account</Link>}

     
        <div
          className={classes.dropdown}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link href="/#" className={classes.dropdownToggle}>
            About Us
          </Link>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                className={classes.dropdownMenu}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                
                <Link href="/OurProfile" className={classes.dropdownItem}>
                  Our Profile <ChevronRight size={16} />
                </Link>
                <Link href="/AboutUs" className={classes.dropdownItem}>
                  IFBB <ChevronRight size={16} />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
 
 <Link href="/ContactUs">Contact Us</Link>

      {!user && (
        <Button
          el="link"
          href="/login"
          label="Login"
          appearance="primary"
          onClick={() => window.location.href = '/login'}
        />
      )}
    </nav>
  )
}
