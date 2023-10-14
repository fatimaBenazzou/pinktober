import { BuilderI } from '@/types/redux';
export default function Predictions(builder: BuilderI) {
  return {
    getPrediction: builder.mutation<ResponseI<PredResponse>, Predmodel>({
      query: (body) => {
       
        return {
          url: '/predmodel',
          method: 'Post',
          body
        };
      },
    }),
  };
}
