import { useState } from 'react';

const Menu = () => {
    const [menu, setMenu] = useState("");

    const onChangeMenu = (e) => {
      setMenu(e.target.value);
    }

    return (
        <div>
          <div style={{ marginBottom: 5, fontSize: 14 }}>
            메뉴 선택
          </div>
          <select
            style={{ width: 300, padding: 5 }}
            value={menu}
            onChange={onChangeMenu}
          >
            <option value={"족발"}>족발</option>
            <option value={"떡볶이"}>떡볶이</option>
            <option value={"아이스크림"}>아이스크림</option>
            <option value={"샐러드"}>샐러드</option>
          </select>
        </div>
    )
}

export default Menu;