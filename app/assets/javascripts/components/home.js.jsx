var Home = React.createClass({

  render: function() {
    return (
      <div className="home">
        <div className="home-navbar">
        <h1 className="home-navbar-title"><i className="fa fa-asterisk" ariaHidden="true"></i>Astrix</h1>
        <ul className="home-navbar-menu">
          <li className="home-navbar-menu-item"><a href="#">The Story</a></li>
          <li className="home-navbar-menu-item"><a href="#">About</a></li>
          <li className="home-navbar-menu-item"><a href="#"><i className="fa fa-github" ariaHidden="true"></i> Github Login</a></li>
        </ul>
        </div>


        <h3 className="home-subtitle">The Github Repo Management Tool Every Stargazer Should Have</h3>

        <div className="home-buttons">
          <div className="home-buttons-learnMoreBtn">Learn More</div>
          <p className="home-buttons-separator">OR</p>
          <div className="home-buttons-signUpBtn">Get Started</div>
        </div>

        <div className="home-hero">
          <video className="covervid-video" autoPlay loop poster="img/video-fallback.png">
            <source src="https://dl.dropboxusercontent.com/u/95000234/CDN/AstroCat/videos/space.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    );
  }
});
