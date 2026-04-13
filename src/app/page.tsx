'use client'

export default function Home() {
  function handleClick() {
    alert("EBA!");
  }

  const handleButtonClick = () => {
    alert("Function em constante");
  }

  const notice = (msg: string) => {
    alert(msg);
  }

  const handleButtonComponent = () => {
    alert("Evento em componente")
  }

  return (
    <div className="flex flex-col w-screen justify-center items-center gap-2">
      <button onClick={handleClick}>Clique aqui</button>
      <button onClick={handleButtonClick}>Clique aqui</button>
      <button onClick={() => notice("SEI LÁ")}>Clique aqui</button>
      <button onClick={handleButtonComponent}>Clique aqui</button>
    </div>
  );
}
