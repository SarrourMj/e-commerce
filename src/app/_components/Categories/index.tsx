import React from 'react';
import Link from 'next/link';
import { Category } from '../../../payload/payload-types';
import CategoryCard from './CategoryCard';
import classes from './index.module.scss';

const Categories = ({ categories }: { categories: Category[] | null }) => {
  if (!categories || categories.length === 0) {
    return <p>No categories available</p>; // You can replace this with a more appropriate UI for no categories
  }

  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3>Shop by Categories</h3>
        <Link href="/products">Show All</Link>
      </div>

      <div className={classes.list}>
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
