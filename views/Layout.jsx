const React = require('react');

module.exports = function Layout({ children, userInfo }) {
    // const user = {};
    // if(userName){
    //     user = userName
    // } else {
    //     user = adminName
    // } 

    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <link rel="stylesheet" href="/css/styles.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous" />


                <script defer src="/application.js" />
                <title>Welcome to the homepage</title>
            </head>
            <body>
                { }
                <header role="banner" className="mar-t-5 pad-t-2 pad-b-4 pad-s-1 wrap-float bg-white">
                    <div className="max-w-700 center wrap-float">
                        {userInfo?.name ? (
                            <>
                                <nav className="navbar navbar-expand-lg bg-light">
                                    <div className="container-fluid">
                                        <a className="navbar-brand" href="/">Главная</a>
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarNav">
                                            <ul className="navbar-nav">
                                              
                                                
                                              <li className="nav-item">
                                                 <a className="nav-link" href="/create">Добавить пост</a>
                                             </li>
                                                
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/auth/signout">Выйти</a>
                                                </li>
                                                <li className="nav-item">
                                                    < a className="nav-link">hello, {userInfo.name}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </>
                        ) : (
                            <>
                                <nav class="navbar navbar-expand-lg bg-light">
                                    <div class="container-fluid">
                                       
                                        <div class="collapse navbar-collapse" id="navbarNav">
                                            <ul class="navbar-nav">
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/auth/login">Войти</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/auth/signup">Регистрация</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </>
                        )}
                    </div>
                </header>
                <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
                    <div className="max-w-700 center">
                        {children}
                    </div>
                </div>
            </body>

        </html>
    );
};
