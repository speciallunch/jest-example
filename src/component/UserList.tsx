import { useEffect, useState } from "react";
import type { IUser, IUsers } from "../App";

export default function UserList({
  users,
  delay = 0,
}: {
  users: IUsers;
  delay?: number;
}) {
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    if (delay !== 0) {
      setShowTitle(false);
      setTimeout(() => {
        setShowTitle(true);
      }, delay);
    }
  }, []);

  return (
    <>
      {showTitle && (
        <div>
          <h3>유저리스트</h3>
          <ul>
            {users.map((user) => (
              <li key={user.name}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
