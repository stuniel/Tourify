import React from 'react';

class Artist extends React.Component {

  render() {
    const details = this.props.details;
    const name = details.name;
    const image = details.image_url;
    const facebook = details.facebook_page_url;
    return (
      <div className="col s12">
        <div className="card">
          <div className="card-content waves-effect waves-block waves-light s12 m9">
            <div className="row valign-wrapper">

              <div className="col s12 m6 l3">
                <img className="responsive-img" src={image} alt={`Photo of ${name}`} />
              </div>

              <div className="col s12 m6 l9">
                <h4 className="header2">{name}</h4>
                <a target="_blank" href={facebook}>Facebook Page</a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Artist;
