import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [isCopied, setIsCopied] = useState("Copy");

  // useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVXWZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+{}[]~";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const passwordCopyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length + 1);
    window.navigator.clipboard.writeText(password);

    setIsCopied("Copied!");
    setTimeout(() => {
      setIsCopied("Copy");
    }, 2000);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-6 my-8  bg-gray-700">
          <h1 className="text-xl font-bold text-center mb-4">
            Password Generator
          </h1>
          <div className="flex shadow overflow-hidden mb-4 bg-white">
            <input
              type="text"
              value={password}
              ref={passwordRef}
              className="outline-none w-full py-1 px-3 border-r-0 text-black"
              placeholder="Password"
              readOnly
            />
            <button
              onClick={passwordCopyToClipboard}
              className="outline-none bg-blue-700 px-3 py-0.5 shrink-0 cursor-pointer"
            >
              {isCopied}
            </button>
          </div>
          <div className="flex items-center justify-between text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={8}
                max={20}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-5">
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={() => {
                    setNumberAllowed((prev) => !prev);
                  }}
                />
                <label>Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id="characterInput"
                  onChange={() => {
                    setCharacterAllowed((prev) => !prev);
                  }}
                />
                <label>Characters</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
