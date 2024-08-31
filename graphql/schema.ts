import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Project {
    id: ID!
    name: String!
    link: String
  }
  type Experience {
    id: ID!
    title: String!
    startDate: String!
    endDate: String
    technologies: [String]
  }
  type Skill {
    id: ID!
    name: String!
    level: Int!
  }
  type Query {
    allExperiences: [Experience!]!
    allProjects: [Project!]!
    allSkills: [Skill!]!
  }

  type Mutation {
    addExperience(
        title: String!
        startDate: String!
        endDate: String
        technologies: [String]
        ): Experience!
    addProject(
        name: String!
        link: String
        ): Project! 
    addSkill(
        name: String!
        level: Int!
        ): Skill!
  }
`;

export default typeDefs;