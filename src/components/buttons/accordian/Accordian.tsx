import React, { useState } from "react";
//import "./components/buttons/accordian/accordian.css";

interface Buttonprops {
  title: string;
  content: string;
}

function Accordian(props: Buttonprops) {
  const { title,content } = props;
  const [open, setOpen] = useState(false);
  const displayAccordian = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="accordianTitle" onClick={displayAccordian}>{title}</div>
      {open && <div className="accordianContent">{content}</div>}
    </div>
  );
}
export default Accordian;
