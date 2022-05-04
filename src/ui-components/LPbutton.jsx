/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function LPbutton(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="371px"
      height="87px"
      position="relative"
      border="1px SOLID rgba(0,163,175,1)"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "LPbutton")}
    >
      <Text
        fontFamily="Hiragino Sans"
        fontSize="35px"
        fontWeight="400"
        color="rgba(0,163,175,1)"
        lineHeight="41.015625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="無料で試してみる"
        {...getOverrideProps(
          overrides,
          "\u7121\u6599\u3067\u8A66\u3057\u3066\u307F\u308B"
        )}
      ></Text>
    </View>
  );
}
