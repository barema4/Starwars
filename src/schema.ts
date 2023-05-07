import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    allUsers: async (_: any, { page }: { page: number }) => {
      const response = await axios.get(
        `https://swapi.dev/api/people/?page=${page}`
      );
      return response.data;
    },
    searchUser: async (_: any, { name }: { name: string }) => {
      const response = await axios.get(
        `https://swapi.dev/api/people/?search=${name}`
      );
      return response.data.results;
    },
  },
};
