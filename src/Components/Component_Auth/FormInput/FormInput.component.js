import "./FormInput.style.scss";

const FormInput = ({ onChange, label, ...otheprops }) => (
  <div className="group">
    <input className="form-input" onChange={onChange} {...otheprops} />

    {label ? (
      <label className={`${otheprops.value.length ? "shrink" : ""} form-input-label`}>{label}</label>
    ) : null}
  </div>
);

export default FormInput;
