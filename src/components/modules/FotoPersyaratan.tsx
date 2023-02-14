import { Formik } from "formik"
import { FCheckBox } from "../forms/CheckBox"
import { ChildText } from "../forms/ChildText"
import { FFile } from "../forms/File"
import { ParentText } from "../forms/ParentText"
import * as Yup from 'yup'
import { ScrollArea } from '@mantine/core';

export const FotoPersyaratan = ({data}:any) => {
    const {json: formPropterties} = data
    const filterByFoto = formPropterties?.filter((item:any, idx:number)=> item?.description?.split(" ").find((item:any)=> item.toLowerCase() === "foto" ||  item.toLowerCase() === "video"))
    const sortedData = filterByFoto?.sort((a:any,b:any) => parseInt(a.id) - parseInt(b.id))
    const filteredFormik = sortedData?.reduce((a:any, v:any) => ({...a, ["form_"+v.id] : v.value}), {})
    const initialValues = filteredFormik
    const schema = sortedData?.map((item:any, idx:number)=> {
        if((item?.type === "photo" || item?.type === "video")){
            return {["form_"+item.id]: item?.is_mandatory ? Yup.array().length(0, item?.description + 'belum diisi') : Yup.array() }
        }
    
    })
    let object = {}
    schema?.map((a:any, v:any) => Object.assign(object, a))
    const formikSchema = Yup.object({...object})
    console.log(filteredFormik)
    return <Formik initialValues={initialValues} 
    validationSchema={formikSchema}
    onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false)

       
      }} >
        {({ handleSubmit, isSubmitting, isValid, errors, values }) => {
            return (<form onSubmit={handleSubmit}>
              <ScrollArea style={{ height: "100vh" }}>
                {sortedData?.map((item:IJson, idx:number)=> {
                   
                    let formReturn = <></>
                    switch(true){
                        case (item?.type === "text" && item?.group === "parent") :
                            formReturn = <ParentText id={idx} description={item?.description} />
                        break;
                        case (item?.type === "text" && item?.group === "child") :
                            formReturn = <ChildText id={idx} description={item?.description} />
                        break;
                        case(item?.type === "checkbox") :
                            formReturn = <FCheckBox id={idx} formName={`form_${item?.id}`} label={item?.description} mandatory={item?.mandatory ? true : false} value />
                        break;
                        case(item?.type === "photo" || item?.type === "video") :
                            formReturn = <FFile id={idx} formName={`form_${item?.id}`} label={item?.description} mandatory={item?.mandatory ? true : false} is_multiple={item?.is_multiple ? true : false} type={item?.type} />
                        break
                        }

                        return formReturn
                    
                })}
                </ScrollArea>
                
            </form>)
        }}
    </Formik>
}