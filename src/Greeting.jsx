import "./Greeting.css";

export default function Greeting({ name }) {
  const customStyle = {
    color: "blue",
    fontSize: "20px"
  };
  return (
    <h1 style={customStyle} className="greeting-text">
    Hello, {name}!
    </h1>
    );
}

