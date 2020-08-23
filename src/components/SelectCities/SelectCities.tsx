import React, {KeyboardEvent, useEffect, useMemo, useState} from 'react';
import styles from './SelectCities.module.css';

const SelectCities = React.memo((props: SelectType) => {
	const [active, setActive] = useState<boolean>(false)
	const [hoveredElem, setHoveredElem] = useState(props.value)
	const [selectItems, setSelectItems] = useState(props.items)

	const selectedItem = props.items.find(item => item.value === props.value)
	const hoveredItem = props.items.find(item => item.value === hoveredElem)

	useEffect(() => {
		setHoveredElem(props.value)
	}, [props.value])

	const toggleItems = () => setActive(!active)

	const onOptionClick = (value: string) => {
		props.onChange(value)
		toggleItems()
	}

	const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
			for (let i = 0; i < props.items.length; i++) {
				if (props.items[i].value === hoveredElem) {
					const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
					if (pretendentElement) {
						props.onChange(pretendentElement.value)
						return
					}
				}
			}
			if (!selectedItem) {
				props.onChange(props.items[0].value)
			}
		}

		if (e.key === 'Enter' || e.key === 'Escape') {
			setActive(false)
		}
	}

	const showFilteredItemsByCountry = (country: string) => {
		const filteredArray = props.items.filter(item => item.country === country)
		console.log(filteredArray)
		setSelectItems(filteredArray)
	}

	/* GET UNIQUE VALUES AND PRINT IT */
	const countries = props.items.filter((item, index, self) =>
			index === self.findIndex((itemSelf) => itemSelf.country === item.country)
	).map(i => <button key={i.value} onClick={() => showFilteredItemsByCountry(i.country)}>{i.country}</button>)

	return (
			<div className={`${styles.select}`} onKeyUp={onKeyUp} tabIndex={0}>
				<h3 onClick={toggleItems}>{selectedItem ? selectedItem.title : 'Choose an option'}</h3>

				Filter by country: {countries}

				{active && <div className={styles.options}>

					{selectItems.map(((item) =>
							<p
									key={item.value}
									onMouseEnter={() => setHoveredElem(item.value)}
									onClick={() => onOptionClick(item.value)}
									className={(hoveredItem === item ? styles.selected : '')}>
								{item.title}
							</p>))}
				</div>}
			</div>
	)
})

export default SelectCities


// types
type SelectType = {
	value: string | null
	items: ItemType[]
	onChange: (value: string) => void
}

export type ItemType = {
	title: string
	value: string
	country: string
}