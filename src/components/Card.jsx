function Card() {
  return (
    <div className=" transition ease-in-out delay-150 shadow-md   bg-slate-200 w-[200px] h-[250px] rounded-lg ml-52 mt-9 hover:bg-green-400 hover:scale-110 border-slate-500 border-2">
      <img
        className="w-[200px] h-[150px]"
        src="https://media.istockphoto.com/id/858701710/photo/fluffy-gray-kitten-of-a-russian-blue-cat.webp?a=1&b=1&s=612x612&w=0&k=20&c=u_c9IcKbDdEkUXQmlFN7lY4O_PiGvDQBgL2Dw4F5NUU="
      ></img>
      <h1 className="font-mono">Cat</h1>
    </div>
  );
}

export default Card;
