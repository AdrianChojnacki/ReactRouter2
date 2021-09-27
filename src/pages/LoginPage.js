import React from "react";

export default function LoginPage() {
  return (
    <div>
      <div>
        <label htmlFor="">
          Podaj login
          <input type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="">
          Podaj hasło
          <input type="password" />
        </label>
      </div>
      <button>Zaloguj</button>
    </div>
  );
}
