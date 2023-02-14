import { Button, Checkbox, Flex, Group, Input, Text } from "@mantine/core";
import * as Icons from "tabler-icons-react"
import { Dropzone, MIME_TYPES  } from "@mantine/dropzone";
import { useFormikContext } from "formik";
import { useRef } from "react";

export const FFile = ({ formName, label, mandatory, id, is_multiple, type }: IFile) => {
  const { setFieldValue, errors }: any = useFormikContext();
  const openRef = useRef<() => void>(null);
 
  return (
    <Input.Wrapper
      style={{marginTop: 20}}
      key={id}
      required={mandatory}
      label={label}
      error={errors && errors[formName]}
    >
        <Dropzone  onDrop={(files) =>{
          console.log(files)
           setFieldValue(formName, is_multiple ? files :files)}} accept={type === "photo" ? [MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.svg] : [MIME_TYPES.mp4]} openRef={openRef}>
        <Flex
      mih={50}
     
      gap="md"
      justify="center"
      align="center"
      direction="column"
      wrap="wrap"
    >
      
        <Icons.PictureInPicture size={28} />
        <Text align="center">Drop image here</Text>
    </Flex>
      </Dropzone>

     
    </Input.Wrapper>
  );
};
