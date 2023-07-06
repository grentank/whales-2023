export type QuoteFromApi = {
  quote: string;
  character: string;
  image: string; // boolean, number
  pers?: boolean;
};

export type QuoteType = QuoteFromApi & {
  id: number | string;
};

export type AmountFormType = {
  amount: string;
};

export type SubmitFormType = (event: React.FormEvent<HTMLFormElement>) => Promise<void>;

export type DeleteHandlerType = (id: QuoteType['id']) => void;
