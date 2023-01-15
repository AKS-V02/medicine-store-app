/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Medicine } from "../models";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function MedicineForm(props) {
  const { medicine, overrides, ...rest } = props;
  const [
    textFieldTwoNineSevenSixSixNineTwoTwoValue,
    setTextFieldTwoNineSevenSixSixNineTwoTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixSevenEightTwoSevenTwoFourValue,
    setTextFieldThreeSixSevenEightTwoSevenTwoFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineTwoThreeValue,
    setTextFieldTwoNineSevenSixSixNineTwoThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineTwoFourValue,
    setTextFieldTwoNineSevenSixSixNineTwoFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixSevenEightTwoSevenFiveTwoValue,
    setTextFieldThreeSixSevenEightTwoSevenFiveTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixSevenEightTwoSevenThreeOneValue,
    setTextFieldThreeSixSevenEightTwoSevenThreeOneValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixSevenEightTwoSevenOneSevenValue,
    setTextFieldThreeSixSevenEightTwoSevenOneSevenValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixSevenEightTwoSevenThreeEightValue,
    setTextFieldThreeSixSevenEightTwoSevenThreeEightValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixSevenEightTwoSevenFourFiveValue,
    setTextFieldThreeSixSevenEightTwoSevenFourFiveValue,
  ] = useStateMutationAction("");
  const buttonThreeSixSevenEightTwoSevenFiveNineOnClick =
    useDataStoreCreateAction({
      fields: {
        name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
        price: textFieldThreeSixSevenEightTwoSevenTwoFourValue,
        content: textFieldTwoNineSevenSixSixNineTwoThreeValue,
        sideeffects: textFieldTwoNineSevenSixSixNineTwoFourValue,
        image: textFieldThreeSixSevenEightTwoSevenFiveTwoValue,
        description: textFieldThreeSixSevenEightTwoSevenThreeOneValue,
        uses: textFieldThreeSixSevenEightTwoSevenOneSevenValue,
        itemPerStrip: textFieldThreeSixSevenEightTwoSevenThreeEightValue,
        stripStock: textFieldThreeSixSevenEightTwoSevenFourFiveValue,
      },
      model: Medicine,
      schema: schema,
    });
  const buttonTwoNineSevenSixSixNineTwoSixOnClick = useDataStoreUpdateAction({
    fields: {
      name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
      price: textFieldThreeSixSevenEightTwoSevenTwoFourValue,
      content: textFieldTwoNineSevenSixSixNineTwoThreeValue,
      sideeffects: textFieldTwoNineSevenSixSixNineTwoFourValue,
      image: textFieldThreeSixSevenEightTwoSevenFiveTwoValue,
      description: textFieldThreeSixSevenEightTwoSevenThreeOneValue,
      uses: textFieldThreeSixSevenEightTwoSevenOneSevenValue,
      itemPerStrip: textFieldThreeSixSevenEightTwoSevenThreeEightValue,
      stripStock: textFieldThreeSixSevenEightTwoSevenFourFiveValue,
    },
    id: medicine?.id,
    model: Medicine,
    schema: schema,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MedicineForm")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Add/Update Medicine"
            {...getOverrideProps(overrides, "Add/Update Medicine")}
          ></Text>
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
        </Flex>
        <Divider
          width="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766917")}
        ></Divider>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            label="Name"
            placeholder="Dolo 60mg"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoTwoValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField29766922")}
          ></TextField>
          <TextField
            label="Content"
            placeholder="Paracetamol"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoThreeValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766923")}
          ></TextField>
          <TextField
            label="Side Effect"
            placeholder="Vomiting, Nausea"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoFourValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766924")}
          ></TextField>
          <TextField
            label="Uses"
            placeholder="Pain, Fever"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixSevenEightTwoSevenOneSevenValue}
            onChange={(event) => {
              setTextFieldThreeSixSevenEightTwoSevenOneSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36782717")}
          ></TextField>
          <TextField
            label="Price"
            placeholder="13.5"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixSevenEightTwoSevenTwoFourValue}
            onChange={(event) => {
              setTextFieldThreeSixSevenEightTwoSevenTwoFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36782724")}
          ></TextField>
          <TextField
            label="Description"
            placeholder="Short description of the usage of the medicine"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixSevenEightTwoSevenThreeOneValue}
            onChange={(event) => {
              setTextFieldThreeSixSevenEightTwoSevenThreeOneValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36782731")}
          ></TextField>
          <TextField
            label="Tab/Capsule per Strip"
            placeholder="15"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixSevenEightTwoSevenThreeEightValue}
            onChange={(event) => {
              setTextFieldThreeSixSevenEightTwoSevenThreeEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36782738")}
          ></TextField>
          <TextField
            label="Strip in Stock"
            placeholder="7"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixSevenEightTwoSevenFourFiveValue}
            onChange={(event) => {
              setTextFieldThreeSixSevenEightTwoSevenFourFiveValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36782745")}
          ></TextField>
          <TextField
            label="Image"
            placeholder="image-url"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixSevenEightTwoSevenFiveTwoValue}
            onChange={(event) => {
              setTextFieldThreeSixSevenEightTwoSevenFiveTwoValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36782752")}
          ></TextField>
        </Flex>
        <Divider
          width="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766925")}
        ></Divider>
        <Flex
          gap="24px"
          direction="row"
          width="184px"
          height="40px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 418")}
        >
          <Button
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Save"
            onClick={() => {
              buttonThreeSixSevenEightTwoSevenFiveNineOnClick();
            }}
            {...getOverrideProps(overrides, "Button36782759")}
          ></Button>
          <Button
            shrink="0"
            size="default"
            isDisabled={true}
            variation="primary"
            children="Update"
            onClick={() => {
              buttonTwoNineSevenSixSixNineTwoSixOnClick();
            }}
            {...getOverrideProps(overrides, "Button29766926")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
