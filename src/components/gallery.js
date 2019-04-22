import React, { Component, Fragment } from 'react';
import '../style/index.css';
import '../style/camogreen.css';
import history from '../history';
import { Link } from 'react-router-dom';

class Gallery extends Component {
    state = {
        galleryOverlay: false,
        photoId: ''
    }

    getRoute = (route) => {
        history.push(route);
    }

    toggleOverlay = (id) => {
        this.setState({galleryOverlay: !this.state.galleryOverlay, photoId: id})
    }

    closePhoto = () => {
        this.setState({galleryOverlay: !this.state.galleryOverlay, photoId: ''})
    }

    getPhoto = () => {
        const {galleryOverlay} = this.state;
        return(
        galleryOverlay && <Fragment>
            <div id="overlay-photo">
                <section className="wrapper">
                    <div className="inner">
                        <header>
                            <div className="spacerFloat50"></div>
                            <div className="closebtn tar" onClick={this.closePhoto}>x</div>
                        </header>
    
                            <div className="row uniform tac">
    
                                <div className="2u 12u(xsmall)">&nbsp;</div>
                                <div id="photoStage" className="8u 12u(xsmall)">
                                    <img src={require('../assets/gallery/'+this.state.photoId+'.jpg')} alt=""/>
                                </div>
                                <div className="2u 12u$(xsmall)">&nbsp;</div>
    
                                <div className="spacer50"></div>
    
                            </div>
    
                    </div>
                </section>
            </div>
    </Fragment>
    )
    }
    render() {
        return(
            <Fragment>
                <section id="banner2"></section>
                <section className="wrapper">
					<div className="inner">
						<div id="property" className="toTopContainer">
                            <a href='' onClick={() => this.getRoute('/about')} >
                            <img src={require('../assets/back.png')} className="toTop" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth' })} alt=""/>
                            </a>
                        </div>
						<header>
							<h2 className="tac"><u>Photos</u></h2>
						</header>

						<div className="box alt">
							<div className="row uniform 50%">
								<div className="4u">
                                    <span className="image fit">
                                        <img src={require('../assets/gallery/0083.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0083')}/>
                                    </span>
           
                                  </div>
    								<div className="4u">
                                        <span className="image fit">
                                    <img src={require('../assets/gallery/0082.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0082')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0081.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0081')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0080.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0080')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0079.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0079')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0078.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0078')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0075.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0075')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0074.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0074')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0073.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0073')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0072.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0072')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0071.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0071')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0070.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0070')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0069.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0069')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0068.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0068')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0067.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0067')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0066.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0066')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0065.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0065')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0064.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0064')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0063.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0063')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0062.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0062')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0061.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0061')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0060.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0060')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0059.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0059')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0058.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0058')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0057.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0057')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0056.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0056')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0055.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0055')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0054.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0054')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0053.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0053')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0052.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0052')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0051.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0051')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0050.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0050')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0048.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0048')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0047.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0047')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0046.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0046')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0045.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0045')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0044.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0044')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0043.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0043')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0042.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0042')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0041.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0041')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0039.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0039')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0038.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0038')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0037.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0037')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0036.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0036')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0035.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0035')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0033.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0033')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0032.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0032')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0031.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0031')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0030.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0030')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0029.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0029')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0028.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0028')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0026.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0026')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0025.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0025')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0024.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0024')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0023.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0023')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0022.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0022')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0021.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0021')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0020.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0020')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0019.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0019')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0017.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0017')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0015.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0015')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0014.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0014')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0013.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0013')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0012.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0012')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0011.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0011')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0010.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('0010')}/>                                    </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0009.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('009')}/>                                   </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0008.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('008')}/>                                   </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0006.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('006')}/>                                   </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0005.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('005')}/>                                   </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0004.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('004')}/>                                   </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0003.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('003')}/>                                   </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0002.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('002')}/>                                   </span>
                                </div>
								<div className="4u">
                                    <span className="image fit">
                                    <img src={require('../assets/gallery/0001.jpg')} alt="" className="xlink" onClick={() => this.toggleOverlay('001')}/>                                   </span>
                                </div>
							</div>
						</div>
                    </div>
                </section>

				<section className="wrapper">
					&nbsp;
				</section>
                {this.getPhoto()}
            </Fragment>
        );
    }
}


export default Gallery;
