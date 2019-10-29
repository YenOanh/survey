import React from "react";
import { Field } from "formik";
import "./RadioButtonEvaluation.component.scss"
const RadioButtonEvaluation = props => {
  const {
    values,
    not,
    feel,
    oneFeeling,
    twoFeeling,
    threeFeeling,
    fourFeeling,
    fiveFeeling,
    notFeeling,
    name,
    notEmotion,
    emotion,
    title,
    Feeling
  } = props;
  console.log(values,name)
  return (
    <div className="radioquestion">
      <h5>
        <span className="title">{title}</span>
      </h5>
      <div className="feeling-radio">
        <Field
          type="radio"
          name={name}
          value={not}
          id={notFeeling}
          checked={values === `${not}`}
        />
        <label htmlFor={notFeeling}> {notEmotion}</label>
      </div>
      <div className="feeling-radio">
        <Field
          type="radio"
          name={name}
          value="one"
          id={oneFeeling}
          checked={values === "one"}
        />
        <label htmlFor={oneFeeling}> 1</label>
      </div>
      <div className="feeling-radio">
        <Field
          type="radio"
          name={name}
          value="two"
          id={twoFeeling}
          checked={values === "two"}
        />
        <label htmlFor={twoFeeling}> 2</label>
      </div>
      <div className="feeling-radio">
        <Field
          type="radio"
          name={name}
          value="three"
          id={threeFeeling}
          checked={values === "three"}
        />
        <label htmlFor={threeFeeling}> 3</label>
      </div>
      <div className="feeling-radio">
        <Field
          type="radio"
          name={name}
          value="four"
          id={fourFeeling}
          checked={values === "four"}
        />
        <label htmlFor={fourFeeling}> 4</label>
      </div>
      <div className="feeling-radio">
        <Field
          type="radio"
          name={name}
          value="five"
          id={fiveFeeling}
          checked={values === "five"}
        />
        <label htmlFor={fiveFeeling}> 5</label>
      </div>
      <div className="feeling-radio">
        <Field
          type="radio"
          name={name}
          value={feel}
          id={Feeling}
          checked={values === `${feel}`}
        />
        <label htmlFor={Feeling}> {emotion}</label>
      </div>
    </div>
  );
};

export default RadioButtonEvaluation;
