export const findService = (servicesData:any, id:number) => {
    const data = servicesData?.services?.filter((item:any) => item?.id === id)

    return data[0]
}

export const findServicesJson = (servicesData:any, id:number) => {
    const data = servicesData?.services_json?.filter((item:any) => item?.service_id?.id === id)

    return data[0]
}