import { REGION } from '../../constants/constants';
import { Filter } from './filter.style';

const Filters = ({
	activeTab,
	setActiveTab,
}: {
	activeTab: string;
	setActiveTab: (activeTab: string) => void;
}) => {
	const handleTabClick = (tabName: string) => {
		setActiveTab(tabName);
	};

	return (
		<Filter>
			<button
				className={`tab-button ${activeTab === REGION.SEONG_BUK ? 'active' : ''}`}
				onClick={() => handleTabClick(REGION.SEONG_BUK)}
			>
				성북구
			</button>
			<button
				className={`tab-button ${activeTab === REGION.GANG_NAM ? 'active' : ''}`}
				onClick={() => handleTabClick(REGION.GANG_NAM)}
			>
				강남구
			</button>
			<button
				className={`tab-button ${activeTab === REGION.NO_WON ? 'active' : ''}`}
				onClick={() => handleTabClick(REGION.NO_WON)}
			>
				노원구
			</button>
			<button
				className={`tab-button ${activeTab === REGION.JUNG_NANG ? 'active' : ''}`}
				onClick={() => handleTabClick(REGION.JUNG_NANG)}
			>
				중랑구
			</button>
		</Filter>
	);
};

export default Filters;
