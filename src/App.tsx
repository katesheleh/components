import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';


function App() {

	let [ratingValue, setRationgValue] = useState<RatingValueType>(0);
	let [ratingValue1, setRationgValue1] = useState<RatingValueType>(0);

	let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

	let [switchOn, setSwitchOn] = useState(false);

	return (
			<div className="App">

				<h2>Uncontrolled On Off</h2>
				<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
				<hr/>


				<h2>Controlled On Off</h2>
				<OnOff
						on={switchOn}
						onChange={(on) => setSwitchOn(on)}/>
				<hr/>

				<h2>Controlled Accordion</h2>
				<Accordion
						title='Accordion Title'
						collapsed={accordionCollapsed}
						onChange={() => {
							setAccordionCollapsed(!accordionCollapsed)
						}}/>
				<hr/>

				<h2>Uncontrolled Accordion</h2>
				<UncontrolledAccordion title='Uncontrolled Accordion Body'/>

				<hr/>

				<h2>Rating</h2>
				<Rating value={ratingValue} onClick={setRationgValue}/>
				<Rating value={ratingValue1} onClick={setRationgValue1}/>

				<hr/>

				<h2>Uncontrolled Rating</h2>
				<UncontrolledRating/>
				<UncontrolledRating/>
			</div>
	);
}

export default App;
