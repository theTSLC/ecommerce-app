import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const ALL_PRODUCTS_QUERY = gql`
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

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);

  if (loading) return <p>Loading...un momento por fa vor</p>;
  if (error) return <p>{`Error...something borked. ${error.message}`}</p>;
  console.log(data);
  return (
    <div>
      <div>
        {data.allProducts.map((product, id) => (
          <>
            <p key={id}>{product.name}</p>
          </>
        ))}
      </div>
    </div>
  );
}
