import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerMedicine = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Medicine, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly content?: string | null;
  readonly sideeffects?: string | null;
  readonly image?: string | null;
  readonly description: string;
  readonly uses?: string | null;
  readonly itemPerStrip: number;
  readonly stripStock: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMedicine = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Medicine, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly content?: string | null;
  readonly sideeffects?: string | null;
  readonly image?: string | null;
  readonly description: string;
  readonly uses?: string | null;
  readonly itemPerStrip: number;
  readonly stripStock: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Medicine = LazyLoading extends LazyLoadingDisabled ? EagerMedicine : LazyMedicine

export declare const Medicine: (new (init: ModelInit<Medicine>) => Medicine) & {
  copyOf(source: Medicine, mutator: (draft: MutableModel<Medicine>) => MutableModel<Medicine> | void): Medicine;
}