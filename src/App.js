import './App.css';
import Trello from "./Components/Trello";
import {useState} from "react";
import {useDispatch} from "react-redux";
import Input from "./common/input/Input";


function App() {
    const [addList, setAddList] = useState(false)
    const [text, setText] = useState("")
    const dispatch = useDispatch();

  return (
      <div className="flex m-4">
          <Trello />
          <div>
              {
                  !addList
                  ?
                  <button
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                      onClick={() => setAddList(true)}
                  >
                      + Add another column
                  </button>
                  :
                  <div
                      className="rounded-xl p-5 bg-gray-100 flex flex-col gap-3"
                  >
                      <Input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      />

                      <div>
                          <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                              onClick={() => {
                                  setAddList(false)
                                  setText("")
                                  !!text
                                      ?
                                      dispatch({
                                          type: "addList",
                                          payload: {
                                              text: text
                                          }
                                      })
                                      :
                                      setAddList(true)
                              }}
                          >
                              Add list
                          </button>
                          <button
                              className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold mx-2 py-1 px-2 rounded inline-flex items-center"
                              onClick={() => {
                                  setAddList(false)
                                  setText("")
                              }}
                          >
                              &times;
                          </button>
                      </div>
                  </div>
              }
          </div>
      </div>
  );
}

export default App;
