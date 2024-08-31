import knex from "../data/db";
import { Experience, Project, Skill } from "./types";

const resolvers = {
  Query: {
    allExperiences: async (): Promise<Experience[]> => {
      const experiences = await knex("experiences").select("*");
      return experiences.map((exp) => ({
        ...exp,
        technologies: exp.technologies ? JSON.parse(exp.technologies) : [],
      }));
    },
    allProjects: async (): Promise<Project[]> => {
      return await knex<Project>("projects").select("*");
    },
    allSkills: async (): Promise<Skill[]> => {
      return await knex<Skill>("skills").select("*");
    },
  },
  Mutation: {
    addExperience: async (
      _: unknown,
      {
        title,
        startDate,
        endDate,
        technologies,
      }: {
        title: string;
        startDate: string;
        endDate?: string;
        technologies?: string[];
      }
    ): Promise<Experience> => {
      const [id] = await knex("experiences")
        .insert({
          title,
          startDate,
          endDate,
          technologies: JSON.stringify(technologies),
        })
        .returning("id");

      return { id, title, startDate, endDate, technologies };
    },
    addProject: async (
      _: unknown,
      { name, link }: { name: string; link?: string }
    ): Promise<Project> => {
      const [id] = await knex("projects")
        .insert({ name, link })
        .returning("id");

      return { id, name, link };
    },
    addSkill: async (
      _: unknown,
      { name, level }: { name: string; level: number }
    ): Promise<Skill> => {
      const [id] = await knex("skills").insert({ name, level }).returning("id");

      return { id, name, level };
    },
  },
};

export default resolvers;
