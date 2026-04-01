export default function Button() {
    const handleClick = () => {
      console.log("버튼 클릭됨");
      alert("반갑습니다!");
    };
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }