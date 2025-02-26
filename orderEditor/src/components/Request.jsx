import { useState } from 'react';

const Request = () => {
    const [request, setRequest] = useState("");

    const onChangeRequest = (e) => {
        setRequest(e.target.value);
      }
    
    return (
        <div>
          <div style={{ marginBottom: 5, fontSize: 14 }}>
            배달 요청사항
          </div>
          <textarea
            value={request}
            onChange={onChangeRequest}
            style={{ width: 300, padding: 5 }}
            placeholder="배달 요청사항을 써 주세요..."
          />
        </div>
    )
}

export default Request;