type User = { id: string; name: string };

// Imaginary database
const users: User[] = [];
export const db = {
  user: {
    findMany: async () => users,
    findByIds: async (ids: ReadonlyArray<string>) => users.find((user) => ids.includes(user.id)),
    create: async (data: { name: string }) => {
      const user = { id: String(users.length + 1), ...data };
      users.push(user);
      return user;
    },
  },
};
