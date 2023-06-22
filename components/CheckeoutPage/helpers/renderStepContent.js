import generalFormModel from "../FormModel/generalFormModel";
import General from "../Forms/General";
import Services from "../Forms/Service";

const { formId, formField } = generalFormModel;

export default function _renderStepContent(step, values) {
  switch (step) {
    case 0:
      return <General formField={formField} values={values} />;
    case 1:
      return <Services formField={formField} values={values} />;
    default:
      return <div>Not Found</div>;
  }
}
