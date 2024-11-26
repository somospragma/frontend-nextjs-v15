import React, { FC } from "react";

interface Props {
  title: string;
}

export const Title: FC<Props> = ({ title }) => <div>{title}</div>;
