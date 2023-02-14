interface IServicesJson {
    service_id: Array<IServiceId>
    json : Array<IJson>
}

interface IJson {
    id: number
    group: string
    parent_description: string | null
    description: string
    mandatory: number
    sequence: number
    parent: string
    type: string
    is_multiple: number
    remark: string | null
    value: any
}

interface IServiceId {
    id: number
    service_name: string
}