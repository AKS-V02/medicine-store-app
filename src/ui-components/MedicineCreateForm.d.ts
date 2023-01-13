/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MedicineCreateFormInputValues = {
    name?: string;
    price?: string;
    content?: string;
    sideeffects?: string;
    image?: string;
    dosage?: string;
};
export declare type MedicineCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    sideeffects?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    dosage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicineCreateFormOverridesProps = {
    MedicineCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    sideeffects?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    dosage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MedicineCreateFormProps = React.PropsWithChildren<{
    overrides?: MedicineCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MedicineCreateFormInputValues) => MedicineCreateFormInputValues;
    onSuccess?: (fields: MedicineCreateFormInputValues) => void;
    onError?: (fields: MedicineCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MedicineCreateFormInputValues) => MedicineCreateFormInputValues;
    onValidate?: MedicineCreateFormValidationValues;
} & React.CSSProperties>;
export default function MedicineCreateForm(props: MedicineCreateFormProps): React.ReactElement;
