import { useState } from 'react';

const Address = () => {
    const [address, setAddress] = useState("");

    const onChangeAddress = (e) => {
      setAddress(e.target.value);
    }

    return (
        <div>
          <div style={{ marginBottom: 5, fontSize: 14 }}>
            배달 주소
          </div>
          <input
            value={address}
            onChange={onChangeAddress}
            style={{ width: 300, padding: 5 }}
            placeholder="주소) 서울특별시 xx동 .."
          />
        </div>
    )
}

export default Address;