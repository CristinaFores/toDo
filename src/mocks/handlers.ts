import { rest } from "msw";
const url = process.env.REACT_APP_API_URL_TODO_API;

export const handlers = [
  rest.get(`${url}`, (req, res, context) => {
    return res(
      context.status(200),
      context.json([
        {
          id: 4,
          name: "tinc son",
          done: false,
        },
      ])
    );
  }),
  rest.post(url!, async (request, response, context) => {
    const receivedTask = await request.json();
    return response(context.status(200), context.json(receivedTask));
  }),

  rest.delete(`${url}/:id`, (request, response, context) => {
    return response(context.status(200));
  }),
];
