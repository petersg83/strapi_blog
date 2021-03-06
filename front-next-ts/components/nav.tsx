import React from 'react';
import Link from 'next/link';
import Query from '../components/query';
import CATEGORIES_QUERY from '../apollo/queries/category/categories';
import Category from "../interfaces/category";

interface QueryType {
    categories: Category[];
}

const Nav = () => {
    return (
        <div>
            <Query<QueryType> query={CATEGORIES_QUERY} options={{ variables: { id: null } }}>
                {({ data }) => {
                    if (!data) return null;

                    const { categories } = data;
                    return (
                        <div>
                            <nav className="uk-navbar-container" data-uk-navbar>
                                <div className="uk-navbar-left">
                                    <ul className="uk-navbar-nav">
                                        <li>
                                            <Link href="/">
                                                <a>Strapi Blog</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="uk-navbar-right">
                                    <ul className="uk-navbar-nav">
                                        {categories.map((category) => {
                                            return (
                                                <li key={category.id}>
                                                    <Link
                                                        href={{
                                                            pathname: "category",
                                                            query: { name: category.name }
                                                        }}
                                                    >
                                                        <a className="uk-link-reset">{category.name}</a>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    );
                }}
            </Query>
        </div>
    );
};

export default Nav;