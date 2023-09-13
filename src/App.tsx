import ChartDiv from './components/chart/Chart';
import { useState } from 'react';
import Filters from './components/filter/filter';

function App() {
	const [activeTab, setActiveTab] = useState<string>('');

	return (
		<div>
			<Filters activeTab={activeTab} setActiveTab={setActiveTab} />
			<ChartDiv activeTab={activeTab} />
		</div>
	);
}

export default App;
