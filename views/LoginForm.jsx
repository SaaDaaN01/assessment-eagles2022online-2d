const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <form className="parentDiv" action="/auth/login" method="post" >
        <div>
          <label htmlFor="exampleInputEmail1" className="form-label">Почта</label>
          <input name="email"type="name" className="form-control" id="userName" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
          <input name="pass" type="name" className="form-control" id="userPass" />
        </div>

        <button type="submit" className="btn btn-primary">Войти</button>
      </form>
    </Layout>
  );
};
