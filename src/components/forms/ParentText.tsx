import { Title } from "@mantine/core"

export const ParentText = ({description, id}:any) => {
    return  <Title style={{marginTop: 15}} key={id} order={2}>{description}</Title>
}