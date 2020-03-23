export const isUserManager = rule()(
  (obj, args, { authUser }, info) =>
    authUser && authUser.role === 'USER_MANAGER'
);

export const permissions = {
  Query: {
    userById: isUserManager,
    users: isUserManager
  },

  Mutation: {
    editUser: isUserManager,
    deleteUser: isUserManager
  }
};
