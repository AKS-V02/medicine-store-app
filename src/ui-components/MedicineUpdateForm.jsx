/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Medicine } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MedicineUpdateForm(props) {
  const {
    id: idProp,
    medicine,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    price: "",
    content: "",
    sideeffects: "",
    image: "",
    description: "",
    uses: "",
    itemPerStrip: "",
    stripStock: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [price, setPrice] = React.useState(initialValues.price);
  const [content, setContent] = React.useState(initialValues.content);
  const [sideeffects, setSideeffects] = React.useState(
    initialValues.sideeffects
  );
  const [image, setImage] = React.useState(initialValues.image);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [uses, setUses] = React.useState(initialValues.uses);
  const [itemPerStrip, setItemPerStrip] = React.useState(
    initialValues.itemPerStrip
  );
  const [stripStock, setStripStock] = React.useState(initialValues.stripStock);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = medicineRecord
      ? { ...initialValues, ...medicineRecord }
      : initialValues;
    setName(cleanValues.name);
    setPrice(cleanValues.price);
    setContent(cleanValues.content);
    setSideeffects(cleanValues.sideeffects);
    setImage(cleanValues.image);
    setDescription(cleanValues.description);
    setUses(cleanValues.uses);
    setItemPerStrip(cleanValues.itemPerStrip);
    setStripStock(cleanValues.stripStock);
    setErrors({});
  };
  const [medicineRecord, setMedicineRecord] = React.useState(medicine);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Medicine, idProp)
        : medicine;
      setMedicineRecord(record);
    };
    queryData();
  }, [idProp, medicine]);
  React.useEffect(resetStateValues, [medicineRecord]);
  const validations = {
    name: [{ type: "Required" }],
    price: [{ type: "Required" }],
    content: [],
    sideeffects: [],
    image: [],
    description: [{ type: "Required" }],
    uses: [],
    itemPerStrip: [{ type: "Required" }],
    stripStock: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          price,
          content,
          sideeffects,
          image,
          description,
          uses,
          itemPerStrip,
          stripStock,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Medicine.copyOf(medicineRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MedicineUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              price,
              content,
              sideeffects,
              image,
              description,
              uses,
              itemPerStrip,
              stripStock,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              price: value,
              content,
              sideeffects,
              image,
              description,
              uses,
              itemPerStrip,
              stripStock,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Content"
        isRequired={false}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              price,
              content: value,
              sideeffects,
              image,
              description,
              uses,
              itemPerStrip,
              stripStock,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <TextField
        label="Sideeffects"
        isRequired={false}
        isReadOnly={false}
        value={sideeffects}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              price,
              content,
              sideeffects: value,
              image,
              description,
              uses,
              itemPerStrip,
              stripStock,
            };
            const result = onChange(modelFields);
            value = result?.sideeffects ?? value;
          }
          if (errors.sideeffects?.hasError) {
            runValidationTasks("sideeffects", value);
          }
          setSideeffects(value);
        }}
        onBlur={() => runValidationTasks("sideeffects", sideeffects)}
        errorMessage={errors.sideeffects?.errorMessage}
        hasError={errors.sideeffects?.hasError}
        {...getOverrideProps(overrides, "sideeffects")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              price,
              content,
              sideeffects,
              image: value,
              description,
              uses,
              itemPerStrip,
              stripStock,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              price,
              content,
              sideeffects,
              image,
              description: value,
              uses,
              itemPerStrip,
              stripStock,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Uses"
        isRequired={false}
        isReadOnly={false}
        value={uses}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              price,
              content,
              sideeffects,
              image,
              description,
              uses: value,
              itemPerStrip,
              stripStock,
            };
            const result = onChange(modelFields);
            value = result?.uses ?? value;
          }
          if (errors.uses?.hasError) {
            runValidationTasks("uses", value);
          }
          setUses(value);
        }}
        onBlur={() => runValidationTasks("uses", uses)}
        errorMessage={errors.uses?.errorMessage}
        hasError={errors.uses?.hasError}
        {...getOverrideProps(overrides, "uses")}
      ></TextField>
      <TextField
        label="Item per strip"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={itemPerStrip}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              price,
              content,
              sideeffects,
              image,
              description,
              uses,
              itemPerStrip: value,
              stripStock,
            };
            const result = onChange(modelFields);
            value = result?.itemPerStrip ?? value;
          }
          if (errors.itemPerStrip?.hasError) {
            runValidationTasks("itemPerStrip", value);
          }
          setItemPerStrip(value);
        }}
        onBlur={() => runValidationTasks("itemPerStrip", itemPerStrip)}
        errorMessage={errors.itemPerStrip?.errorMessage}
        hasError={errors.itemPerStrip?.hasError}
        {...getOverrideProps(overrides, "itemPerStrip")}
      ></TextField>
      <TextField
        label="Strip stock"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={stripStock}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              price,
              content,
              sideeffects,
              image,
              description,
              uses,
              itemPerStrip,
              stripStock: value,
            };
            const result = onChange(modelFields);
            value = result?.stripStock ?? value;
          }
          if (errors.stripStock?.hasError) {
            runValidationTasks("stripStock", value);
          }
          setStripStock(value);
        }}
        onBlur={() => runValidationTasks("stripStock", stripStock)}
        errorMessage={errors.stripStock?.errorMessage}
        hasError={errors.stripStock?.hasError}
        {...getOverrideProps(overrides, "stripStock")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || medicine)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || medicine) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
