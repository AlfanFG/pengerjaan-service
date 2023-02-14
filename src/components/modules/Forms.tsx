import { RootState } from "@/store/persistStore";
import { setServices } from "@/store/services";
import { ScrollArea } from "@mantine/core";
import { useFormikContext } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FCheckBox } from "../forms/CheckBox";
import { ChildText } from "../forms/ChildText";
import { FFile } from "../forms/File";
import { ParentText } from "../forms/ParentText";

export const Forms = ({sortedData}:any) => {
    const services = useSelector(
        (state: RootState) => state.services,
      )
      const dispatcher = useDispatch()
    const {
        values,
        
      }: any = useFormikContext();
    useEffect(()=> {
        dispatcher(setServices({...services, ...values}))
    },[values])
    return <ScrollArea style={{ minHeight: "100vh" }}>
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
}