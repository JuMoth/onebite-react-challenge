import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useRef, useReducer, useCallback, createContext, useMemo } from "react";

/* 실제로 State의 값을 변경시키는 reducer 함수 */
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      /* 새로운 연락처 아이템을 배열 맨 앞에 추가 */
      return [action.data, ...state];
    case "REMOVE":
      /* action.targetId와 일치하는 연락처 아이템 제거 */
      return state.filter((it) => it.id !== action.targetId);
    default:
      /* action.type이 제대로 전달되지 않았을 때에는 State 변경 X */
      return state;
  }
};

export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

function App() {
  /* App 전반에 사용될 연락처 데이터(배열) */
  const [contacts, dispatch] = useReducer(reducer, []);

  /* 새롭게 추가되는 아이템의 id를 위한 Reference 객체  */
  const idRef = useRef(0);

  /* 새로운 연락처를 추가하는 함수 - <ContactEditor/> 컴포넌트에서 호출될 예정 */
  const onCreateContact = useCallback((name, contact) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name,
        contact,
      },
    });
  }, []);

  /* 기존 연락처를 삭제하는 함수 - <ContactItem/> 컴포넌트에서 호출될 예정 */
  const onRemoveContact = useCallback((targetId) => {
    dispatch({
      type: "REMOVE",
      targetId,
    });
  }, []);

  const memoizedDispatches = useMemo(
    () => ({ onCreateContact, onRemoveContact }),
    []
  );

  return (
    <div className="App">
      <ContactStateContext.Provider value={contacts}>
        <ContactDispatchContext.Provider value={memoizedDispatches}>
          <h2>Contact List</h2>
          <section>
              <ContactEditor />
          </section>
          <section>
              <ContactList />
          </section>
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;