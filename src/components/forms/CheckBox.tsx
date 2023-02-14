import { Checkbox, Flex, Input, Text } from "@mantine/core";
import { useFormikContext } from "formik";

export const FCheckBox = ({ formName, label, mandatory, id }: ICheckbox) => {
  const { getFieldProps, errors }: any = useFormikContext();
  return (
    <Input.Wrapper
      key={id}
      style={{marginTop: 20}}
      required={mandatory}
      error={errors && errors[formName]}
    >
      {/* <Text>*</Text> */}
      <Checkbox
        {...getFieldProps(formName)}
        required={mandatory}
       label={<Flex
        gap="sm"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="wrap"
      ><Text>{label}</Text>{mandatory && <Text color={"red"}>*</Text>}</Flex>}
      />
    </Input.Wrapper>
  );
};
