import { gql } from 'apollo-server';

export default gql`
  type Query {    
    testMessage: String!
    myMessage: Boolean
    person: [Person]
  }
  type Person {
    name: String
    age: Int
    male: Boolean
  }
`;