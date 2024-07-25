import "./Button.css";

interface Props {
  label: string;
  type: string;
}
function Button(props: Props) {
  const { label, type } = props;
  return <button className={`btn ${type}`} >{label}</button>;
}

export default Button;
