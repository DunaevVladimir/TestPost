import { baseApi } from '@/shared/api'

export const postApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPostsList: build.query({
      query: ({limit = 10, start = 0}) => ({
        url: `/posts`,
        params: {
          _limit: limit,
          _start: start,
        }
      }),
      merge: (currentState, mergeState, { arg }) => {
        if (arg?.start !== 0) {
          return [...currentState, ...mergeState];
        }
        return mergeState
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
    getPost: build.query({
      query: (id) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
})

export const { useGetPostsListQuery, useGetPostQuery } = postApi;