
import { Stepper, Step, Button, Group } from '@mantine/core';
import * as Icons from "tabler-icons-react";
import { FotoPersyaratan } from './FotoPersyaratan';

export const Steps = ({allowSelectStep, servicesData, setActive} : IStep) => {
    const {service_id} = servicesData[0]
    return (<Stepper.Step
          icon={ service_id?.id === 1 ? <Icons.Camera size={18} /> : service_id?.id === 2 ? <Icons.Signature size={18} /> : <Icons.Book size={18} />  }
          label={service_id?.service_name}
          // description={servicesData[0]?.service_id?.service_name}
          onClick={()=> setActive(service_id?.id)}
          allowStepSelect={allowSelectStep}
        >
        <FotoPersyaratan />
        </Stepper.Step>)
}

