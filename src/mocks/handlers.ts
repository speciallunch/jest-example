import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://jsonplaceholder.typicode.com/todos",
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          { userId: 1, id: 1, title: "청소", completed: true },
          { userId: 1, id: 2, title: "숙제", completed: true },
          { userId: 1, id: 3, title: "설거지", completed: false },
        ])
      );
    }
  ),
];
