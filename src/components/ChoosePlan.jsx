function ChoosePlan({ type, use, pricing }) {
  return (
    <div className="flex flex-col bg-gray-50 md:flex-1 hover:-translate-y-5 py-9 px-8 pt-10 gap-y-6 border-2 border-gray-200 rounded-xl">
      <h1 className="text-4xl font-semibold">{type}</h1>
      <p className="text-xl text-gray-500">{use}</p>
      {pricing !== null && (
        <h1 className="text-4xl font-semibold">{pricing}</h1>
      )}
      <h1 className="font-medium">KEY FEATURES</h1>
      <ul className="flex flex-col gap-y-5">
        <li className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path>
          </svg>
          <p className="text-gray-500">Free For Personel Use</p>
        </li>
        <li className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path>
          </svg>
          <p className="text-gray-500">Free For Personel Use</p>
        </li>
        <li className="flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
          <p className="text-gray-500">Free For Personel use</p>
        </li>
        <li className="flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
          <p className="text-gray-500">Free For Personel use</p>
        </li>
      </ul>
      <button className="border-2 border-gray-100 rounded-lg px-14 py-4 hover:opacity-75 bg-blue-600 text-white">
        Read Docs
      </button>
    </div>
  );
}

export default ChoosePlan;
