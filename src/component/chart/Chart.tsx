import { useEffect, useState } from 'react';
import {
	Chart as ChartJS,
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	LineController,
	BarController,
	Filler,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { httpClient } from '../../httpClient/httpClient';
import { MyChart } from './Chart.style';

ChartJS.register(
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	LineController,
	BarController,
	Filler,
);

function ChartDiv() {
	const [responseData, setResponseData] = useState<
		Record<string, { id: string; value_area: number; value_bar: number }>
	>({});

	const labels = responseData && Object.keys(responseData);

	const mappedData = Object.keys(responseData).map(key => {
		const item = responseData[key];
		return {
			timestamp: key,
			id: item.id,
			value_area: item.value_area,
			value_bar: item.value_bar,
		};
	});

	const data = {
		labels,
		datasets: [
			{
				type: 'bar' as const,
				label: 'value_bar',
				backgroundColor: 'rgb(171, 207, 251)',
				hoverBackgroundColor: 'rgb(0, 95, 211)',
				data: mappedData.map(item => item.value_bar),
				borderColor: 'white',
				borderWidth: 0.1,
				yAxisID: 'bar',
				order: 2,
			},
			{
				type: 'line' as const,
				label: 'value_area',
				fill: true,
				tension: 0.1, // 곡선의 강도 조절 (0에서 1 사이)
				borderColor: 'rgb(233, 69, 104)',
				backgroundColor: 'rgba(255, 99, 132, 0.6)',
				borderWidth: 1,
				pointBorderWidth: 0,
				pointHoverBorderWidth: 0,
				pointHoverBackgroundColor: 'rgb(130, 37, 57)',
				pointRadius: 0, // 포인트의 반지름을 조절 (기본값: 3)
				pointHoverRadius: 6, // 호버 상태일 때 포인트의 크기를 조절
				data: mappedData.map(item => item.value_area),
				yAxisID: 'area',
				order: 1,
			},
		],
	};

	const options = {
		responsive: true,
		interaction: {
			mode: 'index' as const,
			intersect: false,
		},

		scales: {
			bar: {
				type: 'linear',
				position: 'left',
				title: { display: true, text: 'Bar' },
				ticks: {
					beginAtZero: true, // 축 눈금을 0에서 시작
					stepSize: 2000, // 눈금 간격
					font: {
						size: 12, // 눈금 글꼴 크기
						color: 'rgb(0, 95, 211)', // 눈금 글꼴 색상
					},
				},
			},
			area: {
				type: 'linear',
				position: 'right',
				title: { display: true, text: 'Area' },
				ticks: {
					beginAtZero: true, // 축 눈금을 0에서 시작
					stepSize: 20, // 눈금 간격
					font: {
						size: 12, // 눈금 글꼴 크기
						color: 'rgb(233, 69, 104)', // 눈금 글꼴 색상
					},
				},
				max: 160,
			},
		},
		plugins: {
			tooltip: {
				callbacks: {
					afterTitle: function (i: any) {
						return `id : ${mappedData[i[0].dataIndex].id}`;
					},
				},
			},
		},
	};

	useEffect(() => {
		const loadData = async () => {
			const responseData = await httpClient.fetch();
			setResponseData(responseData.response);
		};

		loadData();
	}, []);

	if (labels.length === 0) {
		return <div>...로딩중</div>;
	} else {
		return (
			<MyChart>
				<Chart type="bar" data={data} options={options as any} />
			</MyChart>
		);
	}
}

export default ChartDiv;
