import React, { Fragment } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '../../_components/Button';
import { Gutter } from '../../_components/Gutter';
import { HR } from '../../_components/HR';
import { RenderParams } from '../../_components/RenderParams';
import { LowImpactHero } from '../../_heros/LowImpact';
import { getMeUser } from '../../_utilities/getMeUser';
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph';
import AccountForm from './AccountForm';

import classes from './index.module.scss';
import { HighImpactHero } from '../../_heros/HighImpact';

export default async function Account() {
  const { user } = await getMeUser({
    nullUserRedirect: `/login?error=${encodeURIComponent(
      'You must be logged in to access your account.'
    )}&redirect=${encodeURIComponent('/account')}`,
  });

  return (
    <Fragment>
      {/* Hero Section */}
      <LowImpactHero
        type="lowImpact"
        media={null}
        richText={[
          {
            type: 'h1',
            children: [{ text: 'Account' }],
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'This is your account dashboard. Here you can update your account information, view your purchased products, and browse your order history. To manage all users, ',
              },
              {
                type: 'link',
                url: '/admin/collections/users',
                children: [{ text: 'login to the admin dashboard.' }],
                subtitle: "Manage your account",
                title: "Account Dashboard",
              },
            ],
          },
        ]} subtitle={''} title={''} backgroundImage={''}      />

      {/* Account Form Section */}
      <Gutter className={classes.account}>
        <AccountForm />
        <HR />

        {/* Purchased Products Section */}
        <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
          <div className="wrapper flex items-center justify-center sm:justify-between">
            <h3 className="h3-bold text-center sm:text-left">Purchased Products</h3>
            <Button asChild size="lg" className="button hidden sm:flex">
              <Link href="/products">Explore More Products </Link>
            </Button>
          </div>
        </section>

        <section className="wrapper my-8">
          {user?.purchases?.length ? (
            <ul className={classes.purchases}>
              {user.purchases.map((purchase, index) => (
                <li key={index} className={classes.purchase}>
                  {typeof purchase === 'string' ? (
                    <p>{purchase}</p>
                  ) : (
                    <h4>
                      <Link href={`/products/${purchase.slug}`}>{purchase.title}</Link>
                    </h4>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div className={classes.noPurchases}>You have no purchases.</div>
          )}
        </section>

        <HR />

        {/* Orders Section */}
        <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
          <div className="wrapper flex items-center justify-center sm:justify-between">
            <h3 className="h3-bold text-center sm:text-left">Orders</h3>
            <Button asChild size="lg" className="button hidden sm:flex">
              <Link href="/orders">View Orders</Link>
            </Button>
          </div>
        </section>

        <section className="wrapper my-8">
          <p>
            These are the orders you have placed over time. Each order is associated with a payment
            intent. As you order products, they will appear in your "purchased products" list.
          </p>
          <Button
            className={classes.ordersButton}
            href="/orders"
            appearance="primary"
            label="View Orders"
          />
        </section>

        <HR />

        {/* Logout Button */}
        <Button href="/logout" appearance="secondary" label="Log out" />
      </Gutter>
    </Fragment>
  );
}

export const metadata: Metadata = {
  title: 'Account',
  description: 'Manage your account information, view purchased products and orders.',
  openGraph: mergeOpenGraph({
    title: 'Account',
    url: '/account',
  }),
};
