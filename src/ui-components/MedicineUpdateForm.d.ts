/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Medicine } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MedicineUpdateFormInputValues = {
    name?: string;
    price?: string;
    content?: string;
    sideeffects?: string;
    image?: string;
    dosage?: string;
};
export declare type MedicineUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    sideeffects?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    dosage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicineUpdateFormOverridesProps = {
    MedicineUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    sideeffects?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    dosage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MedicineUpdateFormProps = React.PropsWithChildren<{
    overrides?: MedicineUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    medicine?: Medicine;
    onSubmit?: (fields: MedicineUpdateFormInputValues) => MedicineUpdateFormInputValues;
    onSuccess?: (fields: MedicineUpdateFormInputValues) => void;
    onError?: (fields: MedicineUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MedicineUpdateFormInputValues) => MedicineUpdateFormInputValues;
    onValidate?: MedicineUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MedicineUpdateForm(props: MedicineUpdateFormProps): React.ReactElement;
