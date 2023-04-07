import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Product from './Product';

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductsListsStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);

  if (loading) return <p>Loading...un momento por fa vor</p>;
  if (error) return <p>{`Error...something borked. ${error.message}`}</p>;

  return (
    <div>
      <ProductsListsStyles>
        {data.allProducts.map((product, id) => (
          <Product product={product} key={id} />
        ))}
      </ProductsListsStyles>
    </div>
  );
}
