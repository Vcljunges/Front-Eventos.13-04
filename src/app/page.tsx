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
    alert("Evento em componente");
  }

  return (
    <div className="flex flex-col w-screen justify-center items-center gap-2">
      <button className="p-3 bg-blue-700 text-white rounded-md" onClick={handleClick}>Clique aqui</button>
      <button className="p-3 bg-blue-700 text-white rounded-md" onClick={handleButtonClick}>Clique aqui</button>
      <button className="p-3 bg-blue-700 text-white rounded-md" onClick={() => notice("SEI LÁ")}>Clique aqui</button>
      <button className="p-3 bg-blue-700 text-white rounded-md" onClick={handleButtonComponent}>Clique aqui</button>
    </div>
  );
}
