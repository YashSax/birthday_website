import { type VariantProps, cva } from "class-variance-authority";
import { FormikProps } from "formik";
import * as React from "react";
import { forwardRef } from "react";

import { cn } from "@/util/tailwindUtil";
import VFlex from "../layout/VFlex";
import Text from "../typography/Text";
import Input from "./Input";

const variants = cva("", {
  variants: {
    variant: {
      unstyled: ``,
      default: `h-12 px-5 rounded-md border border-input bg-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-info`,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type InputProps<T> = {
  formik: FormikProps<T>;
  name: keyof T;
  inputClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof variants>;

const FormikInput = <T,>(
  { formik, name, className, inputClassName, ...props }: InputProps<T>,
  ref: React.Ref<HTMLInputElement>
) => {
  const nKey = name as keyof T;
  const value = formik.values?.[nKey]?.toString();
  const touched = formik.touched?.[nKey]?.toString();
  const error = formik.errors?.[nKey]?.toString();

  return (
    <VFlex className={cn("gap-1", className)}>
      <Input
        ref={ref}
        onChange={(e) => {
          formik.setFieldValue(name, e.target.value);
        }}
        value={value}
        className={inputClassName}
        {...props}
      />
      <Text color="destructive">{touched && error}</Text>
    </VFlex>
  );
};

// NOTE: not sure why it needs to be in this format
export default forwardRef(FormikInput) as unknown as <T>(
  props: InputProps<T> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => ReturnType<typeof FormikInput>;
