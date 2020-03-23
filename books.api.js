export const resolvers = {
  Query: {
    books: (obj, args, context, info) => {
      return bookService.findAll();
    }
  },

  Mutation: {},

  Book: {
    creator: ({ creatorId }, args, context, info) => {
      return userService.findById(creatorId);
    }
  }
};
