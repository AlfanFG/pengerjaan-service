import { Text } from "@mantine/core"

export const ChildText = ({description, id}:any) => {
   
    return   <Text fs="italic" key={id}>{description}</Text>
}