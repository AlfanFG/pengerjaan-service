interface ICheckbox {
    formName: string
    label: string
    value?: boolean
    mandatory: boolean
    id: number
    
}

interface IFile {
    formName: string
    label: string
    value?: any
    mandatory: boolean
    id: number
    is_multiple: boolean
    type: string
    
}