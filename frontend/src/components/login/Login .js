import React from "react";

const Login = ({ onLogin }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      return;
    }
    const { email, password } = data;
    onLogin({ email, password });
  };

  return (
    <main className="first-page">
      <h1 className="first-page__text">Вход</h1>
      <form onSubmit={handleSubmit} className="first-page__form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="first-page__input"
          required
          minLength={2}
          maxLength={40}
          id="email"
          value={data.email}
          onChange={handleChange}
        />
        <span className="popup__input-error"></span>
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          className="first-page__input"
          required
          minLength={2}
          maxLength={200}
          id="password"
          value={data.password}
          onChange={handleChange}
        />
        <span className="popup__input-error"></span>
        <button className="first-page__button" type="submit">
          Войти
        </button>
      </form>
    </main>
  );
};

export default Login;
