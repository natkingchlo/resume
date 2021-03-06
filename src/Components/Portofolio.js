import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var stackLogo = projects.stackLogo.map(function(logo) {
          return (<img className="brand px-2" src={process.env.PUBLIC_URL + "/img/logo/" + logo +".svg"} alt={logo}></img>)
        })
        var projectImage = process.env.PUBLIC_URL + "/img/" + projects.image;
        return <div key={projects.title} className="col-lg-4 col-md-6 col-sm-12">
           <div className="item-wrap">
               <img alt={projects.title} src={projectImage} className="img-responsive project-img my-3" />
               <div className="overlay">
                  <div className="portfolio-item-meta futura">
                        <h5 className="futura u2 ">{projects.title}</h5>
                        <p className="karla dark-white">{projects.category}</p>
                        {stackLogo}
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
          </div>
        </div>
      })
    }
    return (
      <section id="portfolio" className="my-5">

      <div className="row">

         <div className="col-md-12 text-center my-5">
            <h1 className="">Check Out Some of My Works.</h1>
          </div>

        <div className="container">
            <div className="col-md-12">
                <div id="portfolio-wrapper" className="row">
                  {projects}
                </div>
            </div>
        </div>


      </div>
   </section>
    );
  }
}

export default Portfolio;