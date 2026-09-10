import { prisma } from '../utils/prisma';

export async function listCategoriesWithContent() {
  return prisma.category.findMany({
    orderBy: {
      name: 'asc'
    },
    include: {
      tasks: {
        orderBy: {
          order: 'asc'
        }
      },
      pluginRecommendations: {
        orderBy: {
          name: 'asc'
        }
      }
    }
  });
}
