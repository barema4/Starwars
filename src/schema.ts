import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

const URL = 'https://swapi.dev/api/people'

export const resolvers = {
  Query: {
    allUsers: async (_: any, { page }: { page: number }) => {
      const response = await axios.get(
        `${URL}/?page=${page}`
      );
      return response.data;
    },
    searchUser: async (_: any, { name }: { name: string }) => {
      const response = await axios.get(
        `${URL}/?search=${name}`
      );
      return response.data.results;
    },
  },
};
