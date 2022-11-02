import { rest } from "msw";
const url = process.env.REACT_APP_API_URL_TODO_API;

export const handlers = [
  rest.get(`${url}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 4,
          name: "tinc son",
          done: false,
        },
      ])
    );
  }),
];
