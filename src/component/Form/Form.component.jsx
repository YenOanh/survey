import React from "react";
import { withFormik } from "formik";
import TextInput from "../TextInput/TextInput.component";
import RadioButton from "../RadioButton/RadioButton.component";
import RadioButtonEvaluation from "../RadioButtonEvalutaion/RadioButtonEvaluation.component";
import { compose, withState, withHandlers } from "recompose";
import * as Yup from "yup";
const FormSubmit = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleFocus,
    handleSubmit
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextInput
          num="1"
          title="Chúng tôi có thể  biết tên bạn ?"
          value={values.name}
          name="name"
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          touched={touched.name}
          errors={errors.name}
        />
        <RadioButton num="2" title="Giới tính:" values={values} />

        <TextInput
          num="3"
          title="Bạn bao nhiêu tuổi ?"
          value={values.age}
          name="age"
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          touched={touched.age}
          errors={errors.age}
        />
        <TextInput
          num="4"
          title="Bạn là người nước nào ?"
          value={values.country}
          name="country"
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          touched={touched.country}
          errors={errors.country}
        />
        <div>
          <h4>Phần 1: Cảm xúc giận dữ</h4>
          <RadioButtonEvaluation
            title="Câu 1: Bạn vui lòng xem video “ Tàu Việt Nam” đánh giá mức độ cảm xúc:"
            name="feelingAngryQ1"
            emotion="Giận dữ"
            notEmotion="Không Giận dữ"
            feel="angry"
            not="notangry"
            notFeeling="notAngry"
            oneFeeling="oneAngry"
            twoFeeling="twoAngry"
            threeFeeling="threeAngry"
            fourFeeling="fourAngry"
            fiveFeeling="fiveAngry"
            Feeling="Angry"
            values={values.feelingAngryQ1}
          />
          <RadioButtonEvaluation
            title="Câu 2: Bạn vui lòng xem video “ Nữ sinh Hà Nội bị đánh hội đồng ngay trong lớp học” đánh giá mức độ cảm xúc: Video"
            name="feelingAngryQ2"
            emotion="Giận dữ"
            notEmotion="Không Giận dữ"
            feel="angry"
            not="notangry"
            notFeeling="notAngryQ2"
            oneFeeling="oneAngryQ2"
            twoFeeling="twoAngryQ2"
            threeFeeling="threeAngryQ2"
            fourFeeling="fourAngryQ2"
            fiveFeeling="fiveAngryQ2"
            Feeling="Angry"
            values={values.feelingAngryQ2}
          />
          <RadioButtonEvaluation
            title="Câu 3: Bạn vui lòng xem video “ Phẫn Nộ Đứa trẻ đánh cô gái thô bạo” đánh giá mức độ cảm xúc: Video"
            name="feelingAngryQ3"
            emotion="Giận dữ"
            notEmotion="Không Giận dữ"
            feel="angry"
            not="notangry"
            notFeeling="notAngryQ3"
            oneFeeling="oneAngryQ3"
            twoFeeling="twoAngryQ3"
            threeFeeling="threeAngryQ3"
            fourFeeling="fourAngryQ3"
            fiveFeeling="fiveAngryQ3"
            Feeling="Angry"
            values={values.feelingAngryQ3}
          />
          <RadioButtonEvaluation
            title="Câu 4: Bạn vui lòng xem video “ Phẫn nộ thanh niên Trung Quốc đánh người ăn xin cụt chân dã man” đánh giá mức độ cảm xúc: Video"
            name="feelingAngryQ4"
            emotion="Giận dữ"
            notEmotion="Không Giận dữ"
            feel="angry"
            not="notangry"
            notFeeling="notAngryQ4"
            oneFeeling="oneAngryQ4"
            twoFeeling="twoAngryQ4"
            threeFeeling="threeAngryQ4"
            fourFeeling="fourAngryQ4"
            fiveFeeling="fiveAngryQ4"
            Feeling="Angry"
            values={values.feelingAngryQ4}
          />

          <h4>Phần 1: Cảm xúc giận dữ</h4>
        </div>
      </div>
    </form>
  );
};
const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Too short")
    .max(50, "Too long")
    .required("Name is required "),
  age: Yup.string()
    .min(1, "Too short")
    .max(50, "Too long")
    .required("Age is required "),
  country: Yup.string()
    .min(1, "Too short")
    .max(50, "Too long")
    .required("Country is required ")
});

const EnhancedForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    name: "",
    gender: "",
    age: "",
    country: "",
    feelingAngryQ1: "",
    feelingAngryQ2: "",
    feelingAngryQ3: "",
    feelingAngryQ4: ""
  }),
  validationSchema: FormSchema,
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
    }, 500);
  },
  validate: values => {
    const errors = {};
    if (!values.gender) {
      errors.gender = "Gender is required";
    }
    return errors;
  }
});

export default EnhancedForm(FormSubmit);
