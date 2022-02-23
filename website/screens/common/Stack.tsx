import React from "react";
import styled from "styled-components";

type StackProps = {
  gutter?: "none" | "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge" | "xxxlarge";
  divider?: boolean;
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  as?: React.ElementType;
  children: React.ReactNode;
};

export default function Stack({ gutter, divider, align, as = "div", children }: StackProps) {
  return (
    <StyledStack gutter={gutter} divider={divider} align={align} as={as}>
      {React.Children.map(children, (child, index) => {
        return (
          <>
            {child}
            {divider && index !== React.Children.count(children) - 1 && <Divider />}
          </>
        );
      })}
    </StyledStack>
  );
}

const Divider = styled.div`
  height: 1px;
  background-color: #999999;
`;

const StyledStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }: StackProps) => {
    switch (align) {
      case "start":
        return "flex-start";
      case "center":
        return "center";
      case "end":
        return "flex-end";
      case "baseline":
        return "baseline";
      case "stretch":
        return "stretch";
      default:
        return "initial";
    }
  }}};
  gap: ${({ gutter, divider }: StackProps) => {
    switch (gutter) {
      case "none":
        return "0";
      case "xxsmall":
        return `calc(0.125rem / ${divider ? 2 : 1})`;
      case "xsmall":
        return `calc(0.25rem / ${divider ? 2 : 1})`;
      case "small":
        return `calc(0.5rem / ${divider ? 2 : 1})`;
      case "medium":
        return `calc(1rem / ${divider ? 2 : 1})`;
      case "large":
        return `calc(1.5rem / ${divider ? 2 : 1})`;
      case "xlarge":
        return `calc(2rem / ${divider ? 2 : 1})`;
        case "xxlarge":
        return `calc(3rem / ${divider ? 2 : 1})`;
        case "xxxlarge":
        return `calc(4rem / ${divider ? 2 : 1})`;
      default:
        return "0";
    }
  }};
  margin: 0;
  padding: 0;
`;
