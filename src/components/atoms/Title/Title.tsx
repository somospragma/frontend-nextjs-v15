import { FC } from "react";
import {
  NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
} from "@/config/environments";

interface Props {
  title: string;
}

export const Title: FC<Props> = ({ title }) => {
  console.log(
    "Priv:",
    NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    "Public:",
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID
  );
  return <div>{title}</div>;
};
