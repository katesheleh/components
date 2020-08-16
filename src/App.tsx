import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';

let items = [
	{
		title: 'John',
		value: 'John Value Test'
	},
	{
		title: 'Katia',
		value: 'Katia Value Test'
	},
	{
		title: 'FakeName',
		value: 'FakeName Value Test'
	}
]

function App() {

	let [ratingValue, setRationgValue] = useState<RatingValueType>(0);
	let [ratingValue1, setRationgValue1] = useState<RatingValueType>(0);

	let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

	let [switchOn, setSwitchOn] = useState(false);

	const setValueOnClick = (value: string) => {
		alert(`user with id ${value} was clicked`)
		debugger
	}

	return (
			<div className="App">

				<h2>Uncontrolled On Off</h2>
				<UncontrolledOnOff onChange={setSwitchOn} defaultOn={true}/> {switchOn.toString()}
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
						items={items}
						onClick={setValueOnClick}
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
			</div>
	);
}

export default App;
