import { Formik } from "formik"
import { FCheckBox } from "../forms/CheckBox"
import { ChildText } from "../forms/ChildText"
import { FFile } from "../forms/File"
import { ParentText } from "../forms/ParentText"
import * as Yup from 'yup'
import { ScrollArea } from '@mantine/core';
import { Forms } from "./Forms"

export const TandaTangan = ({data}:any) => {
    const {json: formPropterties} = data
    const filtered = formPropterties?.slice(21,35)
    const sortedData = filtered?.sort((a:any) => {
        let parent = 0
        if(a.group === "parent") parent = a.id 
        if(parent !== parseInt(a.parent)){
            return 1
        }else{
            return -1
        }
    })
    const filteredFormik = sortedData?.reduce((a:any, v:any) => ({...a, ["form_"+v.id] : v.value}), {id: 2})
    const initialValues = filteredFormik
    const schema = sortedData?.map((item:any, idx:number)=> {
        if((item?.type === "photo" || item?.type === "video")){
            return {["form_"+item.id]: item?.is_mandatory ? Yup.array().length(0, item?.description + 'belum diisi') : Yup.array() }
        }
    
    })
    let object = {}
    schema?.map((a:any, v:any) => Object.assign(object, a))
    const formikSchema = Yup.object({...object})


   
    return <Formik initialValues={initialValues} 
    validationSchema={formikSchema}
    onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false)

       
      }} >
        {({ handleSubmit, isSubmitting, isValid, errors, values }) => {
            return (<form onSubmit={handleSubmit}>
              <Forms sortedData={sortedData} />
            </form>)
        }}
    </Formik>
}