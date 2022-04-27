/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="386px"
      height="320px"
      overflow="hidden"
      position="relative"
      borderRadius="10px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HomeCard")}
    >
      <Image
        width="386px"
        height="254px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        src={home?.image_url}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <View
        width="386px"
        height="66px"
        position="absolute"
        top="254px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 419")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="14.0625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="366px"
          height="27px"
          position="absolute"
          top="30px"
          left="10px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Price: $"}${home?.price}${"/night"}`}
          {...getOverrideProps(overrides, "Description")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="16.40625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="10px"
          left="10px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={home?.address}
          {...getOverrideProps(overrides, "Title")}
        ></Text>
      </View>
    </View>
  );
}
