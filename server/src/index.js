const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

const resolvers = {
  Query: {
    // feed(parent, args, ctx, info) {
    //   return ctx.db.query.posts({ where: { isPublished: true } }, info)
    // },
    blocks(parent, args, ctx, info) {
      return ctx.db.query.blocks({ }, info)
    },
    reviews(parent, args, ctx, info) {
      return ctx.db.query.reviews({ }, info)
    },
    // drafts(parent, args, ctx, info) {
    //   return ctx.db.query.posts({ where: { isPublished: false } }, info)
    // },
    // post(parent, { id }, ctx, info) {
    //   return ctx.db.query.post({ where: { id: id } }, info)
    // },
  },
  Mutation: {
    // createDraft(parent, { title, text }, ctx, info) {
    //   return ctx.db.mutation.createPost(
    //     { data: { title, text, isPublished: false } },
    //     info,
    //   )
    // },
    createReview(parent, { username, product, comment }, ctx, info) {
      return ctx.db.mutation.createReview(
        { data: { username, product, comment } },
        info,
      )
    },
    createBlock(parent, { size, color, price }, ctx, info) {
      return ctx.db.mutation.createBlock(
        { data: { size, color, price } },
        info,
      )
    },
    // deletePost(parent, { id }, ctx, info) {
    //   return ctx.db.mutation.deletePost({where: { id } }, info)
    // },
    // publish(parent, { id }, ctx, info) {
    //   return ctx.db.mutation.updatePost(
    //     {
    //       where: { id },
    //       data: { isPublished: true },
    //     },
    //     info,
    //   )
    // },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://us1.prisma.sh/public-swifthare-28/prisma-lego/dev',
      secret: 'mysecret123',
      debug: true,
    }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))
