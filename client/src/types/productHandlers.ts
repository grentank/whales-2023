import type { FormProductType } from './product';

export type AddProductHandlerType = (formData: FormProductType) => Promise<void>;
