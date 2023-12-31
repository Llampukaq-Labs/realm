import React, { PropsWithChildren, ReactNode, useContext } from "react";
import { RealmContext } from "../context/RealmProvider";

function RealmAccess({ children }: PropsWithChildren) {
  const { Error401, isLogin } = useContext(RealmContext) as {
    Error401: ReactNode;
    isLogin: { isLogin: boolean };
  };

  return <>{isLogin.isLogin ? children : <>{Error401}</>}</>;
}

export default RealmAccess;
