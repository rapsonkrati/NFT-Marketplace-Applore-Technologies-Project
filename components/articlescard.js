import Styles from '../public/styles/Articles.module.css';
import Image from "next/image";
import Cardbg from '../public/images/Cardbg.png';


const Article =(props)=> {
		var image = props.img,
				title = props.desc
		return (
			<figure className={Styles.snip1584}>
				<img src={image} />
				<figcaption>
					<h3>{title}</h3>
				</figcaption><a href="#"></a>
			</figure>
		)
}
const News=(props)=>{
		var data = props;
		var newsTemplate;
		var settings = {
    	dots: true,
			infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,
    }
		if (data.length > 0) {
			newsTemplate = data.map(function(item, index) {
				return (
						<div key={index}>
							{Article({item})}
						</div>
				)
			})
		} else {
			newsTemplate = <p>Please add some cards</p>
		}
		return (
			<div className={Styles.news}>
				<slider {...settings}>{newsTemplate}</slider>
				<strong className={'news__count ' + (data.length > 0 ? '':'none') }>
					Total cards: {data.length}
				</strong>
			</div>
		);
	}

const Displayarticles=()=>{
    var arts = [
        { "desc": "Fermentum aliquam turpis ultricies semper maecenas habitant gravida dictumst. Tellus congue est morbi nulla integer. Elementum, lorem quis in consequat amet, venenatis.", "link":{Cardbg} },
        { "desc": "Fermentum aliquam turpis ultricies semper maecenas habitant gravida dictumst. Tellus congue est morbi nulla integer. Elementum, lorem quis in consequat amet, venenatis.","link":{Cardbg}},
        { "desc": "Fermentum aliquam turpis ultricies semper maecenas habitant gravida dictumst. Tellus congue est morbi nulla integer. Elementum, lorem quis in consequat amet, venenatis.","link":{Cardbg}},
        { "desc": "Fermentum aliquam turpis ultricies semper maecenas habitant gravida dictumst. Tellus congue est morbi nulla integer. Elementum, lorem quis in consequat amet, venenatis.","link":{Cardbg}},
        { "desc": "Fermentum aliquam turpis ultricies semper maecenas habitant gravida dictumst. Tellus congue est morbi nulla integer. Elementum, lorem quis in consequat amet, venenatis.","link":{Cardbg}},
        { "desc": "Fermentum aliquam turpis ultricies semper maecenas habitant gravida dictumst. Tellus congue est morbi nulla integer. Elementum, lorem quis in consequat amet, venenatis.","link":{Cardbg}},
        { "desc": "Fermentum aliquam turpis ultricies semper maecenas habitant gravida dictumst. Tellus congue est morbi nulla integer. Elementum, lorem quis in consequat amet, venenatis.","link":{Cardbg}},
        { "desc": "Fermentum aliquam turpis ultricies semper maecenas habitant gravida dictumst. Tellus congue est morbi nulla integer. Elementum, lorem quis in consequat amet, venenatis.","link":{Cardbg}},
        { "desc": "Fermentum aliquam turpis ultricies semper maecenas habitant gravida dictumst. Tellus congue est morbi nulla integer. Elementum, lorem quis in consequat amet, venenatis.","link":{Cardbg}}
    ];

    return (
        <div className={Styles.app}>
            <h3>Cards</h3>
            {News({arts})}
        </div>
    );
}
export default Displayarticles; 