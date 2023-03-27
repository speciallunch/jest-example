interface IUser {
  name?: string | undefined;
}

export default function Header({ name }: IUser) {
  return (
    <div>
      {name ? (
        <h1>{name}님 환영합니다.</h1>
      ) : (
        <h1>
          로그인해주세요<button>로그인</button>
        </h1>
      )}
    </div>
  );
}
